const express = require('express');
const Tourism = require('../models/Tourism.model');
const { authenticate } = require('../middleware/auth.middleware');
const { isAdmin } = require('../middleware/role.middleware');

const router = express.Router();

// Public: liste des lieux actifs avec filtres
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 12, locationType, region, search, sort = '-isFeatured -createdAt' } = req.query;
    const filter = { isActive: true };
    if (locationType) filter.locationType = locationType;
    if (region)       filter['location.region'] = region;
    if (search)       filter.$text = { $search: search };

    const [total, places] = await Promise.all([
      Tourism.countDocuments(filter),
      Tourism.find(filter)
        .select('name shortDescription coverImage locationType location slug isFeatured')
        .sort(sort)
        .limit(Number(limit))
        .skip((Number(page) - 1) * Number(limit))
    ]);

    res.json({ data: places, pagination: { total, page: Number(page), pages: Math.ceil(total / Number(limit)) } });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Public: lieux mis en avant
router.get('/featured', async (req, res) => {
  try {
    const places = await Tourism.find({ isActive: true, isFeatured: true })
      .select('name shortDescription coverImage locationType location slug')
      .limit(6);
    res.json({ data: places });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Admin: tous les lieux (inclut inactifs)
router.get('/admin-all', authenticate, isAdmin, async (req, res) => {
  try {
    const { page = 1, limit = 20, locationType, search } = req.query;
    const filter = {};
    if (locationType) filter.locationType = locationType;
    if (search)       filter.$text = { $search: search };

    const [total, places] = await Promise.all([
      Tourism.countDocuments(filter),
      Tourism.find(filter)
        .select('name shortDescription coverImage locationType location slug isActive isFeatured createdAt')
        .sort('-createdAt')
        .limit(Number(limit))
        .skip((Number(page) - 1) * Number(limit))
    ]);

    res.json({ data: places, pagination: { total, page: Number(page), pages: Math.ceil(total / Number(limit)) } });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Public: détail par slug
router.get('/:slug', async (req, res) => {
  try {
    const place = await Tourism.findOne({ slug: req.params.slug, isActive: true })
      .populate('relatedPlaces', 'name shortDescription coverImage locationType slug')
      .populate('nearbyCooperatives', 'structureName description logo contact.city slug');

    if (!place) return res.status(404).json({ error: 'Lieu non trouvé' });

    await Tourism.findByIdAndUpdate(place._id, { $inc: { viewCount: 1 } });
    res.json({ data: place });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Admin: créer un lieu
router.post('/', authenticate, isAdmin, async (req, res) => {
  try {
    const slugify = require('slugify');
    const slug = slugify(req.body.name?.fr || '', { lower: true, strict: true }) + '-' + Date.now();
    const place = await new Tourism({ ...req.body, slug, createdBy: req.user._id }).save();
    res.status(201).json({ message: 'Lieu créé', data: place });
  } catch (error) {
    res.status(500).json({ error: 'Erreur création' });
  }
});

// Admin: mettre à jour un lieu
router.put('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const place = await Tourism.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!place) return res.status(404).json({ error: 'Lieu non trouvé' });
    res.json({ data: place });
  } catch (error) {
    res.status(500).json({ error: 'Erreur mise à jour' });
  }
});

// Admin: basculer isActive
router.patch('/:id/toggle', authenticate, isAdmin, async (req, res) => {
  try {
    const place = await Tourism.findById(req.params.id);
    if (!place) return res.status(404).json({ error: 'Lieu non trouvé' });
    place.isActive = !place.isActive;
    await place.save();
    res.json({ data: place });
  } catch (error) {
    res.status(500).json({ error: 'Erreur' });
  }
});

// Admin: basculer isFeatured
router.patch('/:id/feature', authenticate, isAdmin, async (req, res) => {
  try {
    const place = await Tourism.findById(req.params.id);
    if (!place) return res.status(404).json({ error: 'Lieu non trouvé' });
    place.isFeatured = !place.isFeatured;
    await place.save();
    res.json({ data: place });
  } catch (error) {
    res.status(500).json({ error: 'Erreur' });
  }
});

// Admin: supprimer un lieu
router.delete('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await Tourism.findByIdAndDelete(req.params.id);
    res.json({ message: 'Lieu supprimé' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur suppression' });
  }
});

module.exports = router;
