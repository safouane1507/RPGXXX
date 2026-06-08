const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { USER_ROLES, DOMAIN_IDS, STRUCTURE_TYPES, MOROCCAN_REGIONS } = require('../config/constants');

const userSchema = new mongoose.Schema({

  // ── Commun ────────────────────────────────────────────────
  role: {
    type: String,
    enum: Object.values(USER_ROLES),
    required: true,
    index: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/, 'Email invalide']
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false
  },
  isActive: { type: Boolean, default: true },
  isEmailVerified: { type: Boolean, default: false },
  preferredLanguage: {
    type: String,
    enum: ['fr', 'ar', 'en', 'darija'],
    default: 'fr'
  },
  avatar: { type: String, default: null },
  lastLogin: { type: Date, default: null },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },

  // ── Champs Client ─────────────────────────────────────────
  firstName: { type: String, trim: true },
  lastName: { type: String, trim: true },
  phone: { type: String, trim: true },
  address: {
    street: String,
    city: String,
    region: { type: String, enum: [...MOROCCAN_REGIONS, ''] },
    postalCode: String,
    country: { type: String, default: 'Maroc' }
  },

  // ── Profil Acteur Pro ─────────────────────────────────────
  proProfile: {
    companyName: { type: String, trim: true },
    structureType: { type: String, enum: STRUCTURE_TYPES },
    domain: { type: String, enum: DOMAIN_IDS },
    secondaryDomains: [{ type: String, enum: DOMAIN_IDS }],
    registrationNumber: String,
    vatNumber: String,
    foundedYear: Number,
    employeeCount: Number,
    annuaireRef: { type: mongoose.Schema.Types.ObjectId, ref: 'Annuaire' },
    subscriptionPlan: {
      type: String,
      enum: ['gratuit', 'basic', 'premium', 'enterprise'],
      default: 'gratuit'
    },
    subscriptionExpiry: Date,
    isVerified: { type: Boolean, default: false },
    verifiedAt: Date,
    verifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },

  // ── Profil Admin ──────────────────────────────────────────
  adminProfile: {
    permissions: [String],
    department: String
  },

  // ── Sécurité ──────────────────────────────────────────────
  passwordResetToken: String,
  passwordResetExpires: Date,
  loginAttempts: { type: Number, default: 0 },
  lockUntil: Date

}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// ── Virtuals ──────────────────────────────────────────────
userSchema.virtual('fullName').get(function () {
  return `${this.firstName || ''} ${this.lastName || ''}`.trim();
});

userSchema.virtual('isLocked').get(function () {
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

// ── Hooks ─────────────────────────────────────────────────
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// ── Methods ───────────────────────────────────────────────
userSchema.methods.comparePassword = async function (candidate) {
  return bcrypt.compare(candidate, this.password);
};

userSchema.methods.incLoginAttempts = async function () {
  if (this.lockUntil && this.lockUntil < Date.now()) {
    return this.updateOne({ $unset: { lockUntil: 1 }, $set: { loginAttempts: 1 } });
  }
  const updates = { $inc: { loginAttempts: 1 } };
  // Lock after 5 failed attempts for 2 hours
  if (this.loginAttempts + 1 >= 5 && !this.isLocked) {
    updates.$set = { lockUntil: Date.now() + 2 * 60 * 60 * 1000 };
  }
  return this.updateOne(updates);
};

// ── Indexes ───────────────────────────────────────────────
userSchema.index({ 'proProfile.domain': 1 });
userSchema.index({ 'proProfile.structureType': 1 });
userSchema.index({ createdAt: -1 });

module.exports = mongoose.model('User', userSchema);
