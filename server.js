// Manoj Vaishnav Hotel POS - Local Network Server & Centralized DB Sync
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 8080;
const DB_FILE = path.join(__dirname, 'database.json');

// Get MIME type for file extensions
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

// Load database from file
function readDb() {
  if (!fs.existsSync(DB_FILE)) {
    return {};
  }
  try {
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    console.error("Error reading database file, returning empty:", e);
    return {};
  }
}

// Save database to file
function writeDb(dbData) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(dbData, null, 2), 'utf8');
  } catch (e) {
    console.error("Error writing database file:", e);
  }
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  
  // API Endpoint: GET /api/db?key=xyz
  if (url.pathname === '/api/db' && req.method === 'GET') {
    const key = url.searchParams.get('key');
    if (!key) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: "Missing key parameter" }));
      return;
    }
    const db = readDb();
    const value = db[key] !== undefined ? db[key] : null;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(value));
    return;
  }
  
  // API Endpoint: POST /api/db?key=xyz
  if (url.pathname === '/api/db' && req.method === 'POST') {
    const key = url.searchParams.get('key');
    if (!key) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: "Missing key parameter" }));
      return;
    }
    
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const db = readDb();
        db[key] = payload;
        writeDb(db);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "Invalid JSON body" }));
      }
    });
    return;
  }

  // API Endpoint: POST /api/db/reset
  if (url.pathname === '/api/db/reset' && req.method === 'POST') {
    if (fs.existsSync(DB_FILE)) {
      try {
        fs.unlinkSync(DB_FILE);
      } catch (e) {
        console.error("Error deleting database file:", e);
      }
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true }));
    return;
  }

  // Serve static files
  let safePath = url.pathname;
  if (safePath === '/') {
    safePath = '/index.html';
  }
  
  const filePath = path.join(__dirname, decodeURIComponent(safePath));
  
  // Prevent directory traversal attacks
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end("403 Forbidden");
    return;
  }
  
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end("404 Not Found");
      return;
    }
    
    res.writeHead(200, { 'Content-Type': getMimeType(filePath) });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log("\n=======================================================");
  console.log("👑 MANOJ VAISHNAV HOTEL & MISHTHAN BHANDAR POS SERVER 👑");
  console.log("=======================================================");
  console.log("The server is running locally on your computer.");
  console.log("Open the following links to access the POS:\n");
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
    console.log("- On other devices: Connect your PC to Wi-Fi to access it on mobile phones.");
  }
  console.log("\nPress Ctrl+C in this command window to stop the server.");
  console.log("=======================================================\n");
});
