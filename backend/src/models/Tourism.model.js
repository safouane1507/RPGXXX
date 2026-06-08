const mongoose = require('mongoose');
const { MOROCCAN_REGIONS } = require('../config/constants');

const ml = () => ({
  ar: { type: String, default: '' },
  fr: { type: String, default: '' },
  en: { type: String, default: '' },
  darija: { type: String, default: '' }
});

const tourismSchema = new mongoose.Schema({

  // ── Contenu multilingue ───────────────────────────────────
  name:             ml(),
  shortDescription: ml(),
  fullArticle:      ml(),   // Article complet avec rich text

  // ── Classification ────────────────────────────────────────
  locationType: {
    type: String,
    enum: ['city', 'rural_region', 'monument', 'nature', 'beach', 'mountain', 'oasis', 'medina', 'souk', 'museum', 'festival'],
    required: true,
    index: true
  },

  // ── Localisation ──────────────────────────────────────────
  location: {
    country:  { type: String, default: 'Maroc' },
    region:   { type: String, enum: [...MOROCCAN_REGIONS, ''] },
    province: String,
    city:     String,
    address:  String,
    // Coordonnées GeoJSON pour requêtes géospatiales
    coordinates: {
      type:        { type: String, default: 'Point' },
      coordinates: { type: [Number], default: [0, 0] }  // [lng, lat]
    }
  },

  // ── Médias ────────────────────────────────────────────────
  coverImage: { type: String, default: null },
  photos: [{
    url:     String,
    caption: ml(),
    credit:  String
  }],
  videos: [{
    url:   String,
    title: ml()
  }],

  // ── Infos pratiques ───────────────────────────────────────
  practicalInfo: {
    bestSeason:    ml(),
    openingHours:  ml(),
    entryFee:      ml(),
    howToGet:      ml(),
    accessibility: ml()
  },

  // ── Activités & Tags ──────────────────────────────────────
  activities: ml(),
  tags:        [String],

  // ── Relations ─────────────────────────────────────────────
  // "Autres endroits à visiter" affiché en bas de l'article
  relatedPlaces:      [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tourism' }],
  nearbyCooperatives: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Annuaire' }],

  // ── Statut ────────────────────────────────────────────────
  isActive:   { type: Boolean, default: true, index: true },
  isFeatured: { type: Boolean, default: false },

  // ── SEO ───────────────────────────────────────────────────
  slug:            { type: String, unique: true, sparse: true },
  metaTitle:       ml(),
  metaDescription: ml(),

  // ── Stats ─────────────────────────────────────────────────
  viewCount: { type: Number, default: 0 },
  rating:    { type: Number, default: 0 },

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

}, { timestamps: true });

// ── Index géospatial (requêtes "à proximité") ─────────────
tourismSchema.index({ 'location.coordinates': '2dsphere' });
tourismSchema.index({ 'name.fr': 'text', 'name.ar': 'text', 'shortDescription.fr': 'text' });
tourismSchema.index({ locationType: 1, isActive: 1 });
tourismSchema.index({ 'location.region': 1 });

module.exports = mongoose.model('Tourism', tourismSchema);
