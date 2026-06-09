const express  = require('express');
const Product  = require('../models/Product.model');
const Annuaire = require('../models/Annuaire.model');
const Tourism  = require('../models/Tourism.model');
const Blog     = require('../models/Blog.model');

const router = express.Router();

/**
 * GET /api/search?q=safran&limit=5
 * Recherche globale sur 4 collections avec index texte MongoDB.
 */
router.get('/', async (req, res) => {
  try {
    const { q, limit = 5 } = req.query;

    if (!q || String(q).trim().length < 2) {
      return res.json({ data: { products: [], annuaire: [], tourism: [], blogs: [] } });
    }

    const L = Number(limit);
    const textFilter = { $text: { $search: String(q) } };
    const textScore  = { score: { $meta: 'textScore' } };

    const [products, annuaire, tourism, blogs] = await Promise.all([
      Product.find({ ...textFilter, status: 'published', isActive: true }, textScore)
        .select('name domain price coverImage slug')
        .sort({ score: { $meta: 'textScore' } })
        .limit(L),

      Annuaire.find({ ...textFilter, isActive: true }, textScore)
        .select('structureName domain description logo contact.city contact.region slug')
        .sort({ score: { $meta: 'textScore' } })
        .limit(L),

      Tourism.find({ ...textFilter, isActive: true }, textScore)
        .select('name locationType location coverImage slug')
        .sort({ score: { $meta: 'textScore' } })
        .limit(L),

      Blog.find({ ...textFilter, status: 'published' }, textScore)
        .select('title excerpt coverImage category slug publishedAt')
        .sort({ score: { $meta: 'textScore' } })
        .limit(L)
    ]);

    const total = products.length + annuaire.length + tourism.length + blogs.length;

    res.json({ data: { products, annuaire, tourism, blogs }, total });
  } catch (error) {
    // Si l'index texte n'est pas encore créé, on renvoie un tableau vide (pas d'erreur)
    if (error.code === 27) {
      return res.json({ data: { products: [], annuaire: [], tourism: [], blogs: [] }, total: 0 });
    }
    res.status(500).json({ error: 'Erreur recherche' });
  }
});

module.exports = router;
