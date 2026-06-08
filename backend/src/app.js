require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const path = require('path');

const connectDB = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// ── Security ──────────────────────────────────────────────
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(compression());

// ── CORS ──────────────────────────────────────────────────
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:4200',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS']
}));

// ── Rate Limiting ─────────────────────────────────────────
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: { error: 'Trop de requêtes, veuillez réessayer plus tard.' }
});
app.use('/api/', limiter);

// ── Logging ───────────────────────────────────────────────
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// ── Body Parsing ──────────────────────────────────────────
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// ── Static Uploads ────────────────────────────────────────
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// ── API Routes (Gateway) ──────────────────────────────────
app.use('/api/auth',      require('./routes/auth.routes'));
app.use('/api/products',  require('./routes/product.routes'));
app.use('/api/annuaire',  require('./routes/annuaire.routes'));
app.use('/api/tourism',   require('./routes/tourism.routes'));
app.use('/api/events',    require('./routes/event.routes'));
app.use('/api/blog',      require('./routes/blog.routes'));
app.use('/api/admin',     require('./routes/admin.routes'));

// ── Health Check ──────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    platform: 'KENZ BLADI كنز بلادي',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// ── 404 ───────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée', path: req.originalUrl });
});

// ── Global Error Handler ──────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'production'
      ? 'Erreur serveur interne'
      : err.message
  });
});

app.listen(PORT, () => {
  console.log(`\n🌟 KENZ BLADI API démarrée sur le port ${PORT}`);
  console.log(`🔗 Env: ${process.env.NODE_ENV} | http://localhost:${PORT}/api/health\n`);
});

module.exports = app;
