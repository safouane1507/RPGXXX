const express = require('express');
const Event = require('../models/Event.model');
const { authenticate } = require('../middleware/auth.middleware');
const { isAdmin } = require('../middleware/role.middleware');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 9, upcoming } = req.query;
    const filter = { isActive: true };
    if (upcoming === 'true') filter.startDate = { $gte: new Date() };

    const [total, events] = await Promise.all([
      Event.countDocuments(filter),
      Event.find(filter)
        .select('title description coverImage eventType domain startDate endDate venue slug isFeatured')
        .sort('startDate')
        .limit(Number(limit))
        .skip((Number(page) - 1) * Number(limit))
    ]);

    res.json({ data: events, pagination: { total, page: Number(page), pages: Math.ceil(total / Number(limit)) } });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const event = await Event.findOne({ slug: req.params.slug, isActive: true })
      .populate('organizer', 'proProfile.companyName');
    if (!event) return res.status(404).json({ error: 'Événement non trouvé' });
    res.json({ data: event });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Réservation
router.post('/:id/reserve', authenticate, async (req, res) => {
  try {
    const { numberOfSeats = 1 } = req.body;
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: 'Événement non trouvé' });

    event.reservations.push({
      user: req.user._id,
      clientName: req.body.clientName,
      clientEmail: req.user.email,
      clientPhone: req.body.clientPhone,
      numberOfSeats,
      status: 'pending'
    });

    await event.save();
    res.status(201).json({ message: 'Réservation effectuée', status: 'pending' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur réservation' });
  }
});

router.post('/', authenticate, isAdmin, async (req, res) => {
  try {
    const slugify = require('slugify');
    const slug = slugify(req.body.title?.fr || '', { lower: true, strict: true }) + '-' + Date.now();
    const event = await new Event({ ...req.body, slug, organizer: req.user._id }).save();
    res.status(201).json({ data: event });
  } catch (error) {
    res.status(500).json({ error: 'Erreur création' });
  }
});

router.put('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) return res.status(404).json({ error: 'Événement non trouvé' });
    res.json({ data: event });
  } catch (error) {
    res.status(500).json({ error: 'Erreur mise à jour' });
  }
});

router.patch('/:id/status', authenticate, isAdmin, async (req, res) => {
  try {
    const { status } = req.body;
    const event = await Event.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!event) return res.status(404).json({ error: 'Événement non trouvé' });
    res.json({ data: event });
  } catch (error) {
    res.status(500).json({ error: 'Erreur mise à jour statut' });
  }
});

module.exports = router;
