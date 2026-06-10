/**
 * Script de diagnostic d'authentification
 * Exécuter depuis le dossier backend/ : node test-auth.js
 */
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');
const User     = require('./src/models/User.model');

(async () => {
  console.log('\n══════════════════════════════════════════');
  console.log('   DIAGNOSTIC AUTH — KENZ BLADI');
  console.log('══════════════════════════════════════════\n');

  // 1. Vérification variables d'environnement
  console.log('📋 Variables .env :');
  console.log('  MONGODB_URI  :', process.env.MONGODB_URI  || '❌ MANQUANT');
  console.log('  JWT_SECRET   :', process.env.JWT_SECRET   ? '✅ défini' : '❌ MANQUANT');
  console.log('  ADMIN_EMAIL  :', process.env.ADMIN_EMAIL  || 'admin@kenzbladi.ma (par défaut)');
  console.log('');

  if (!process.env.MONGODB_URI) {
    console.error('❌ MONGODB_URI manquant — arrêt');
    process.exit(1);
  }

  // 2. Connexion MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connecté :', process.env.MONGODB_URI);
  } catch (e) {
    console.error('❌ Connexion MongoDB échouée :', e.message);
    process.exit(1);
  }

  // 3. Nombre total d'utilisateurs
  const total = await User.countDocuments();
  console.log(`\n📊 Utilisateurs en base : ${total}`);

  if (total === 0) {
    console.error('\n❌ Base vide — le seed n\'a pas fonctionné !');
    console.log('   Relance : npm run seed -- --force');
    await mongoose.disconnect(); process.exit(1);
  }

  // 4. Lister tous les utilisateurs
  const all = await User.find({}, 'email role isActive loginAttempts lockUntil').lean();
  console.log('\n👥 Utilisateurs présents :');
  all.forEach(u => {
    const locked = u.lockUntil && u.lockUntil > Date.now();
    console.log(`  [${u.role.padEnd(6)}] ${u.email}  actif:${u.isActive}  tentatives:${u.loginAttempts || 0}  🔒verrouillé:${locked}`);
  });

  // 5. Tester le mot de passe Admin
  console.log('\n🔐 Test mot de passe Admin :');
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@kenzbladi.ma';
  const admin = await User.findOne({ email: adminEmail }).select('+password');

  if (!admin) {
    console.log(`  ❌ Admin introuvable avec l'email : "${adminEmail}"`);
  } else {
    console.log(`  ✅ Admin trouvé : ${admin.email}`);
    console.log(`  Hash stocké     : ${admin.password?.substring(0, 30)}...`);

    const pwd = process.env.ADMIN_PASSWORD || 'Admin@123456';
    const matchMethod = await admin.comparePassword(pwd);
    const matchDirect = await bcrypt.compare(pwd, admin.password);
    console.log(`  comparePassword("${pwd}") → ${matchMethod ? '✅ OK' : '❌ ÉCHEC'}`);
    console.log(`  bcrypt.compare direct      → ${matchDirect ? '✅ OK' : '❌ ÉCHEC'}`);

    if (!matchMethod) {
      console.log('\n  ⚠️  Le hash en base ne correspond pas au mot de passe attendu.');
      console.log('  → Double hashing probable. Vérifier le hook pre-save.');

      // Test : est-ce que le hash est lui-même hashé ?
      const hashOfHash = await bcrypt.compare(admin.password, admin.password).catch(() => false);
      const plainBcrypt = admin.password?.startsWith('$2b$') || admin.password?.startsWith('$2a$');
      console.log(`  → Le hash commence par $2b$ / $2a$ (bcrypt valide) : ${plainBcrypt}`);
    }
  }

  // 6. Test hash + compare direct (sans DB)
  console.log('\n🧪 Test bcrypt autonome (sans base) :');
  const testPwd  = 'Admin@123456';
  const salt     = await bcrypt.genSalt(12);
  const hash     = await bcrypt.hash(testPwd, salt);
  const ok       = await bcrypt.compare(testPwd, hash);
  console.log(`  hash("${testPwd}") → ${hash.substring(0, 30)}...`);
  console.log(`  compare           → ${ok ? '✅ bcryptjs fonctionne correctement' : '❌ PROBLÈME BCRYPTJS'}`);

  // 7. Déverrouiller les comptes bloqués
  const locked = await User.find({ lockUntil: { $gt: new Date() } });
  if (locked.length > 0) {
    console.log(`\n🔓 Déverrouillage de ${locked.length} compte(s) bloqué(s)...`);
    await User.updateMany(
      { lockUntil: { $gt: new Date() } },
      { $unset: { lockUntil: 1, loginAttempts: 1 } }
    );
    console.log('  ✅ Comptes déverrouillés');
  }

  console.log('\n══════════════════════════════════════════\n');
  await mongoose.disconnect();
})();
