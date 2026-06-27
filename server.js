// Manoj Vaishnav Hotel POS - Local Network Server & Centralized DB Sync
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');

const PORT = 8080;
const DB_FILE = path.join(__dirname, 'database.json');
const AUDIT_FILE = path.join(__dirname, 'database.audit.log');
const DEFAULT_PASSWORD = 'owner123';
const PASSWORD_ITERATIONS = 120000;

let mongoClient = null;
let mongoDb = null;
const clients = new Set();
let revision = 0;

function disableMongo(err) {
  if (mongoDb || mongoClient) {
    console.error('Falling back to local database storage:', err.message);
  }
  mongoClient = null;
  mongoDb = null;
}

const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const index = trimmed.indexOf('=');
        if (index !== -1) {
          const key = trimmed.substring(0, index).trim();
          const val = trimmed.substring(index + 1).trim().replace(/(^['"]|['"]$)/g, '');
          process.env[key] = val;
        }
      }
    });
    console.log('Local .env file configuration loaded successfully.');
  } catch (err) {
    console.error('Failed to parse local .env file:', err.message);
  }
}

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon',
    '.svg': 'image/svg+xml'
  };
  return mimeTypes[ext] || 'application/octet-stream';
}

function readJsonFile(filePath, fallback) {
  if (!fs.existsSync(filePath)) {
    return fallback;
  }

  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    console.error(`Error reading ${path.basename(filePath)}, returning fallback:`, err.message);
    return fallback;
  }
}

function writeJsonAtomic(filePath, data) {
  const tempPath = `${filePath}.${process.pid}.tmp`;
  fs.writeFileSync(tempPath, JSON.stringify(data, null, 2), 'utf8');
  fs.renameSync(tempPath, filePath);
}

function readLocalDb() {
  return readJsonFile(DB_FILE, {});
}

function writeLocalDb(dbData) {
  writeJsonAtomic(DB_FILE, dbData);
}

function createPasswordRecord(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(String(password), salt, PASSWORD_ITERATIONS, 64, 'sha256').toString('hex');
  return {
    scheme: 'pbkdf2-sha256',
    salt,
    iterations: PASSWORD_ITERATIONS,
    hash,
    createdAt: new Date().toISOString()
  };
}

function normalizePasswordValue(payload) {
  if (payload && typeof payload === 'object' && payload.scheme === 'pbkdf2-sha256' && payload.hash && payload.salt) {
    return payload;
  }
  if (typeof payload === 'string') {
    return createPasswordRecord(payload);
  }
  return createPasswordRecord(DEFAULT_PASSWORD);
}

function verifyPasswordRecord(stored, candidate) {
  if (!stored) {
    return candidate === DEFAULT_PASSWORD;
  }

  if (typeof stored === 'string') {
    return stored === candidate;
  }

  if (stored.scheme === 'pbkdf2-sha256' && stored.hash && stored.salt) {
    const candidateHash = crypto.pbkdf2Sync(String(candidate), stored.salt, stored.iterations || PASSWORD_ITERATIONS, 64, 'sha256').toString('hex');
    return crypto.timingSafeEqual(Buffer.from(candidateHash, 'hex'), Buffer.from(stored.hash, 'hex'));
  }

  return false;
}

async function connectMongoIfConfigured() {
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    return;
  }

  try {
    const { MongoClient } = require('mongodb');
    mongoClient = new MongoClient(mongoUri);
    await mongoClient.connect();
    mongoDb = mongoClient.db('pos_db');
    console.log('Connected successfully to MongoDB Atlas database!');
  } catch (err) {
    mongoClient = null;
    mongoDb = null;
    console.error('MongoDB Atlas connection failed:', err.message);
  }
}

async function readStoreValue(key) {
  if (mongoDb) {
    try {
      const doc = await mongoDb.collection('store').findOne({ _id: key });
      if (doc) {
        return doc.value;
      }
    } catch (err) {
      disableMongo(err);
    }
  }

  const localDb = readLocalDb();
  return Object.prototype.hasOwnProperty.call(localDb, key) ? localDb[key] : null;
}

async function writeStoreValue(key, value) {
  const timestamp = new Date().toISOString();

  if (mongoDb) {
    try {
      await mongoDb.collection('store').updateOne(
        { _id: key },
        { $set: { value, updatedAt: timestamp } },
        { upsert: true }
      );
      const db = readLocalDb();
      db[key] = value;
      db._meta = db._meta || {};
      db._meta.updatedAt = timestamp;
      db._meta.revision = (db._meta.revision || 0) + 1;
      db._meta.lastKey = key;
      revision = db._meta.revision;
      writeLocalDb(db);
      return timestamp;
    } catch (err) {
      disableMongo(err);
    }
  }

  const db = readLocalDb();
  db[key] = value;
  db._meta = db._meta || {};
  db._meta.updatedAt = timestamp;
  db._meta.revision = (db._meta.revision || 0) + 1;
  db._meta.lastKey = key;
  revision = db._meta.revision;
  writeLocalDb(db);

  return timestamp;
}

async function resetStore() {
  const timestamp = new Date().toISOString();
  const db = {
    _meta: {
      updatedAt: timestamp,
      revision: (readLocalDb()._meta && readLocalDb()._meta.revision ? readLocalDb()._meta.revision : 0) + 1,
      lastKey: '__reset__'
    }
  };
  revision = db._meta.revision;
  writeLocalDb(db);

  if (mongoDb) {
    try {
      await mongoDb.collection('store').deleteMany({});
    } catch (err) {
      disableMongo(err);
    }
  }

  fs.appendFileSync(AUDIT_FILE, `${JSON.stringify({ type: 'db-reset', timestamp })}\n`, 'utf8');

  return timestamp;
}

async function appendAuditRecord(entry) {
  if (mongoDb) {
    try {
      await mongoDb.collection('audit').insertOne(entry);
      return;
    } catch (err) {
      disableMongo(err);
    }
  }

  fs.appendFileSync(AUDIT_FILE, `${JSON.stringify(entry)}\n`, 'utf8');
}

async function bootstrapMongoFromLocal() {
  if (!mongoDb) {
    return;
  }

  try {
    const collection = mongoDb.collection('store');
    const existingCount = await collection.countDocuments();
    if (existingCount > 0) {
      return;
    }

    const localDb = readLocalDb();
    const entries = Object.entries(localDb).filter(([key]) => key !== '_meta');
    if (entries.length === 0) {
      return;
    }

    await collection.insertMany(entries.map(([key, value]) => ({ _id: key, value, bootstrappedAt: new Date().toISOString() })));
    console.log('Bootstrapped MongoDB store from existing local database.json data.');
  } catch (err) {
    disableMongo(err);
  }
}

function broadcast(event) {
  const message = `event: ${event.type}\ndata: ${JSON.stringify(event)}\n\n`;
  for (const client of clients) {
    client.res.write(message);
  }
}

function registerSseClient(res) {
  const client = { res };
  clients.add(client);

  const heartbeat = setInterval(() => {
    try {
      res.write(': ping\n\n');
    } catch (err) {
      clearInterval(heartbeat);
    }
  }, 25000);

  res.on('close', () => {
    clearInterval(heartbeat);
    clients.delete(client);
  });

  res.write('event: ready\n');
  res.write(`data: ${JSON.stringify({ type: 'ready', revision, timestamp: new Date().toISOString() })}\n\n`);
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 10 * 1024 * 1024) {
        reject(new Error('Request body too large'));
        req.destroy();
      }
    });
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

async function handleDbGet(req, res, url) {
  const key = url.searchParams.get('key');
  if (!key) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Missing key parameter' }));
    return;
  }

  try {
    const value = await readStoreValue(key);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(value));
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: err.message }));
  }
}

async function handleDbPost(req, res, url) {
  const key = url.searchParams.get('key');
  if (!key) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Missing key parameter' }));
    return;
  }

  try {
    const body = await readRequestBody(req);
    let payload;
    try {
      payload = JSON.parse(body);
    } catch (err) {
      payload = body;
    }

    const value = key === 'password' ? normalizePasswordValue(payload) : payload;
    const timestamp = await writeStoreValue(key, value);
    const sourceId = req.headers['x-mv-client-id'] || req.headers['x-client-id'] || null;

    await appendAuditRecord({
      type: 'db-write',
      key,
      timestamp,
      sourceId,
      bytes: Buffer.byteLength(body || '', 'utf8')
    });

    broadcast({
      type: 'db-change',
      key,
      timestamp,
      sourceId,
      revision
    });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true, updatedAt: timestamp, revision }));
  } catch (err) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: err.message || 'Invalid JSON body' }));
  }
}

async function handleAuthVerify(req, res) {
  try {
    const body = await readRequestBody(req);
    const payload = body ? JSON.parse(body) : {};
    const candidate = String(payload.password || '');
    const stored = await readStoreValue('password');
    const ok = verifyPasswordRecord(stored, candidate);

    res.writeHead(ok ? 200 : 401, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: ok }));
  } catch (err) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: err.message }));
  }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === '/api/db/events' && req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
      'X-Accel-Buffering': 'no'
    });
    registerSseClient(res);
    return;
  }

  if (url.pathname === '/api/auth/owner/verify' && req.method === 'POST') {
    await handleAuthVerify(req, res);
    return;
  }

  if (url.pathname === '/api/db' && req.method === 'GET') {
    await handleDbGet(req, res, url);
    return;
  }

  if (url.pathname === '/api/db' && req.method === 'POST') {
    await handleDbPost(req, res, url);
    return;
  }

  if (url.pathname === '/api/db/reset' && req.method === 'POST') {
    try {
      const timestamp = await resetStore();
      broadcast({ type: 'db-reset', timestamp, revision });
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, updatedAt: timestamp, revision }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
    return;
  }

  let safePath = url.pathname;
  if (safePath === '/') {
    safePath = '/index.html';
  }

  const filePath = path.join(__dirname, decodeURIComponent(safePath));

  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    res.writeHead(200, { 'Content-Type': getMimeType(filePath) });
    fs.createReadStream(filePath).pipe(res);
  });
});

async function boot() {
  await connectMongoIfConfigured();
  await bootstrapMongoFromLocal();
  if (!mongoDb) {
    const currentDb = readLocalDb();
    revision = currentDb._meta && currentDb._meta.revision ? currentDb._meta.revision : 0;
  }

  server.listen(PORT, () => {
    console.log('\n=======================================================');
    console.log('👑 MANOJ VAISHNAV HOTEL & MISHTHAN BHANDAR POS SERVER 👑');
    console.log('=======================================================');
    console.log('The server is running locally on your computer.');
    console.log('Open the following links to access the POS:\n');
    console.log(`- On this computer:  http://localhost:${PORT}`);

    const networkInterfaces = os.networkInterfaces();
    let hasNetwork = false;
    for (const interfaceName in networkInterfaces) {
      for (const net of networkInterfaces[interfaceName]) {
        if (net.family === 'IPv4' && !net.internal) {
          console.log(`- On other devices:  http://${net.address}:${PORT}`);
          hasNetwork = true;
        }
      }
    }
    if (!hasNetwork) {
      console.log('- On other devices: Connect your PC to Wi-Fi to access it on mobile phones.');
    }
    console.log('\nPress Ctrl+C in this command window to stop the server.');
    console.log('=======================================================\n');
  });
}

boot();
