/**
 * Seed Content — importe les données statiques générées dans src/data/
 * (produits, tourisme, blog, pages de contenu) dans MongoDB.
 *
 * Usage : npm run seed:content        (depuis le dossier backend/)
 *         npm run seed:content -- --force   → écrase les documents existants
 */
require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });

if (!process.env.JWT_SECRET)  { console.error('❌ JWT_SECRET manquant dans .env'); process.exit(1); }
if (!process.env.MONGODB_URI) { console.error('❌ MONGODB_URI manquant dans .env'); process.exit(1); }

const fs       = require('fs');
const path     = require('path');
const mongoose = require('mongoose');

const User    = require('../models/User.model');
const Product = require('../models/Product.model');
const Tourism = require('../models/Tourism.model');
const Blog    = require('../models/Blog.model');
const Content = require('../models/Content.model');

const { DOMAIN_IDS, USER_ROLES } = require('../config/constants');

const FORCE = process.argv.includes('--force');

// ─────────────────────────────────────────────────────────────
// Connexion MongoDB
// ─────────────────────────────────────────────────────────────
async function connect() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('✅ MongoDB connecté :', process.env.MONGODB_URI);
}

// ─────────────────────────────────────────────────────────────
// Admin (pour résoudre authorPlaceholder: "admin")
// ─────────────────────────────────────────────────────────────
async function ensureAdmin() {
  const email = process.env.ADMIN_EMAIL    || 'admin@kenzbladi.ma';
  const pwd   = process.env.ADMIN_PASSWORD || 'Admin@123456';

  let admin = await User.findOne({ email });
  if (admin) return admin;

  admin = await new User({
    role: USER_ROLES.ADMIN,
    email,
    password: pwd,
    firstName: 'Super',
    lastName: 'Admin',
    isActive: true,
    isEmailVerified: true,
    adminProfile: { permissions: ['*'], department: 'Direction' }
  }).save();

  console.log(`🔐 Admin créé : ${email} / ${pwd}`);
  return admin;
}

// ─────────────────────────────────────────────────────────────
// Acteurs Pro — un par domaine (9 TAXONOMY_DOMAINS)
// Réutilise les emails déjà créés par seed.js si présents,
// et crée les acteurs manquants pour les domaines restants.
// ─────────────────────────────────────────────────────────────
const PRO_ACTORS_BY_DOMAIN = {
  artisanat_service: {
    email: 'maroquinerie.fes@kenzbladi.ma',
    firstName: 'Atelier', lastName: 'Maroquinerie Fès',
    structureType: 'artisan_independant',
    companyName: 'Atelier Maroquinerie & Henné de Fès'
  },
  produits_mer: {
    email: 'peche.essaouira@kenzbladi.ma',
    firstName: 'Coopérative', lastName: 'Pêche Essaouira',
    structureType: 'cooperative',
    companyName: 'Coopérative des Pêcheurs d\'Essaouira'
  },
  habillement_mode: {
    email: 'couture.marrakech@kenzbladi.ma',
    firstName: 'Maison', lastName: 'Couture Marrakchia',
    structureType: 'entreprise_individuelle',
    companyName: 'Maison de Couture Marrakchia'
  },
  tourisme_rural: {
    email: 'bivouac.merzouga@kenzbladi.ma',
    firstName: 'Camp', lastName: 'Bivouac Merzouga',
    structureType: 'groupement_interet_economique',
    companyName: 'Camp Bivouac Erg Chebbi'
  },
  artisanat_art: {
    email: 'tissage.fes@kenzbladi.ma',
    firstName: 'Atelier', lastName: 'Tissage Fès',
    structureType: 'artisan_independant',
    companyName: 'Maison du Tissage Fassi'
  },
  agriculture_bio: {
    email: 'olivier.bio@kenzbladi.ma',
    firstName: 'Ferme', lastName: 'Olivier Bio',
    structureType: 'sarl',
    companyName: 'Huilerie Bio de Meknès'
  },
  soin_beaute: {
    email: 'cooperative.argane@kenzbladi.ma',
    firstName: 'Coopérative', lastName: 'Argane Souss',
    structureType: 'cooperative',
    companyName: "Coopérative Argane de l'Atlas"
  },
  produit_terroir: {
    email: 'safran.taliouine@kenzbladi.ma',
    firstName: 'Coopérative', lastName: 'Safran Taliouine',
    structureType: 'cooperative',
    companyName: 'Safran de Taliouine Premium'
  },
  artisanat_culinaire: {
    email: 'poterie.safi@kenzbladi.ma',
    firstName: 'Atelier', lastName: 'Poterie Culinaire Safi',
    structureType: 'association',
    companyName: 'Atelier Tagines & Art de la Table de Safi'
  }
};

async function ensureProActors(adminId) {
  const map = {};
  let created = 0;

  for (const domain of DOMAIN_IDS) {
    const def = PRO_ACTORS_BY_DOMAIN[domain];
    if (!def) {
      console.warn(`⚠️  Aucune définition d'acteur Pro pour le domaine "${domain}"`);
      continue;
    }

    let actor = await User.findOne({ email: def.email });
    if (!actor) {
      actor = await new User({
        role: USER_ROLES.PRO,
        email: def.email,
        password: 'Demo@123456',
        firstName: def.firstName,
        lastName: def.lastName,
        isActive: true,
        isEmailVerified: true,
        createdBy: adminId,
        proProfile: {
          companyName: def.companyName,
          structureType: def.structureType,
          domain,
          subscriptionPlan: 'gratuit',
          isVerified: true,
          verifiedAt: new Date(),
          verifiedBy: adminId
        }
      }).save();
      created++;
    }

    map[domain] = actor;
  }

  if (created > 0) console.log(`🏭 ${created} acteur(s) Pro créé(s) pour compléter les 9 domaines (mot de passe : Demo@123456)`);
  else             console.log('ℹ️  Tous les acteurs Pro (9 domaines) sont déjà présents');

  return map;
}

// ─────────────────────────────────────────────────────────────
// Produits — backend/src/data/products/*.json
// ─────────────────────────────────────────────────────────────
async function seedProducts(proActorMap) {
  const dir = path.join(__dirname, '../data/products');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));

  let created = 0, updated = 0, skipped = 0;

  for (const file of files) {
    const items = require(path.join(dir, file));

    for (const item of items) {
      const { proActorDomain, ...data } = item;
      const proActor = proActorMap[proActorDomain] || proActorMap[data.domain];

      if (!proActor) {
        console.warn(`⚠️  Aucun acteur Pro pour le domaine "${proActorDomain}", produit ignoré : ${data.slug}`);
        skipped++;
        continue;
      }

      data.proActor = proActor._id;
      if (data.status === 'published' && !data.publishedAt) {
        data.publishedAt = new Date();
      }

      const result = await Product.findOneAndUpdate(
        { slug: data.slug },
        { $set: data },
        { upsert: true, new: true, setDefaultsOnInsert: true, runValidators: true, rawResult: true }
      );

      if (result.lastErrorObject && result.lastErrorObject.upserted) created++;
      else updated++;
    }
  }

  console.log(`🛍️  Produits : ${created} créé(s), ${updated} mis à jour, ${skipped} ignoré(s)`);
}

// ─────────────────────────────────────────────────────────────
// Tourisme — backend/src/data/tourism.json
// ─────────────────────────────────────────────────────────────
async function seedTourism(adminId) {
  const items = require('../data/tourism.json');
  let created = 0, updated = 0;

  for (const item of items) {
    const data = { ...item, createdBy: adminId };

    const result = await Tourism.findOneAndUpdate(
      { slug: data.slug },
      { $set: data },
      { upsert: true, new: true, setDefaultsOnInsert: true, runValidators: true, rawResult: true }
    );

    if (result.lastErrorObject && result.lastErrorObject.upserted) created++;
    else updated++;
  }

  console.log(`🗺️  Lieux touristiques : ${created} créé(s), ${updated} mis à jour`);
}

// ─────────────────────────────────────────────────────────────
// Blog — backend/src/data/blog.json
// ─────────────────────────────────────────────────────────────
async function seedBlog(adminId) {
  const items = require('../data/blog.json');
  let created = 0, updated = 0;

  for (const item of items) {
    const { authorPlaceholder, ...data } = item;
    data.author = authorPlaceholder === 'admin' ? adminId : adminId;
    if (data.status === 'published' && !data.publishedAt) {
      data.publishedAt = new Date();
    }

    const result = await Blog.findOneAndUpdate(
      { slug: data.slug },
      { $set: data },
      { upsert: true, new: true, setDefaultsOnInsert: true, runValidators: true, rawResult: true }
    );

    if (result.lastErrorObject && result.lastErrorObject.upserted) created++;
    else updated++;
  }

  console.log(`📰 Articles de blog : ${created} créé(s), ${updated} mis à jour`);
}

// ─────────────────────────────────────────────────────────────
// Contenu statique — backend/src/data/content/*.json
// (about, services, faq, footer, home → Content { key, data })
// ─────────────────────────────────────────────────────────────
async function seedContentPages() {
  const dir = path.join(__dirname, '../data/content');
  const validKeys = ['about', 'services', 'faq', 'footer', 'home'];

  let created = 0, updated = 0;

  for (const key of validKeys) {
    const file = path.join(dir, `${key}.json`);
    if (!fs.existsSync(file)) {
      console.warn(`⚠️  Fichier de contenu manquant : ${file}`);
      continue;
    }

    const data = require(file);

    const result = await Content.findOneAndUpdate(
      { key },
      { $set: { key, data } },
      { upsert: true, new: true, setDefaultsOnInsert: true, runValidators: true, rawResult: true }
    );

    if (result.lastErrorObject && result.lastErrorObject.upserted) created++;
    else updated++;
  }

  console.log(`📄 Pages de contenu : ${created} créée(s), ${updated} mise(s) à jour`);
}

// ─────────────────────────────────────────────────────────────
// Runner principal
// ─────────────────────────────────────────────────────────────
(async () => {
  try {
    await connect();

    if (FORCE) {
      console.log('🔄 --force : suppression des données existantes (produits, tourisme, blog, contenu)…');
      await Promise.all([
        Product.deleteMany({}),
        Tourism.deleteMany({}),
        Blog.deleteMany({}),
        Content.deleteMany({})
      ]);
    }

    const admin = await ensureAdmin();
    const proActorMap = await ensureProActors(admin._id);

    await seedProducts(proActorMap);
    await seedTourism(admin._id);
    await seedBlog(admin._id);
    await seedContentPages();

    console.log('\n🌟 Import du contenu terminé avec succès !');
  } catch (err) {
    console.error('❌ Erreur seedContent :', err);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
})();
