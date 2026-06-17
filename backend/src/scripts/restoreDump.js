const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const dumpDir = path.resolve(__dirname, '../../..', 'dump', 'dump', 'kenz-bladi');
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/kenz-bladi';
const mongorestoreCmd = process.env.MONGORESTORE_PATH || 'mongorestore';

if (!fs.existsSync(dumpDir)) {
  console.error(`❌ Dump directory introuvable : ${dumpDir}`);
  console.error('Assurez-vous que le dossier dump se trouve à la racine du projet et contient dump/kenz-bladi.');
  process.exit(1);
}

console.log('🔄 Restauration de la base de données depuis le dump...');
console.log(`📁 Source : ${dumpDir}`);
console.log(`🔗 URI MongoDB : ${uri}`);
console.log(`⚙️  mongorestore command: ${mongorestoreCmd}`);

const args = ['--drop', '--uri', uri, dumpDir];
const restoreProcess = spawn(mongorestoreCmd, args, { stdio: 'inherit' });

restoreProcess.on('error', (err) => {
  console.error('❌ Échec du lancement de mongorestore.');
  if (process.env.MONGORESTORE_PATH) {
    console.error(`Chemin configuré dans MONGORESTORE_PATH : ${process.env.MONGORESTORE_PATH}`);
  } else {
    console.error('Commande recherchée : mongorestore');
  }
  console.error('1) Installez MongoDB Database Tools si nécessaire.');
  console.error('2) Ajoutez mongorestore au PATH, ou définissez MONGORESTORE_PATH dans backend/.env.');
  console.error('3) Sur Windows, le binaire peut être dans un dossier comme C:\\Program Files\\MongoDB\\Tools\\bin\\mongorestore.exe.');
  console.error(err.message);
  process.exit(1);
});

restoreProcess.on('exit', (code) => {
  if (code === 0) {
    console.log('✅ Restauration terminée avec succès.');
    process.exit(0);
  }

  console.error(`❌ mongorestore s'est terminé avec le code ${code}.`);
  process.exit(code || 1);
});
