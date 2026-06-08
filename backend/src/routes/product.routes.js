const express = require('express');
const Product = require('../models/Product.model');
const { authenticate } = require('../middleware/auth.middleware');
const { isAdmin, isPro } = require('../middleware/role.middleware');

const router = express.Router();

// Public: liste des produits publiés
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 12, domain, search, minPrice, maxPrice, sort = '-createdAt' } = req.query;
    const filter = { status: 'published', isActive: true };

    if (domain)   filter.domain = domain;
    if (search)   filter.$text = { $search: search };
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const [total, products] = await Promise.all([
      Product.countDocuments(filter),
      Product.find(filter)
        .populate('proActor', 'proProfile.companyName')
        .select('-metaTitle -metaDescription -adminNotes')
        .sort(sort)
        .limit(Number(limit))
        .skip((Number(page) - 1) * Number(limit))
    ]);

    res.json({ data: products, pagination: { total, page: Number(page), pages: Math.ceil(total / Number(limit)) } });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Public: produits mis en avant (carousel homepage)
router.get('/featured', async (req, res) => {
  try {
    const products = await Product.find({ isFeatured: true, status: 'published', isActive: true })
      .select('name price coverImage domain slug proActor origin')
      .populate('proActor', 'proProfile.companyName')
      .limit(24);
    res.json({ data: products });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Public: produit par slug
router.get('/:slug', async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug, status: 'published' })
      .populate('proActor', 'proProfile.companyName proProfile.annuaireRef email');

    if (!product) return res.status(404).json({ error: 'Produit non trouvé' });

    await Product.findByIdAndUpdate(product._id, { $inc: { viewCount: 1 } });
    res.json({ data: product });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Protégé: le Pro crée un produit
router.post('/', authenticate, isPro, async (req, res) => {
  try {
    const product = await new Product({ ...req.body, proActor: req.user._id }).save();
    res.status(201).json({ message: 'Produit créé', data: product });
  } catch (error) {
    res.status(500).json({ error: 'Erreur création produit' });
  }
});

// Protégé: mise à jour (Pro sur ses produits, Admin sur tous)
router.put('/:id', authenticate, isPro, async (req, res) => {
  try {
    const query = { _id: req.params.id };
    if (req.user.role !== 'admin') query.proActor = req.user._id;

    const product = await Product.findOneAndUpdate(query, req.body, { new: true });
    if (!product) return res.status(404).json({ error: 'Produit non trouvé' });

    res.json({ message: 'Produit mis à jour', data: product });
  } catch (error) {
    res.status(500).json({ error: 'Erreur mise à jour' });
  }
});

// Admin: changer le statut
router.patch('/:id/status', authenticate, isAdmin, async (req, res) => {
  try {
    const { status } = req.body;
    const product = await Product.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!product) return res.status(404).json({ error: 'Produit non trouvé' });
    res.json({ message: 'Statut mis à jour', status: product.status });
  } catch (error) {
    res.status(500).json({ error: 'Erreur' });
  }
});

module.exports = router;
