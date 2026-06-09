const express = require('express');
const { getAll, getBySlug, getByDomain, create, update, toggleActive, getStats } = require('../controllers/annuaire.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { isAdmin, isPro } = require('../middleware/role.middleware');

const router = express.Router();

router.get('/',                       getAll);
router.get('/stats',                  authenticate, isAdmin, getStats);
router.get('/domain/:domain',         getByDomain);
router.get('/my',                     authenticate, isPro, async (req, res) => {
  const Annuaire = require('../models/Annuaire.model');
  try {
    const a = await Annuaire.findOne({ proActor: req.user._id });
    if (!a) return res.status(404).json({ error: 'Aucune fiche annuaire' });
    res.json({ data: a });
  } catch (e) { res.status(500).json({ error: 'Erreur' }); }
});
router.get('/:slug',                  getBySlug);
router.post('/',                      authenticate, isPro, create);
router.put('/:id',                    authenticate, isPro, update);
router.patch('/:id/toggle-active',    authenticate, isAdmin, toggleActive);

module.exports = router;
