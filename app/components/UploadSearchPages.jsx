"use client";

import { useEffect } from "react";
import { db } from "@/firebase";
import { collection, setDoc, doc } from "firebase/firestore";

const pagesSv = [
  {
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
    name: "Team",
    link: "/omoss/vartteam",
    content:
      "Auxesis har ett kvalificerat team med en bra sammansättning av kompetenser ...",
    keywords: [
      "Roar Adelsten",
      "Lars Larsson",
      "Magnus Larsson",
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
      "Ordförande",
    ],
  },
  {
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
    name: "För invest",
    link: "/forinvest/agare",
    content: "Solid ägarstruktur...",
    keywords: ["Roar Adelsten", "ägare", "aktieägare"],
  },
  {
    name: "För invest",
    link: "/forinvest/styrelse",
    content: "Styrelse och ledning...",
    keywords: [
      "Roar Adelsten",
      "Lars Larsson",
      "Magnus Larsson",
      "Rune Nordström",
      "Charlotta Larsson",
      "Peter Åberg",
      "VD",
    ],
  },
  {
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
    name: "IR-kontakter",
    link: "/forinvest/ir-kontakt",
    content: "IR-kontakt...",
    keywords: [
      "Roar Adelsten",
      "Peter Åberg",
      "ekonomi",
      "rapport",
      "bolagsstämma",
      "årsredovisning",
    ],
  },
  {
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
    name: "ASA.P",
    link: "/produkter/asap",
    content: "Receptfritt preparat för människa - ASA.P®",
    keywords: ["asa.p", "receptfritt", "människor", "smärtlindring"],
  },
  {
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
    name: "Produktutveckling",
    link: "/produkter/produktutveckling",
    content:
      "Produktutvecklingsstrategin är att utveckla innovativa läkemedel...",
    keywords: ["produkt", "Produktutveckling", "kosmetisk", "hud"],
  },
  {
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
    name: "Nyheter",
    link: "/nyheter",
    content: "Senaste uppdateringarna och nyheterna från vårt företag.",
    keywords: ["uppdateringar", "nyheter", "pressmeddelande", "VD"],
  },
  {
    name: "Hållbarhet",
    link: "/hallbarhet/hallbaraaffarer",
    content: "Goda affärer är hållbara...",
    keywords: ["miljö", "hållbarhet", "affärer", "ansvar", "förpackningar"],
  },
  {
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
    name: "Innovation",
    link: "/innovation",
    content: "Innovation är mer än bara ett ord för oss...",
    keywords: ["Innovation", "utveckling", "banbrytande", "investeringen"],
  },
  {
    name: "Presskontakt",
    link: "/press/presskontakt",
    content:
      "Här hittar du information för journalister, media och andra intressenter...",
    keywords: ["Peter Åberg", "presskontakt"],
  },
  {
    name: "Kontakta oss",
    link: "/kontakt",
    content: "Vill du kontakta oss? Här hittar du vår kontaktinformation.",
    keywords: ["kontakt", "support", "hjälp"],
  },
];

export default function UploadSearchPages() {
  useEffect(() => {
    const upload = async () => {
      for (const page of pagesSv) {
        try {
          const id = page.link.replace(/\//g, "_").replace(/^_/, "");
          const docRef = doc(db, "searchPages", id); // 🔑 bestämt ID
          await setDoc(docRef, { ...page, lang: "sv" }, { merge: true });
          console.log("✅ Uppladdad:", id);
        } catch (error) {
          console.error("❌ Fel:", error);
        }
      }
    };

    upload();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h3>⏳ Laddar upp svenska sidor till Firestore...</h3>
    </div>
  );
}
