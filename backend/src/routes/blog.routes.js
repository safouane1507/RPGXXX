const express = require('express');
const Blog = require('../models/Blog.model');
const { authenticate } = require('../middleware/auth.middleware');
const { isAdmin } = require('../middleware/role.middleware');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 9, category } = req.query;
    const filter = { status: 'published' };
    if (category) filter.category = category;

    const [total, posts] = await Promise.all([
      Blog.countDocuments(filter),
      Blog.find(filter)
        .populate('author', 'firstName lastName avatar')
        .select('title excerpt coverImage category tags slug isFeatured publishedAt viewCount')
        .sort('-isFeatured -publishedAt')
        .limit(Number(limit))
        .skip((Number(page) - 1) * Number(limit))
    ]);

    res.json({ data: posts, pagination: { total, page: Number(page), pages: Math.ceil(total / Number(limit)) } });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const post = await Blog.findOne({ slug: req.params.slug, status: 'published' })
      .populate('author', 'firstName lastName avatar')
      .populate('relatedPosts', 'title excerpt coverImage slug publishedAt');

    if (!post) return res.status(404).json({ error: 'Article non trouvé' });

    await Blog.findByIdAndUpdate(post._id, { $inc: { viewCount: 1 } });
    res.json({ data: post });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

router.post('/', authenticate, isAdmin, async (req, res) => {
  try {
    const slugify = require('slugify');
    const slug = slugify(req.body.title?.fr || '', { lower: true, strict: true }) + '-' + Date.now();
    const post = await new Blog({
      ...req.body,
      slug,
      author: req.user._id,
      publishedAt: req.body.status === 'published' ? new Date() : null
    }).save();
    res.status(201).json({ data: post });
  } catch (error) {
    res.status(500).json({ error: 'Erreur création article' });
  }
});

router.put('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const post = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) return res.status(404).json({ error: 'Article non trouvé' });
    res.json({ data: post });
  } catch (error) {
    res.status(500).json({ error: 'Erreur mise à jour' });
  }
});

module.exports = router;
