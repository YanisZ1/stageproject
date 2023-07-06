const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://Admin:AKPEv4JPTZnbsCbs@bpnwebsite.y3w2frc.mongodb.net/?retryWrites=true&w=majority';

const dbName = 'BpnWebsite';
async function connectToMongoDB() {
  try {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    console.log('Connecté à MongoDB');

    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.log('Erreur de connexion à MongoDB:', error);
  }
}

module.exports = connectToMongoDB;
