const Content = require('../models/Content.model');

// GET /api/content/:key — bloc de contenu public (about, services, faq, footer, home)
const getByKey = async (req, res) => {
  try {
    const content = await Content.findOne({ key: req.params.key });
    if (!content) return res.status(404).json({ error: 'Contenu non trouvé' });
    res.json({ data: content.data });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// PUT /api/content/:key — admin: créer ou mettre à jour un bloc de contenu
const upsert = async (req, res) => {
  try {
    const content = await Content.findOneAndUpdate(
      { key: req.params.key },
      { key: req.params.key, data: req.body.data },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.json({ message: 'Contenu mis à jour', data: content.data });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour' });
  }
};

module.exports = { getByKey, upsert };
