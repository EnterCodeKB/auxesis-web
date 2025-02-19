"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const pathMap = {
  "/en/about/ourcompany": "/omoss/varabolag",
  "/en/about/ourteam": "/omoss/vartteam",
  "/en/about/partners": "/omoss/partners",
  "/en/investors/shareholders": "/forinvest/agare",
  "/en/investors/board": "/forinvest/styrelse",
  "/en/investors/financial-reports": "/forinvest/finansrapport",
  "/en/investors/ir-contact": "/forinvest/ir-kontakt",
  "/en/products/history": "/produkter/historik",
  "/en/products/asap": "/produkter/asap",
  "/en/products/coxypet": "/produkter/coxypet",
  "/en/products/development": "/produkter/produktutveckling",
  "/en/products/patents": "/produkter/patent",
  "/en/sustainability/sustainablebusiness": "/hallbarhet/hallbaraaffarer",
  "/en/sustainability/agenda": "/hallbarhet/agenda",
  "/en/press/media": "/press/auxesisimedia",
  "/en/press/contact": "/press/presskontakt",
  "/en/innovation": "/inovation",
  "/en/contact": "/kontakt",
  "/en/minutes2023": "/protokoll2023",
  "/en/news": "/nyheter",
  "/en/news/afry": "/nyheter/afry",
  "/en/news/annualreport2023": "/nyheter/arsredovisning2023",
  "/en/news/euroclear": "/nyheter/euroclear",
  "/en/news/internationalpatent": "/nyheter/internationelltpatent",
  "/en/news/medtechreg": "/nyheter/medtechreg",
  "/en/news/newceo": "/nyheter/nyvd",
  "/en/news/newpartnerzelmic": "/nyheter/nypartnerzelmic",
  "/en/news/newsletter": "/nyheter/nyhetsbrev",
  "/en/news/notice2024": "/nyheter/kallelse2024",
  "/en/news/ofksponsor": "/nyheter/ofksponsor",
  "/en/news/patentapplication": "/nyheter/patentasokanregistrerad",
  "/en/news/production": "/nyheter/produktion",
  "/en/news/public-limited-company": "/nyheter/publiktaktiebolag",
  "/en/news/registeredcompany": "/nyheter/avstamningsbolag",
  "/en/news/regsmart": "/nyheter/regsmart",
  "/en/news/sme-status": "/nyheter/smestatus",
  "/en/news/usa-brand": "/nyheter/usabrand",
  "/en/news/valuation": "/nyheter/vardering",
  "/en/news/valuation-2023": "/nyheter/vardering2023",
  "/en/audit2023": "/revision2023",
};

const reversePathMap = Object.fromEntries(
  Object.entries(pathMap).map(([en, sv]) => [sv, en])
);

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Förhindra hydration error

  const isEnglish = pathname.startsWith("/en");
  const newPathname = isEnglish
    ? pathMap[pathname] || pathname.replace(/^\/en/, "") || "/"
    : reversePathMap[pathname] || `/en${pathname}`;

  return (
    <button
      onClick={() => router.push(newPathname)}
      style={{
        padding: "8px 16px",
        cursor: "pointer",
        backgroundColor: "#f0f0f0",
        border: "none",
        borderRadius: "5px",
        marginLeft: "10px",
      }}
    >
      {isEnglish ? "SV" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
