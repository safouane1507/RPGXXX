const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../models/User.model');
const { USER_ROLES } = require('../config/constants');

const generateToken = (userId, role) =>
  jwt.sign({ id: userId, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  });

const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { email, password, firstName, lastName, phone } = req.body;

    if (await User.findOne({ email })) {
      return res.status(409).json({ error: 'Un compte avec cet email existe déjà' });
    }

    const user = await new User({
      role: USER_ROLES.CLIENT,
      email, password, firstName, lastName, phone
    }).save();

    res.status(201).json({
      message: 'Compte créé avec succès',
      token: generateToken(user._id, user.role),
      user: { id: user._id, email: user.email, role: user.role, fullName: user.fullName }
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création du compte' });
  }
};

const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');

    if (!user)           return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
    if (user.isLocked)   return res.status(423).json({ error: 'Compte verrouillé. Réessayez dans 2h.' });
    if (!user.isActive)  return res.status(403).json({ error: "Compte désactivé. Contactez l'administrateur." });

    if (!await user.comparePassword(password)) {
      await user.incLoginAttempts();
      return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
    }

    await User.findByIdAndUpdate(user._id, {
      $unset: { loginAttempts: 1, lockUntil: 1 },
      $set: { lastLogin: new Date() }
    });

    res.json({
      message: 'Connexion réussie',
      token: generateToken(user._id, user.role),
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        fullName: user.fullName,
        preferredLanguage: user.preferredLanguage,
        avatar: user.avatar,
        proProfile: user.role === USER_ROLES.PRO ? user.proProfile : undefined
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la connexion' });
  }
};

const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate('proProfile.annuaireRef', 'structureName domain isActive slug');
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Erreur récupération profil' });
  }
};

const updatePreferences = async (req, res) => {
  try {
    const { preferredLanguage } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { preferredLanguage },
      { new: true }
    );
    res.json({ preferredLanguage: user.preferredLanguage });
  } catch (error) {
    res.status(500).json({ error: 'Erreur mise à jour' });
  }
};

module.exports = { register, login, getMe, updatePreferences };
