const mongoose = require('mongoose');
const { DOMAIN_IDS, MOROCCAN_REGIONS } = require('../config/constants');

const ml = () => ({
  ar: { type: String, default: '' },
  fr: { type: String, default: '' },
  en: { type: String, default: '' },
  darija: { type: String, default: '' }
});

const eventSchema = new mongoose.Schema({

  title:           ml(),
  description:     ml(),
  fullDescription: ml(),

  eventType: {
    type: String,
    enum: ['festival', 'foire', 'exposition', 'atelier', 'conference', 'marche', 'spectacle', 'autre'],
    required: true
  },
  domain: { type: String, enum: [...DOMAIN_IDS, 'all'] },

  // ── Lieu & Dates ──────────────────────────────────────────
  startDate: { type: Date, required: true, index: true },
  endDate:   { type: Date, required: true },
  venue: {
    name:    ml(),
    address: String,
    city:    String,
    region:  { type: String, enum: [...MOROCCAN_REGIONS, ''] },
    coordinates: { lat: Number, lng: Number }
  },

  coverImage: String,
  photos:     [String],

  // ── Inscriptions & Réservations ───────────────────────────
  isRegistrationRequired: { type: Boolean, default: false },
  maxParticipants:        Number,
  registrationDeadline:   Date,

  reservations: [{
    user:          { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    clientName:    String,
    clientEmail:   String,
    clientPhone:   String,
    numberOfSeats: { type: Number, default: 1 },
    status:        { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    bookedAt:      { type: Date, default: Date.now }
  }],

  isActive:   { type: Boolean, default: true },
  isFeatured: { type: Boolean, default: false },
  organizer:  { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  slug:       { type: String, unique: true, sparse: true }

}, { timestamps: true });

eventSchema.index({ startDate: 1, endDate: 1 });
eventSchema.index({ 'venue.region': 1 });

module.exports = mongoose.model('Event', eventSchema);
