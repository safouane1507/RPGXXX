const express = require('express');
const User    = require('../models/User.model');
const Product = require('../models/Product.model');
const Annuaire = require('../models/Annuaire.model');
const Tourism = require('../models/Tourism.model');
const Event   = require('../models/Event.model');
const Blog    = require('../models/Blog.model');
const { authenticate } = require('../middleware/auth.middleware');
const { isAdmin } = require('../middleware/role.middleware');
const { USER_ROLES } = require('../config/constants');

const router = express.Router();
router.use(authenticate, isAdmin);

// ── Dashboard Stats ───────────────────────────────────────
router.get('/stats', async (req, res) => {
  try {
    const [
      totalProducts, publishedProducts,
      totalAnnuaire, activeAnnuaire, pendingAnnuaire,
      totalUsers, proUsers, clientUsers,
      totalEvents, totalBlogs
    ] = await Promise.all([
      Product.countDocuments(),
      Product.countDocuments({ status: 'published' }),
      Annuaire.countDocuments(),
      Annuaire.countDocuments({ isActive: true }),
      Annuaire.countDocuments({ isActive: false }),
      User.countDocuments(),
      User.countDocuments({ role: USER_ROLES.PRO }),
      User.countDocuments({ role: USER_ROLES.CLIENT }),
      Event.countDocuments(),
      Blog.countDocuments({ status: 'published' })
    ]);

    // Annuaire par domaine
    const annuaireByDomain = await Annuaire.aggregate([
      { $group: { _id: '$domain', count: { $sum: 1 }, active: { $sum: { $cond: ['$isActive', 1, 0] } } } },
      { $sort: { count: -1 } }
    ]);

    // Produits par domaine
    const productsByDomain = await Product.aggregate([
      { $group: { _id: '$domain', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    // Activité récente (nouveaux comptes Pro)
    const recentPros = await User.find({ role: USER_ROLES.PRO })
      .select('email proProfile.companyName proProfile.domain createdAt isActive')
      .sort('-createdAt')
      .limit(5);

    res.json({
      data: {
        products:  { total: totalProducts, published: publishedProducts },
        annuaire:  { total: totalAnnuaire, active: activeAnnuaire, pending: pendingAnnuaire },
        users:     { total: totalUsers, pro: proUsers, client: clientUsers },
        events:    { total: totalEvents },
        blogs:     { total: totalBlogs },
        byDomain:  { annuaire: annuaireByDomain, products: productsByDomain },
        recentPros
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur stats' });
  }
});

// ── Gestion Utilisateurs Pro ──────────────────────────────
router.get('/users', async (req, res) => {
  try {
    const { role, page = 1, limit = 20, isActive } = req.query;
    const filter = {};
    if (role)     filter.role = role;
    if (isActive !== undefined) filter.isActive = isActive === 'true';

    const [total, users] = await Promise.all([
      User.countDocuments(filter),
      User.find(filter)
        .select('-password')
        .sort('-createdAt')
        .limit(Number(limit))
        .skip((Number(page) - 1) * Number(limit))
    ]);

    res.json({ data: users, pagination: { total, page: Number(page), pages: Math.ceil(total / Number(limit)) } });
  } catch (error) {
    res.status(500).json({ error: 'Erreur' });
  }
});

// Admin crée un compte Pro
router.post('/users/pro', async (req, res) => {
  try {
    const { email, password, companyName, domain, structureType } = req.body;

    if (await User.findOne({ email })) {
      return res.status(409).json({ error: 'Email déjà utilisé' });
    }

    const user = await new User({
      role: USER_ROLES.PRO,
      email,
      password,
      createdBy: req.user._id,
      proProfile: { companyName, domain, structureType }
    }).save();

    res.status(201).json({ message: 'Compte Pro créé', userId: user._id });
  } catch (error) {
    res.status(500).json({ error: 'Erreur création compte Pro' });
  }
});

// Toggle actif/inactif
router.patch('/users/:id/toggle', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      [{ $set: { isActive: { $not: '$isActive' } } }],
      { new: true }
    ).select('-password');

    if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé' });

    res.json({ message: user.isActive ? 'Compte activé' : 'Compte désactivé', isActive: user.isActive });
  } catch (error) {
    res.status(500).json({ error: 'Erreur' });
  }
});

module.exports = router;
