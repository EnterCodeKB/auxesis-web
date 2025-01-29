import { JSDOM } from "jsdom";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const searchQuery = searchParams.get("q")?.toLowerCase() || "";

  if (!searchQuery) {
    return Response.json([]);
  }

  // Hämta HTML från en riktig sida i din app (du kan ändra detta till en dynamisk fetch)
  const htmlContent = `
    <html>
      <body>
        <h1>Välkommen till vår sida</h1>
        <p>Vi erbjuder tjänster och produkter för alla behov.</p>
      </body>
    </html>
  `;

  const dom = new JSDOM(htmlContent);
  const pageText = dom.window.document.body.textContent.toLowerCase();

  // Kontrollera om sökordet finns i sidans text
  const found = pageText.includes(searchQuery)
    ? [{ name: "🔍 Text hittades på sidan", link: "/" }]
    : [];

  return Response.json(found);
}
