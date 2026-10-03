import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const distPath = path.join(__dirname, 'dist');

// Serve static assets from dist directory with caching
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath, { maxAge: '1d' }));
}

// Health check endpoint for Cloud Run and container orchestrators
app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// Single Page Application (SPA) catch-all fallback
// All GET requests return index.html so client-side routing works smoothly
app.get('*', (_req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Application built files not found. Please run npm run build first.');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Veneto Clinic production server running on port ${PORT}`);
});
