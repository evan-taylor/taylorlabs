import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert ESM __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = 'https://taylorlabs.co';
const ROUTES_FILE_PATH = path.join(__dirname, '..', 'src', 'App.tsx');
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');
const LAST_MOD_DATE = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
const INCLUDE_HASH_ROUTES = false; // Set to false to exclude hash routes (#about, etc.)

/**
 * Extract routes from the App.tsx file
 * @returns {string[]} Array of routes
 */
function extractRoutesFromAppFile() {
  const appFileContent = fs.readFileSync(ROUTES_FILE_PATH, 'utf8');
  
  // Regular expression to find Route components and extract their path props
  const routeRegex = /<Route\s+path=["']([^"']+)["']/g;
  
  const routes = [];
  let match;
  
  while ((match = routeRegex.exec(appFileContent)) !== null) {
    const route = match[1];
    // Skip dynamic routes with params for simplicity
    if (!route.includes(':')) {
      routes.push(route);
    }
  }
  
  // Add hash routes from the home page if configured to do so
  // Note: Search engines typically don't index URL fragments (hash parts) as separate pages
  if (INCLUDE_HASH_ROUTES) {
    const hashRoutes = ['#about', '#services', '#contact'];
    hashRoutes.forEach(hashRoute => {
      routes.push(hashRoute);
    });
  }
  
  return routes;
}

/**
 * Generate sitemap XML content
 * @param {string[]} routes Array of routes
 * @returns {string} XML content
 */
function generateSitemapXml(routes) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    const isHashRoute = route.startsWith('#');
    const url = isHashRoute ? `${SITE_URL}/${route}` : `${SITE_URL}${route}`;
    const priority = route === '/' ? '1.0' : isHashRoute ? '0.8' : '0.9';
    
    xml += '  <url>\n';
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <lastmod>${LAST_MOD_DATE}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += `    <priority>${priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
}

/**
 * Main function to generate and save the sitemap
 */
function generateSitemap() {
  try {
    console.log('Extracting routes from App.tsx...');
    const routes = extractRoutesFromAppFile();
    console.log(`Found ${routes.length} routes: ${routes.join(', ')}`);
    
    console.log('Generating sitemap XML...');
    const sitemapXml = generateSitemapXml(routes);
    
    console.log(`Writing sitemap to ${OUTPUT_PATH}...`);
    fs.writeFileSync(OUTPUT_PATH, sitemapXml);
    
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

// Execute the script
generateSitemap();
