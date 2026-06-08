const slugify = require('slugify');
const Annuaire = require('../models/Annuaire.model');
const { DOMAIN_IDS } = require('../config/constants');

// GET /api/annuaire — liste publique avec filtres
const getAll = async (req, res) => {
  try {
    const {
      page = 1, limit = 12,
      domain, region, city, structureType,
      search, isVerified,
      sort = '-isFeatured -createdAt'
    } = req.query;

    const filter = { isActive: true };
    if (domain && DOMAIN_IDS.includes(domain)) filter.domain = domain;
    if (region)        filter['contact.region'] = region;
    if (city)          filter['contact.city'] = { $regex: city, $options: 'i' };
    if (structureType) filter.structureType = structureType;
    if (isVerified === 'true') filter.isVerified = true;
    if (search)        filter.$text = { $search: search };

    const [total, annuaires] = await Promise.all([
      Annuaire.countDocuments(filter),
      Annuaire.find(filter)
        .select('structureName domain structureType description logo coverImage contact isVerified isFeatured slug createdAt')
        .sort(sort)
        .limit(Number(limit))
        .skip((Number(page) - 1) * Number(limit))
    ]);

    res.json({
      data: annuaires,
      pagination: {
        total,
        page:  Number(page),
        pages: Math.ceil(total / Number(limit)),
        limit: Number(limit)
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors du chargement de l'annuaire" });
  }
};

// GET /api/annuaire/:slug — fiche détaillée
const getBySlug = async (req, res) => {
  try {
    const annuaire = await Annuaire.findOne({ slug: req.params.slug, isActive: true })
      .populate('proActor', 'email proProfile.subscriptionPlan')
      .populate('productsRef', 'name coverImage price status slug');

    if (!annuaire) return res.status(404).json({ error: 'Fiche annuaire non trouvée' });

    await Annuaire.findByIdAndUpdate(annuaire._id, { $inc: { viewCount: 1 } });

    res.json({ data: annuaire });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors du chargement' });
  }
};

// GET /api/annuaire/domain/:domain — par domaine (pour filtres homepage)
const getByDomain = async (req, res) => {
  try {
    const { domain } = req.params;
    if (!DOMAIN_IDS.includes(domain)) {
      return res.status(400).json({ error: 'Domaine invalide' });
    }

    const annuaires = await Annuaire.find({ domain, isActive: true })
      .select('structureName description logo contact.city contact.phone isVerified slug domain')
      .sort('-isFeatured -createdAt')
      .limit(20);

    res.json({ data: annuaires, domain });
  } catch (error) {
    res.status(500).json({ error: 'Erreur chargement' });
  }
};

// POST /api/annuaire — création (acteur Pro)
const create = async (req, res) => {
  try {
    if (await Annuaire.findOne({ proActor: req.user._id })) {
      return res.status(409).json({ error: 'Une fiche annuaire existe déjà pour ce compte' });
    }

    const slug = slugify(req.body.structureName || '', { lower: true, strict: true }) + '-' + Date.now();

    const annuaire = await new Annuaire({
      ...req.body,
      proActor: req.user._id,
      isActive: false,
      slug
    }).save();

    res.status(201).json({
      message: 'Fiche créée — en attente de validation administrateur.',
      data: annuaire
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création' });
  }
};

// PUT /api/annuaire/:id — mise à jour
const update = async (req, res) => {
  try {
    const query = { _id: req.params.id };
    if (req.user.role !== 'admin') query.proActor = req.user._id;

    const annuaire = await Annuaire.findOne(query);
    if (!annuaire) return res.status(404).json({ error: 'Fiche non trouvée' });

    Object.assign(annuaire, req.body);
    await annuaire.save();

    res.json({ message: 'Fiche mise à jour avec succès', data: annuaire });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour' });
  }
};

// PATCH /api/annuaire/:id/toggle-active — admin uniquement
const toggleActive = async (req, res) => {
  try {
    const annuaire = await Annuaire.findByIdAndUpdate(
      req.params.id,
      [{ $set: { isActive: { $not: '$isActive' } } }],
      { new: true }
    );
    if (!annuaire) return res.status(404).json({ error: 'Fiche non trouvée' });

    res.json({
      message: annuaire.isActive ? 'Fiche activée' : 'Fiche désactivée',
      isActive: annuaire.isActive
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur' });
  }
};

// GET /api/annuaire/stats — stats pour le dashboard admin
const getStats = async (req, res) => {
  try {
    const stats = await Annuaire.aggregate([
      {
        $group: {
          _id: '$domain',
          total:    { $sum: 1 },
          active:   { $sum: { $cond: ['$isActive', 1, 0] } },
          verified: { $sum: { $cond: ['$isVerified', 1, 0] } }
        }
      },
      { $sort: { total: -1 } }
    ]);

    const globalTotal  = await Annuaire.countDocuments();
    const globalActive = await Annuaire.countDocuments({ isActive: true });

    res.json({
      data: stats,
      summary: { total: globalTotal, active: globalActive, pending: globalTotal - globalActive }
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur stats' });
  }
};

module.exports = { getAll, getBySlug, getByDomain, create, update, toggleActive, getStats };
