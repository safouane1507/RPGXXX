/**
 * Seed script — crée le compte Admin par défaut + données de démo
 * Usage : npm run seed  (depuis le dossier backend/)
 */
require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });

if (!process.env.JWT_SECRET)   { console.error('❌ JWT_SECRET manquant dans .env'); process.exit(1); }
if (!process.env.MONGODB_URI)  { console.error('❌ MONGODB_URI manquant dans .env'); process.exit(1); }

const fs       = require('fs');
const path     = require('path');
const slugify  = require('slugify');
const mongoose = require('mongoose');
const User     = require('../models/User.model');
const Annuaire = require('../models/Annuaire.model');
const { DOMAIN_IDS, STRUCTURE_TYPES, USER_ROLES } = require('../config/constants');

// npm run seed -- --force  →  supprime et recrée tous les comptes de démo
const FORCE = process.argv.includes('--force');

// ─────────────────────────────────────────────────────────────
// Connexion MongoDB
// ─────────────────────────────────────────────────────────────
async function connect() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('✅ MongoDB connecté :', process.env.MONGODB_URI);
}

// ─────────────────────────────────────────────────────────────
// Seed Admin
// ─────────────────────────────────────────────────────────────
async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL    || 'admin@kenzbladi.ma';
  const pwd   = process.env.ADMIN_PASSWORD || 'Admin@123456';

  const existing = await User.findOne({ email });
  if (existing) {
    if (!FORCE) { console.log(`ℹ️  Admin déjà présent : ${email}`); return existing; }
    await User.deleteOne({ email });
    console.log(`🔄 Admin supprimé pour re-seeder (--force)…`);
  }

  const admin = await new User({
    role:      USER_ROLES.ADMIN,
    email,
    password:  pwd,
    firstName: 'Super',
    lastName:  'Admin',
    isActive:  true,
    isEmailVerified: true,
    adminProfile: { permissions: ['*'], department: 'Direction' }
  }).save();

  console.log(`🔐 Admin créé : ${email} / ${pwd}`);
  return admin;
}

// ─────────────────────────────────────────────────────────────
// Seed Acteurs Pro (données de démo)
// ─────────────────────────────────────────────────────────────
async function seedProUsers(adminId) {
  const demoActors = [
    {
      email: 'cooperative.argane@kenzbladi.ma',
      firstName: 'Coopérative', lastName: 'Argane Souss',
      domain: 'soin_beaute', structureType: 'cooperative',
      companyName: "Coopérative Argane de l'Atlas"
    },
    {
      email: 'tissage.fes@kenzbladi.ma',
      firstName: 'Atelier', lastName: 'Tissage Fès',
      domain: 'artisanat_art', structureType: 'artisan_independant',
      companyName: 'Maison du Tissage Fassi'
    },
    {
      email: 'olivier.bio@kenzbladi.ma',
      firstName: 'Ferme', lastName: 'Olivier Bio',
      domain: 'agriculture_bio', structureType: 'sarl',
      companyName: 'Huilerie Bio de Meknès'
    },
    {
      email: 'safran.taliouine@kenzbladi.ma',
      firstName: 'Coopérative', lastName: 'Safran Taliouine',
      domain: 'produit_terroir', structureType: 'cooperative',
      companyName: 'Safran de Taliouine Premium'
    },
    {
      email: 'ceramique.safi@kenzbladi.ma',
      firstName: 'Atelier', lastName: 'Céramique Safi',
      domain: 'artisanat_art', structureType: 'association',
      companyName: 'Art Céramique de Safi'
    }
  ];

  if (FORCE) await User.deleteMany({ role: USER_ROLES.PRO });
  let created = 0;
  for (const actor of demoActors) {
    if (await User.findOne({ email: actor.email })) continue;

    await new User({
      role:      USER_ROLES.PRO,
      email:     actor.email,
      password:  'Demo@123456',
      firstName: actor.firstName,
      lastName:  actor.lastName,
      isActive:  true,
      isEmailVerified: true,
      createdBy: adminId,
      proProfile: {
        companyName:     actor.companyName,
        structureType:   actor.structureType,
        domain:          actor.domain,
        subscriptionPlan:'gratuit',
        isVerified:      true,
        verifiedAt:      new Date(),
        verifiedBy:      adminId
      }
    }).save();
    created++;
  }

  if (created > 0) console.log(`🏭 ${created} acteur(s) Pro de démo créés (mot de passe : Demo@123456)`);
  else             console.log('ℹ️  Acteurs Pro déjà présents');
}

// ─────────────────────────────────────────────────────────────
// Seed Client de démo
// ─────────────────────────────────────────────────────────────
async function seedClientUser() {
  const email = 'client@kenzbladi.ma';
  const existing = await User.findOne({ email });
  if (existing) {
    if (!FORCE) { console.log('ℹ️  Client de démo déjà présent'); return; }
    await User.deleteOne({ email });
  }

  await new User({
    role:      USER_ROLES.CLIENT,
    email,
    password:  'Client@123456',
    firstName: 'Amina',
    lastName:  'Benkhalil',
    phone:     '+212600000001',
    isActive:  true,
    isEmailVerified: true,
    preferredLanguage: 'fr'
  }).save();

  console.log('👤 Client de démo créé : client@kenzbladi.ma / Client@123456');
}

// ─────────────────────────────────────────────────────────────
// Seed Annuaires (acteurs Pro de l'annuaire, données de démo)
// ─────────────────────────────────────────────────────────────
async function seedAnnuaires(adminId) {
  const dataPath = path.resolve(__dirname, '../data/annuaires.json');
  const entries = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

  let createdAccounts = 0;
  let createdAnnuaires = 0;

  for (const entry of entries) {
    const { proAccount, ...annuaireData } = entry;

    // 1. Récupère ou crée le compte Pro lié
    let user = await User.findOne({ email: proAccount.email });
    if (!user) {
      user = await new User({
        role:      USER_ROLES.PRO,
        email:     proAccount.email,
        password:  'Demo@123456',
        firstName: proAccount.firstName,
        lastName:  proAccount.lastName,
        isActive:  true,
        isEmailVerified: true,
        createdBy: adminId,
        proProfile: {
          companyName:      annuaireData.structureName,
          structureType:    annuaireData.structureType,
          domain:           annuaireData.domain,
          subscriptionPlan: 'gratuit',
          isVerified:       true,
          verifiedAt:       new Date(),
          verifiedBy:       adminId
        }
      }).save();
      createdAccounts++;
    }

    // 2. Récupère ou crée la fiche Annuaire liée à ce compte
    let annuaire = await Annuaire.findOne({ proActor: user._id });
    if (annuaire) {
      if (!FORCE) continue;
      await Annuaire.deleteOne({ _id: annuaire._id });
    }

    annuaire = await new Annuaire({
      proActor:      user._id,
      structureName: annuaireData.structureName,
      structureType: annuaireData.structureType,
      domain:        annuaireData.domain,
      description:   annuaireData.description,
      contact:       annuaireData.contact,
      logo:          annuaireData.logo,
      isActive:      true,
      isVerified:    !!annuaireData.isVerified,
      isFeatured:    !!annuaireData.isFeatured,
      verifiedAt:    annuaireData.isVerified ? new Date() : null,
      slug:          slugify(annuaireData.structureName, { lower: true, strict: true }),
      publishedAt:   new Date()
    }).save();

    user.proProfile.annuaireRef = annuaire._id;
    await user.save();
    createdAnnuaires++;
  }

  if (createdAccounts > 0)  console.log(`🏭 ${createdAccounts} compte(s) Pro créé(s) pour l'annuaire (mot de passe : Demo@123456)`);
  if (createdAnnuaires > 0) console.log(`📖 ${createdAnnuaires} fiche(s) Annuaire créée(s)`);
  if (createdAccounts === 0 && createdAnnuaires === 0) console.log('ℹ️  Annuaires de démo déjà présents');
}

// ─────────────────────────────────────────────────────────────
// Runner principal
// ─────────────────────────────────────────────────────────────
(async () => {
  try {
    await connect();
    const admin = await seedAdmin();
    await seedProUsers(admin._id);
    await seedClientUser();
    await seedAnnuaires(admin._id);
    console.log('\n🌟 Seed terminé avec succès !');
    console.log('────────────────────────────────────────');
    console.log('  Admin   →', process.env.ADMIN_EMAIL    || 'admin@kenzbladi.ma');
    console.log('  Pro(s)  →  *@kenzbladi.ma / Demo@123456');
    console.log('  Client  →  client@kenzbladi.ma / Client@123456');
    console.log('────────────────────────────────────────\n');
  } catch (err) {
    console.error('❌ Erreur seed :', err.message);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
})();
