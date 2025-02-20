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
        "VD",
        "styrelse",
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
        "VD",
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
      keywords: ["uppdateringar", "nyheter", "pressmeddelande", "VD"],
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

    {
      id: 1,
      name: "About Us",
      link: "/en/about",
      content:
        "Auxesis develops innovative medicines based on its own patent, which quickly relieve pain and irritation on the skin for both humans and animals, making them easily accessible to consumers and various professionals.",
      keywords: [
        "company",
        "background",
        "information",
        "auxesis",
        "business idea",
        "pain",
        "medicine",
        "ASA",
      ],
    },

    {
      id: 2,
      name: "Our Companies",
      link: "/en/about/ourcompany",
      content: "A solid corporate group with three companies...",
      keywords: [
        "Auxesis",
        "Auxesis Pharma",
        "Auxesis Pharma Holding AB (publ)",
        "Auxesis MedTech AB",
        "Auxesis Animal Care AB",
        "pain",
        "animals",
        "Östersund",
        "veterinary",
        "production",
      ],
    },

    {
      id: 3,
      name: "Our Team",
      link: "/en/about/ourteam",
      content:
        "Auxesis has a qualified team with a strong combination of expertise...",
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
        "CEO",
        "board",
      ],
    },

    {
      id: 4,
      name: "Partners",
      link: "/en/about/partners",
      content: "Renowned partners...",
      keywords: [
        "RAMBERG Advokater",
        "IQVIA and Swedish Pharmaceutical Statistics",
        "Granath Advertising AB",
        "RegSmart Life Science AB",
        "Zelmic AB",
        "AFRY",
        "EIP",
        "Edlund & Partners",
      ],
    },

    {
      id: 5,
      name: "For Investors",
      link: "/en/investors/shareholders",
      content: "Solid ownership structure...",
      keywords: ["Roar Adelsten", "owner", "shareholders"],
    },

    {
      id: 6,
      name: "Board & Management",
      link: "/en/investors/board",
      content: "Board and management...",
      keywords: [
        "Roar Adelsten",
        "Lars Larsson",
        "Rune Nordström",
        "Charlotta Larsson",
        "Peter Åberg",
        "CEO",
      ],
    },

    {
      id: 7,
      name: "Financial Reports",
      link: "/en/investors/financial-reports",
      content: "Financial reports...",
      keywords: [
        "investment",
        "finance",
        "economy",
        "report",
        "general meeting",
        "annual report",
      ],
    },

    {
      id: 8,
      name: "IR Contact",
      link: "/en/investors/ir-contact",
      content: "Investor relations contact...",
      keywords: [
        "Roar Adelsten",
        "Rune Nordström",
        "economy",
        "report",
        "general meeting",
        "annual report",
      ],
    },

    {
      id: 9,
      name: "Products",
      link: "/en/products/history",
      content:
        "Auxesis develops several preparations that block pain signals to the brain and relieve skin pain.",
      keywords: [
        "medicine",
        "preparation",
        "products",
        "pain",
        "ASA",
        "Aspirin",
        "history",
        "Acetylsalicylic acid",
      ],
    },

    {
      id: 10,
      name: "ASA.P",
      link: "/en/products/asap",
      content: "Over-the-counter preparation for humans - ASA.P®",
      keywords: ["asa.p", "over-the-counter", "humans", "pain relief"],
    },

    {
      id: 11,
      name: "CoxyPet",
      link: "/en/products/coxypet",
      content: "A natural and innovative preparation for animals...",
      keywords: [
        "coxypet",
        "horses",
        "cattle",
        "cats",
        "dogs",
        "Acetylsalicylic acid",
        "livestock",
        "pigs",
        "skin pain",
        "animals",
        "veterinary medicine",
      ],
    },

    {
      id: 12,
      name: "Product Development",
      link: "/en/products/productdevelopment",
      content:
        "The product development strategy focuses on developing innovative medicines...",
      keywords: ["product", "product development", "cosmetic", "skin"],
    },

    {
      id: 13,
      name: "Patents",
      link: "/en/products/patent",
      content: "Patents are being applied for in multiple countries...",
      keywords: [
        "patent",
        "patent application",
        "Phase 1",
        "Phase 2",
        "international",
        "international patent application",
      ],
    },

    {
      id: 14,
      name: "News",
      link: "/en/news",
      content: "The latest updates and news from our company.",
      keywords: ["updates", "news", "press release", "CEO"],
    },

    {
      id: 15,
      name: "Sustainability",
      link: "/en/sustainability/sustainablebusiness",
      content: "Good business is sustainable business...",
      keywords: [
        "environment",
        "sustainability",
        "business",
        "responsibility",
        "packaging",
      ],
    },

    {
      id: 16,
      name: "Agenda",
      link: "/en/sustainability/agenda",
      content: "Responsibility and transparency are crucial...",
      keywords: [
        "agenda",
        "transparency",
        "responsibility",
        "goals",
        "ISO certification",
        "Agenda 2030",
        "recycled materials",
        "recycling",
        "non-discrimination",
        "quality",
        "safety",
      ],
    },

    {
      id: 17,
      name: "Innovation",
      link: "/en/innovation",
      content: "Innovation is more than just a word for us...",
      keywords: ["innovation", "development", "groundbreaking", "investment"],
    },

    {
      id: 18,
      name: "Press Contact",
      link: "/en/press/presscontact",
      content:
        "Here you will find information for journalists, media, and other stakeholders...",
      keywords: ["Rune Nordström", "press contact"],
    },

    {
      id: 19,
      name: "Contact Us",
      link: "/en/contact",
      content: "Want to get in touch? Here is our contact information.",
      keywords: ["contact", "support", "help"],
    },
  ];

  // 🔍 Filtrera sidor som innehåller sökordet i **titel eller innehåll**
  const results = pages.filter(
    (page) =>
      page.name.toLowerCase().includes(searchQuery) ||
      page.content.toLowerCase().includes(searchQuery) ||
      (page.keywords &&
        page.keywords.some((keyword) =>
          keyword.toLowerCase().includes(searchQuery)
        ))
  );

  return Response.json(results);
}
