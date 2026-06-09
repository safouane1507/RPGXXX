const express = require('express');
const { body } = require('express-validator');
const { register, login, getMe, updatePreferences } = require('../controllers/auth.controller');
const { authenticate } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/register', [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }).withMessage('Mot de passe: 8 caractères minimum'),
  body('firstName').trim().notEmpty(),
  body('lastName').trim().notEmpty()
], register);

router.post('/login', [
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty()
], login);

router.get('/me', authenticate, getMe);
router.put('/me', authenticate, async (req, res) => {
  try {
    const { firstName, lastName, phone, preferredLanguage } = req.body;
    const update = {};
    if (firstName !== undefined) update.firstName = String(firstName).trim();
    if (lastName  !== undefined) update.lastName  = String(lastName).trim();
    if (phone     !== undefined) update.phone      = String(phone).trim();
    if (preferredLanguage !== undefined) update.preferredLanguage = preferredLanguage;
    const user = await require('../models/User.model').findByIdAndUpdate(
      req.user._id, update, { new: true }
    );
    res.json({ user });
  } catch (e) {
    res.status(500).json({ error: 'Erreur mise à jour du profil' });
  }
});
router.patch('/preferences', authenticate, updatePreferences);

router.patch('/change-password', authenticate, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword || newPassword.length < 8) {
      return res.status(400).json({ error: 'Mot de passe invalide (8 caractères minimum)' });
    }
    const user = await require('../models/User.model').findById(req.user._id).select('+password');
    if (!await user.comparePassword(currentPassword)) {
      return res.status(401).json({ error: 'Mot de passe actuel incorrect' });
    }
    user.password = newPassword;
    await user.save();
    res.json({ message: 'Mot de passe modifié avec succès' });
  } catch (e) {
    res.status(500).json({ error: 'Erreur lors du changement de mot de passe' });
  }
});

module.exports = router;
