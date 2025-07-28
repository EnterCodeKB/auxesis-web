export async function GET() {
  const baseUrl = "https://www.auxesis.se";

  const pages = [
    "",
    "en",
    "produkter",
    "hallbarhet",
    "kontakt",
    "omoss",
    "en/about",
    "en/products",
    "en/sustainability",
  ];

  const urls = pages
    .map(
      (path) => `
    <url>
      <loc>${baseUrl}/${path}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  >
    ${urls}
  </urlset>`;

  return new Response(xml.trim(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
