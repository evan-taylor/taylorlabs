const fs = require("fs")
const path = require("path")
const glob = require("glob")

// Base URL of your website
const BASE_URL = "https://taylorlabs.co"

// Function to generate sitemap
async function generateSitemap() {
  console.log("Generating sitemap...")

  // Get all page files
  const pages = glob.sync("app/**/page.tsx", {
    ignore: ["app/api/**", "app/**/not-found.tsx", "app/**/error.tsx", "app/**/loading.tsx"],
  })

  // Transform the file paths into URLs
  const urls = pages
    .map((page) => {
      // Remove 'app/' prefix and 'page.tsx' suffix
      const path = page.replace("app/", "").replace("/page.tsx", "")

      // Handle index routes
      if (path === "page") {
        return BASE_URL
      }

      // Handle dynamic routes (optional)
      if (path.includes("[") && path.includes("]")) {
        // For dynamic routes, you might want to fetch actual data
        // For now, we'll skip them
        return null
      }

      return `${BASE_URL}/${path}`
    })
    .filter(Boolean) // Remove null values

  // Add any additional URLs manually
  const additionalUrls = [
    // Add any URLs that might not be captured by the page files
  ]

  const allUrls = [...new Set([...urls, ...additionalUrls])]

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  `,
    )
    .join("")}
</urlset>`

  // Write sitemap to public directory
  fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), sitemap)
  console.log("Sitemap generated successfully!")
}

// Generate robots.txt
function generateRobotsTxt() {
  console.log("Generating robots.txt...")

  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml`

  fs.writeFileSync(path.join(process.cwd(), "public", "robots.txt"), robotsTxt)
  console.log("robots.txt generated successfully!")
}

// Run the generation functions
generateSitemap()
generateRobotsTxt()
