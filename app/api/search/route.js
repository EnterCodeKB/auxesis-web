export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const searchQuery = searchParams.get("q")?.toLowerCase() || "";

  if (!searchQuery) {
    return Response.json([]);
  }

  // 🔍 Här lägger vi till alla sidor vi vill att sökningen ska inkludera
  const pages = [
    {
      id: 1,
      name: "Kontakta oss",
      link: "/kontakt",
      content: "Vill du kontakta oss? Här hittar du vår kontaktinformation.",
    },
    {
      id: 2,
      name: "Om oss",
      link: "/omoss",
      content:
        "Auxesis utvecklar, baserat på eget patent, innovativa läkemedel som snabbt tar bort smärta och irritation på huden hos både människor och djur och som är lättillgängligt för konsumenter och olika yrkesgrupper.",
    },
    {
      id: 3,
      name: "Produkter",
      link: "/produkter/historik",
      content:
        "Auxesis utvecklar flera preparat som blockerar smärtsignalen till hjärnan och tar bort smärta på huden.",
    },
    {
      id: 3,
      name: "ASA.P",
      link: "/produkter/asap",
      content: "Receptfritt preparat för människa - ASA.P®",
    },

    {
      id: 4,
      name: "Nyheter",
      link: "/nyheter",
      content: "Senaste uppdateringarna och nyheterna från vårt företag.",
    },
    {
      id: 5,
      name: "Finans",
      link: "/forinvest",
      content: "Finansiella rapporter...",
    },

    {
      id: 6,
      name: "Hålbarhet",
      link: "/hallbarhet/hallbaraaffarer",
      content: "Goda affärer är hållbara...",
    },
    {
      id: 7,
      name: "Agenda",
      link: "/hallbarhet/agenda",
      content: "Ansvar och transparens är avgörande...",
    },
  ];

  // 🔍 Filtrera sidor som innehåller sökordet i **titel eller innehåll**
  const results = pages.filter(
    (page) =>
      page.name.toLowerCase().includes(searchQuery) ||
      page.content.toLowerCase().includes(searchQuery)
  );

  return Response.json(results);
}
