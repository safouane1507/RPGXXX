const express = require('express');
const { getAll, getBySlug, getByDomain, create, update, toggleActive, getStats } = require('../controllers/annuaire.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { isAdmin, isPro } = require('../middleware/role.middleware');

const router = express.Router();

router.get('/',                       getAll);
router.get('/stats',                  authenticate, isAdmin, getStats);
router.get('/domain/:domain',         getByDomain);
router.get('/:slug',                  getBySlug);
router.post('/',                      authenticate, isPro, create);
router.put('/:id',                    authenticate, isPro, update);
router.patch('/:id/toggle-active',    authenticate, isAdmin, toggleActive);

module.exports = router;
