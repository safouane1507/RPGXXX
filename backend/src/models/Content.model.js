const mongoose = require('mongoose');

// Stocke le contenu statique multilingue des pages publiques
// (À Propos, Services, FAQ, Footer, Home) sous forme de blocs JSON identifiés par "key".
const contentSchema = new mongoose.Schema({

  key: {
    type: String,
    required: true,
    unique: true,
    index: true,
    enum: ['about', 'services', 'faq', 'footer', 'home']
  },

  data: { type: mongoose.Schema.Types.Mixed, required: true }

}, { timestamps: true });

module.exports = mongoose.model('Content', contentSchema);
