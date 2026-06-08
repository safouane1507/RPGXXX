const mongoose = require('mongoose');
const { DOMAIN_IDS, STRUCTURE_TYPES, MOROCCAN_REGIONS } = require('../config/constants');

// Helper: champ multilingue
const ml = () => ({
  ar: { type: String, default: '' },
  fr: { type: String, default: '' },
  en: { type: String, default: '' },
  darija: { type: String, default: '' }
});

const annuaireSchema = new mongoose.Schema({

  // ── Lien compte Pro ───────────────────────────────────────
  proActor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
    index: true
  },

  // ── Identité ──────────────────────────────────────────────
  structureName:    { type: String, required: true, trim: true },
  slogan:           ml(),
  structureType:    { type: String, enum: STRUCTURE_TYPES, required: true },
  domain:           { type: String, enum: DOMAIN_IDS, required: true, index: true },
  secondaryDomains: [{ type: String, enum: DOMAIN_IDS }],
  registrationNumber: String,
  foundedYear:      { type: Number, min: 1900 },
  employeeCount:    { type: Number, min: 0 },

  // ── Descriptions multilingues ─────────────────────────────
  description:  ml(),   // Résumé pour les cartes
  presentation: ml(),   // Page complète
  history:      ml(),   // Historique
  methodology:  ml(),   // Méthodes de travail

  // ── Direction ─────────────────────────────────────────────
  director: {
    name:    String,
    title:   ml(),
    photo:   String,
    message: ml()
  },

  // ── Médias ────────────────────────────────────────────────
  logo:        { type: String, default: null },
  coverImage:  { type: String, default: null },
  photos: [{
    url:     String,
    caption: ml()
  }],
  videos: [{
    url:   String,
    title: ml()
  }],

  // ── Contact ───────────────────────────────────────────────
  contact: {
    phone:      { type: String, trim: true },
    fixPhone:   String,
    altPhone:   String,
    email:      { type: String, trim: true, lowercase: true },
    website:    String,
    address:    String,
    city:       String,
    province:   String,
    region:     { type: String, enum: [...MOROCCAN_REGIONS, ''] },
    postalCode: String,
    country:    { type: String, default: 'Maroc' },
    coordinates: {
      lat: { type: Number, default: null },
      lng: { type: Number, default: null }
    }
  },

  // ── Réseaux sociaux ───────────────────────────────────────
  socialMedia: {
    facebook:  String,
    instagram: String,
    youtube:   String,
    twitter:   String,
    linkedin:  String,
    tiktok:    String
  },

  // ── Produits référencés ───────────────────────────────────
  productsRef: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],

  // ── Certifications / Labels ───────────────────────────────
  certifications: [String],
  labels: [{
    name:   String,
    year:   Number,
    issuer: String
  }],

  // ── Revue de presse ───────────────────────────────────────
  pressArticles: [{
    title:  ml(),
    source: String,
    date:   Date,
    url:    String
  }],

  // ── FAQ spécifique ────────────────────────────────────────
  faq: [{
    question: ml(),
    answer:   ml(),
    order:    Number
  }],

  // ── Statut ────────────────────────────────────────────────
  isActive:    { type: Boolean, default: false, index: true }, // L'admin active
  isFeatured:  { type: Boolean, default: false },
  isVerified:  { type: Boolean, default: false },
  verifiedAt:  Date,

  // ── SEO ───────────────────────────────────────────────────
  slug:            { type: String, unique: true, sparse: true },
  metaTitle:       ml(),
  metaDescription: ml(),

  // ── Stats & Notes admin ───────────────────────────────────
  viewCount:   { type: Number, default: 0 },
  adminNotes:  String,
  publishedAt: Date

}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

// ── Index ─────────────────────────────────────────────────
annuaireSchema.index({
  structureName:    'text',
  'description.fr': 'text',
  'description.ar': 'text',
  'contact.city':   'text'
});
annuaireSchema.index({ domain: 1, isActive: 1 });
annuaireSchema.index({ 'contact.region': 1 });
annuaireSchema.index({ isFeatured: -1, createdAt: -1 });

module.exports = mongoose.model('Annuaire', annuaireSchema);
