const express = require('express');
const Review  = require('../models/Review.model');
const Product = require('../models/Product.model');
const Tourism = require('../models/Tourism.model');
const Annuaire = require('../models/Annuaire.model');
const { authenticate } = require('../middleware/auth.middleware');
const { isAdmin } = require('../middleware/role.middleware');

const router = express.Router();

// ── Helpers ──────────────────────────────────────────────
async function updateTargetRating(targetType, targetId) {
  const result = await Review.aggregate([
    { $match: { targetId: require('mongoose').Types.ObjectId.createFromHexString(String(targetId)), isPublished: true } },
    { $group: { _id: null, avg: { $avg: '$rating' }, count: { $sum: 1 } } }
  ]);
  const avg   = result[0]?.avg   ?? 0;
  const count = result[0]?.count ?? 0;

  const Model = targetType === 'product' ? Product
              : targetType === 'tourism' ? Tourism
              : Annuaire;
  await Model.findByIdAndUpdate(targetId, { rating: Math.round(avg * 10) / 10, reviewCount: count });
}

// ── GET /reviews/:targetType/:targetId — liste des avis ──
router.get('/:targetType/:targetId', async (req, res) => {
  try {
    const { targetType, targetId } = req.params;
    const { page = 1, limit = 10 } = req.query;

    if (!['product', 'tourism', 'annuaire'].includes(targetType)) {
      return res.status(400).json({ error: 'Type de cible invalide' });
    }

    const [total, reviews] = await Promise.all([
      Review.countDocuments({ targetType, targetId, isPublished: true }),
      Review.find({ targetType, targetId, isPublished: true })
        .populate('author', 'firstName lastName avatar')
        .sort('-createdAt')
        .limit(Number(limit))
        .skip((Number(page) - 1) * Number(limit))
    ]);

    // Moyenne
    const stats = await Review.aggregate([
      { $match: { targetId: require('mongoose').Types.ObjectId.createFromHexString(targetId), isPublished: true } },
      { $group: {
          _id: null,
          avg: { $avg: '$rating' },
          dist: {
            $push: '$rating'
          }
      }}
    ]);

    const avgRating = stats[0]?.avg ? Math.round(stats[0].avg * 10) / 10 : 0;

    res.json({
      data: reviews,
      pagination: { total, page: Number(page), pages: Math.ceil(total / Number(limit)) },
      stats: { avg: avgRating, total }
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// ── POST /reviews — créer un avis (authentifié) ──────────
router.post('/', authenticate, async (req, res) => {
  try {
    const { targetType, targetId, rating, title, comment } = req.body;

    if (!['product', 'tourism', 'annuaire'].includes(targetType)) {
      return res.status(400).json({ error: 'Type de cible invalide' });
    }
    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Note entre 1 et 5 requise' });
    }

    const existing = await Review.findOne({ author: req.user._id, targetId });
    if (existing) {
      return res.status(409).json({ error: 'Vous avez déjà laissé un avis pour cet élément' });
    }

    const review = await new Review({
      author: req.user._id,
      targetType,
      targetId,
      rating,
      title:   title   || '',
      comment: comment || ''
    }).save();

    await updateTargetRating(targetType, targetId);

    const populated = await Review.findById(review._id)
      .populate('author', 'firstName lastName avatar');

    res.status(201).json({ message: 'Avis publié', data: populated });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ error: 'Vous avez déjà laissé un avis pour cet élément' });
    }
    res.status(500).json({ error: 'Erreur lors de la publication' });
  }
});

// ── PUT /reviews/:id — modifier son propre avis ──────────
router.put('/:id', authenticate, async (req, res) => {
  try {
    const review = await Review.findOne({ _id: req.params.id, author: req.user._id });
    if (!review) return res.status(404).json({ error: 'Avis non trouvé ou non autorisé' });

    const { rating, title, comment } = req.body;
    if (rating) review.rating = rating;
    if (title   !== undefined) review.title   = title;
    if (comment !== undefined) review.comment = comment;
    await review.save();

    await updateTargetRating(review.targetType, review.targetId);
    res.json({ message: 'Avis mis à jour', data: review });
  } catch (error) {
    res.status(500).json({ error: 'Erreur mise à jour' });
  }
});

// ── DELETE /reviews/:id — supprimer (auteur ou admin) ────
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const query = req.user.role === 'admin'
      ? { _id: req.params.id }
      : { _id: req.params.id, author: req.user._id };

    const review = await Review.findOneAndDelete(query);
    if (!review) return res.status(404).json({ error: 'Avis non trouvé ou non autorisé' });

    await updateTargetRating(review.targetType, review.targetId);
    res.json({ message: 'Avis supprimé' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur suppression' });
  }
});

// ── Admin : masquer / afficher un avis ────────────────────
router.patch('/:id/toggle', authenticate, isAdmin, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ error: 'Avis non trouvé' });
    review.isPublished = !review.isPublished;
    await review.save();
    await updateTargetRating(review.targetType, review.targetId);
    res.json({ isPublished: review.isPublished });
  } catch (error) {
    res.status(500).json({ error: 'Erreur' });
  }
});

module.exports = router;
