const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({

  // Auteur
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  'User',
    required: true
  },

  // Cible : produit, lieu touristique, ou fiche annuaire
  targetType: {
    type: String,
    enum: ['product', 'tourism', 'annuaire'],
    required: true,
    index: true
  },
  targetId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true
  },

  // Contenu
  rating:  { type: Number, required: true, min: 1, max: 5 },
  title:   { type: String, maxlength: 120, default: '' },
  comment: { type: String, maxlength: 2000, default: '' },

  // Modération
  isPublished: { type: Boolean, default: true },
  isVerified:  { type: Boolean, default: false }, // achat vérifié
  adminNote:   { type: String, default: '' }

}, { timestamps: true });

// Un utilisateur = un seul avis par cible
reviewSchema.index({ author: 1, targetId: 1 }, { unique: true });
// Recherche textuelle sur le commentaire
reviewSchema.index({ comment: 'text', title: 'text' });

module.exports = mongoose.model('Review', reviewSchema);
