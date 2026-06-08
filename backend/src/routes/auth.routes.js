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
router.patch('/preferences', authenticate, updatePreferences);

module.exports = router;
