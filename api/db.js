// Vercel Serverless Function: Centralized MongoDB Atlas Connector
const { MongoClient } = require('mongodb');

const dbName = "pos_db";
const collectionName = "store";

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("Please define the MONGODB_URI environment variable inside Vercel Dashboard Settings.");
  }
  
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }
  
  // Set up connection options
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  
  cachedClient = client;
  cachedDb = db;
  return { client, db };
}

module.exports = async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);
  const key = url.searchParams.get('key');

  // Route 1: POST /api/db/reset
  if (url.pathname === '/api/db/reset' && req.method === 'POST') {
    try {
      const { db } = await connectToDatabase();
      const collection = db.collection(collectionName);
      await collection.deleteMany({});
      return res.status(200).json({ success: true });
    } catch (e) {
      console.error("Database reset error:", e);
      return res.status(500).json({ error: e.message });
    }
  }

  // Route 2: /api/db
  if (url.pathname === '/api/db' || url.pathname === '/api/db/') {
    if (!key) {
      return res.status(400).json({ error: "Missing key parameter" });
    }

    try {
      const { db } = await connectToDatabase();
      const collection = db.collection(collectionName);

      // GET method
      if (req.method === 'GET') {
        const doc = await collection.findOne({ _id: key });
        return res.status(200).json(doc ? doc.value : null);
      }

      // POST method
      if (req.method === 'POST') {
        let payload = req.body;
        
        // Handle raw string payloads if not pre-parsed by body-parser
        if (typeof payload === 'string') {
          try {
            payload = JSON.parse(payload);
          } catch(err) {
            // keep as string
          }
        }

        await collection.updateOne(
          { _id: key },
          { $set: { value: payload } },
          { upsert: true }
        );
        return res.status(200).json({ success: true });
      }
    } catch (e) {
      console.error("Database CRUD error:", e);
      return res.status(500).json({ error: e.message });
    }
  }

  return res.status(404).send("Not Found");
};
