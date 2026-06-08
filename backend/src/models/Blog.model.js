const mongoose = require('mongoose');
const { DOMAIN_IDS } = require('../config/constants');

const ml = () => ({
  ar: { type: String, default: '' },
  fr: { type: String, default: '' },
  en: { type: String, default: '' },
  darija: { type: String, default: '' }
});

const blogSchema = new mongoose.Schema({

  title:   ml(),
  excerpt: ml(),
  content: ml(),

  category: {
    type: String,
    enum: [...DOMAIN_IDS, 'actualites', 'conseils', 'patrimoine', 'reportage', 'interview'],
    index: true
  },
  tags: [String],

  coverImage: String,
  gallery:    [String],

  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft',
    index: true
  },
  publishedAt: Date,

  slug:            { type: String, unique: true, sparse: true },
  metaTitle:       ml(),
  metaDescription: ml(),

  viewCount:   { type: Number, default: 0 },
  likeCount:   { type: Number, default: 0 },
  isFeatured:  { type: Boolean, default: false },

  relatedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }]

}, { timestamps: true });

blogSchema.index({
  'title.fr': 'text', 'title.ar': 'text',
  'content.fr': 'text', 'content.ar': 'text'
});

module.exports = mongoose.model('Blog', blogSchema);
