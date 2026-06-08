const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: "Token d'authentification requis" });
    }

    const token = authHeader.split(' ')[1];
    let decoded;

    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (e) {
      if (e.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Token expiré, veuillez vous reconnecter' });
      }
      return res.status(401).json({ error: 'Token invalide' });
    }

    const user = await User.findById(decoded.id).select('-password');
    if (!user)           return res.status(401).json({ error: 'Utilisateur non trouvé' });
    if (!user.isActive)  return res.status(403).json({ error: "Compte désactivé. Contactez l'administrateur." });
    if (user.isLocked)   return res.status(423).json({ error: 'Compte temporairement verrouillé' });

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ error: "Erreur d'authentification" });
  }
};

const optionalAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    req.user = null;
    return next();
  }
  return authenticate(req, res, next);
};

module.exports = { authenticate, optionalAuth };
