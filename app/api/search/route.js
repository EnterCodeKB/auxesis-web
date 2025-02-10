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
      name: "Om oss",
      link: "/omoss",
      content:
        "Auxesis utvecklar, baserat på eget patent, innovativa läkemedel som snabbt tar bort smärta och irritation på huden hos både människor och djur och som är lättillgängligt för konsumenter och olika yrkesgrupper.",
      keywords: [
        "företag",
        "bakgrund",
        "information",
        "auxesis",
        "Affärsidé",
        "smärta",
        "läkemedel",
        "ASA",
      ],
    },

    {
      id: 2,
      name: "Om oss",
      link: "/omoss/varabolag",
      content: "En solid koncern med tre bolag...",
      keywords: [
        "Auxesis",
        "Auxesis Pharma",
        "Auxesis Pharma Holding AB(publ)",
        "Auxesis MedTech AB",
        "Auxesis Animal Care AB",
        "smärta",
        "djur",
        "Östersund",
        "veterinär",
        "produktion",
      ],
    },

    {
      id: 3,
      name: "Team",
      link: "/omoss/vartteam",
      content:
        "Auxesis har ett kvalificerat team med en bra sammansättning av kompetenser ...",
      keywords: [
        "Roar Adelsten",
        "Lars Larsson",
        "Rune Nordström",
        "Charlotta Larsson",
        "Helena Adelsten",
        "Peter Hedberg",
        "Peter Åberg",
        "Susanna Liljedahl",
        "Agneta Larhed",
        "Marie Gårdmark",
      ],
    },

    {
      id: 4,
      name: "Partners",
      link: "/omoss/partners",
      content: "Välrenommerade partners...",
      keywords: [
        "RAMBERG Advokater",
        "IQVIA och Svensk Läkemedelsstatistik",
        "Granath Reklam AB",
        "RegSmart Life Science AB",
        "Zelmic AB",
        "AFRY",
        "EIP",
        "Edlund & Partners",
      ],
    },

    {
      id: 5,
      name: "För invest",
      link: "/forinvest/agare",
      content: "Solid ägarstruktur...",
      keywords: ["Roar Adelsten", "ägare", "aktieägare"],
    },

    {
      id: 6,
      name: "För invest",
      link: "/forinvest/styrelse",
      content: "Styrelse och ledning...",
      keywords: [
        "Roar Adelsten",
        "Lars Larsson",
        "Rune Nordström",
        "Charlotta Larsson",
        "Peter Åberg",
      ],
    },

    {
      id: 7,
      name: "Finans",
      link: "/forinvest/finansrapport",
      content: "Finansiella rapporter...",
      keywords: [
        "investering",
        "finans",
        "ekonomi",
        "rapport",
        "bolagsstämma",
        "årsredovisning",
      ],
    },

    {
      id: 8,
      name: "IR-kontakter",
      link: "/forinvest/ir-kontakt",
      content: "IR-kontakt...",
      keywords: [
        "Roar Adelsten",
        "Rune Nordström",
        "ekonomi",
        "rapport",
        "bolagsstämma",
        "årsredovisning",
      ],
    },

    {
      id: 9,
      name: "Produkter",
      link: "/produkter/historik",
      content:
        "Auxesis utvecklar flera preparat som blockerar smärtsignalen till hjärnan och tar bort smärta på huden.",
      keywords: [
        "läkemedel",
        "preparat",
        "produkter",
        "smärta",
        "ASA",
        "Aspirin",
        "historia",
        "Acetylsalicylsyra",
      ],
    },
    {
      id: 10,
      name: "ASA.P",
      link: "/produkter/asap",
      content: "Receptfritt preparat för människa - ASA.P®",
      keywords: ["asa.p", "receptfritt", "människor", "smärtlindring"],
    },

    {
      id: 11,
      name: "CoxyPet",
      link: "/produkter/coxypet",
      content: "Naturligt och innovativt preparat för djur...",
      keywords: [
        "coxypet",
        "hästar",
        "nötkreatur",
        "katter",
        "hund",
        "Acetylsalicylsyra",
        "Boskapsdjur",
        "grisar",
        "Hudsmärtan",
        "djur",
        "veterinärmedicin",
      ],
    },

    {
      id: 12,
      name: "Produktutveckling",
      link: "/produkter/produktutveckling",
      content:
        "Produktutvecklingsstrategin är att utveckla innovativa läkemedel...",
      keywords: ["produkt", "Produktutveckling", "kosmetisk", "hud"],
    },
    {
      id: 13,
      name: "Patent",
      link: "/produkter/patent",
      content: "Patent söks i flera länder...",
      keywords: [
        "Patent",
        "patentansökan",
        "Fas 1",
        "Fas 2",
        "Internationell",
        "Internationell patententansökan",
      ],
    },

    {
      id: 14,
      name: "Nyheter",
      link: "/nyheter",
      content: "Senaste uppdateringarna och nyheterna från vårt företag.",
      keywords: ["uppdateringar", "nyheter", "pressmeddelande"],
    },

    {
      id: 15,
      name: "Hålbarhet",
      link: "/hallbarhet/hallbaraaffarer",
      content: "Goda affärer är hållbara...",
      keywords: ["miljö", "hållbarhet", "affärer", "ansvar", "förpackningar"],
    },
    {
      id: 16,
      name: "Agenda",
      link: "/hallbarhet/agenda",
      content: "Ansvar och transparens är avgörande...",
      keywords: [
        "agenda",
        "transparens",
        "ansvar",
        "mål",
        "ISO-certifiering",
        "Agenda 2030",
        "återvunnet material",
        "återvunnet",
        "diskriminering",
        "kvalitet",
        "säkerhet",
      ],
    },
    {
      id: 17,
      name: "Innovation",
      link: "/innovation",
      content: "Innovation är mer än bara ett ord för oss...",
      keywords: ["Innovation", "utveckling", "banbrytande", "investeringen"],
    },

    {
      id: 18,
      name: "Presskontakt",
      link: "/press/presskontakt",
      content:
        "Här hittar du information för journalister, media och andra intressenter...",
      keywords: ["Rune Nordström", "presskontakt"],
    },
    {
      id: 19,
      name: "Kontakta oss",
      link: "/kontakt",
      content: "Vill du kontakta oss? Här hittar du vår kontaktinformation.",
      keywords: ["kontakt", "support", "hjälp"],
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
