//app/en/components/UploadSearchPagesEn.jsx
"use client";

import { useEffect } from "react";
import { db } from "@/firebase";
import { collection, setDoc, doc } from "firebase/firestore";

const pagesEn = [
  {
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
    name: "Our Team",
    link: "/en/about/ourteam",
    content:
      "Auxesis has a qualified team with a strong combination of expertise...",
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
      "CEO",
      "board",
    ],
  },
  {
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
    name: "For Investors",
    link: "/en/investors/shareholders",
    content: "Solid ownership structure...",
    keywords: ["Roar Adelsten", "owner", "shareholders"],
  },
  {
    name: "Board & Management",
    link: "/en/investors/board",
    content: "Board and management...",
    keywords: [
      "Roar Adelsten",
      "Lars Larsson",
      "Magnus Larsson",
      "Rune Nordström",
      "Charlotta Larsson",
      "Peter Åberg",
      "CEO",
    ],
  },
  {
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
    name: "IR Contact",
    link: "/en/investors/ir-contact",
    content: "Investor relations contact...",
    keywords: [
      "Roar Adelsten",
      "Peter Åberg",
      "economy",
      "report",
      "general meeting",
      "annual report",
    ],
  },
  {
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
    name: "ASA.P",
    link: "/en/products/asap",
    content: "Over-the-counter preparation for humans - ASA.P®",
    keywords: ["asa.p", "over-the-counter", "humans", "pain relief"],
  },
  {
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
    name: "Product Development",
    link: "/en/products/productdevelopment",
    content:
      "The product development strategy focuses on developing innovative medicines...",
    keywords: ["product", "product development", "cosmetic", "skin"],
  },
  {
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
    name: "News",
    link: "/en/news",
    content: "The latest updates and news from our company.",
    keywords: ["updates", "news", "press release", "CEO"],
  },
  {
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
    name: "Innovation",
    link: "/en/innovation",
    content: "Innovation is more than just a word for us...",
    keywords: ["innovation", "development", "groundbreaking", "investment"],
  },
  {
    name: "Press Contact",
    link: "/en/press/presscontact",
    content:
      "Here you will find information for journalists, media, and other stakeholders...",
    keywords: ["Peter Åberg", "press contact"],
  },
  {
    name: "Contact Us",
    link: "/en/contact",
    content: "Want to get in touch? Here is our contact information.",
    keywords: ["contact", "support", "help"],
  },
];

export default function UploadSearchPagesEn() {
  useEffect(() => {
    const upload = async () => {
      for (const page of pagesEn) {
        try {
          const id = page.link.replace(/\//g, "_").replace(/^_/, "");
          const docRef = doc(db, "searchPages", id); // 🔑 Stabilt ID utifrån länk
          await setDoc(docRef, { ...page, lang: "en" }, { merge: true }); // merge = uppdatera om redan finns
          console.log("✅ Lagt till (EN):", id);
        } catch (error) {
          console.error("❌ Fel vid uppladdning (EN):", error);
        }
      }
    };

    upload();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h3>⏳ Laddar upp engelska sidor till Firestore...</h3>
    </div>
  );
}
