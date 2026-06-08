const mongoose = require('mongoose');
const { DOMAIN_IDS } = require('../config/constants');

const ml = () => ({
  ar: { type: String, default: '' },
  fr: { type: String, default: '' },
  en: { type: String, default: '' },
  darija: { type: String, default: '' }
});

const productSchema = new mongoose.Schema({

  // ── Contenu multilingue ───────────────────────────────────
  name:             ml(),
  description:      ml(),
  shortDescription: ml(),
  unit:             ml(),   // kg / pièce / mètre / lot

  // ── Prix ──────────────────────────────────────────────────
  price:         { type: Number, required: true, min: 0 },
  priceDiscount: { type: Number, default: null },
  currency:      { type: String, default: 'MAD' },

  // ── Classification ────────────────────────────────────────
  domain:      { type: String, enum: DOMAIN_IDS, required: true, index: true },
  subcategory: ml(),
  tags:        [String],

  // ── Médias ────────────────────────────────────────────────
  coverImage: { type: String, default: null },
  images: [{
    url: String,
    alt: ml()
  }],

  // ── Propriétaire ──────────────────────────────────────────
  proActor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },

  // ── Stock ─────────────────────────────────────────────────
  stock:           { type: Number, default: 0 },
  isInfiniteStock: { type: Boolean, default: false },
  sku:             { type: String, unique: true, sparse: true },

  // ── Statut / Drapeaux ─────────────────────────────────────
  status: {
    type: String,
    enum: ['draft', 'en_cours_publication', 'published', 'archived', 'rejected'],
    default: 'draft',
    index: true
  },
  isActive:    { type: Boolean, default: true },
  isFeatured:  { type: Boolean, default: false },
  isOrganic:   { type: Boolean, default: false },
  isHandmade:  { type: Boolean, default: true },

  // ── Origine ───────────────────────────────────────────────
  origin: {
    region:  String,
    city:    String,
    country: { type: String, default: 'Maroc' }
  },

  certifications: [String],

  // ── SEO ───────────────────────────────────────────────────
  slug:            { type: String, unique: true, sparse: true },
  metaTitle:       ml(),
  metaDescription: ml(),

  // ── Stats ─────────────────────────────────────────────────
  viewCount:   { type: Number, default: 0 },
  salesCount:  { type: Number, default: 0 },
  rating:      { type: Number, default: 0, min: 0, max: 5 },
  reviewCount: { type: Number, default: 0 },

  rejectionReason: String,
  publishedAt:     Date

}, { timestamps: true });

productSchema.index({ 'name.fr': 'text', 'name.ar': 'text', 'description.fr': 'text' });
productSchema.index({ price: 1 });
productSchema.index({ isFeatured: -1, createdAt: -1 });
productSchema.index({ domain: 1, status: 1 });

module.exports = mongoose.model('Product', productSchema);
