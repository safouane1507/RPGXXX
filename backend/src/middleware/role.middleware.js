const { USER_ROLES } = require('../config/constants');

const authorize = (...roles) => (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Authentification requise' });
  }
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({
      error: 'Accès refusé',
      required: roles,
      current: req.user.role
    });
  }
  next();
};

const isAdmin        = authorize(USER_ROLES.ADMIN);
const isPro          = authorize(USER_ROLES.PRO, USER_ROLES.ADMIN);
const isAuthenticated = authorize(USER_ROLES.ADMIN, USER_ROLES.PRO, USER_ROLES.CLIENT);

module.exports = { authorize, isAdmin, isPro, isAuthenticated };
