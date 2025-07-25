"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";

// Path maps
const pathMap = {
  "/": "/en",
  "/en": "/",
  "/en/about": "/omoss",
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
  "/en/products/productdevelopment": "/produkter/produktutveckling",
  "/en/products/patent": "/produkter/patent",
  "/en/sustainability/sustainablebusiness": "/hallbarhet/hallbaraaffarer",
  "/en/sustainability/agenda": "/hallbarhet/agenda",
  "/en/press/auxesisinmedia": "/press/auxesisimedia",
  "/en/press/presscontact": "/press/presskontakt",
  "/en/innovation": "/innovation",
  "/en/contact": "/kontakt",
  "/en/minutes2023": "/protokoll2023",
  "/en/news": "/nyheter",
};

// Skapa en inverterad map för svenska → engelska
const reversePathMap = Object.fromEntries(
  Object.entries(pathMap).map(([en, sv]) => [sv, en])
);

const normalizePath = (path) => {
  // Tar bort trailing slash för att undvika missmatchning
  return path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
};

const LanguageSwitcher = () => {
  const pathname = normalizePath(usePathname()); // Rensar bort extra "/"
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  console.log("Nuvarande path:", pathname);
  console.log("Är engelska sidan?", pathname.startsWith("/en"));

  const isEnglish = pathname.startsWith("/en");

  const newPathname = isEnglish
    ? pathMap[pathname] ??
      pathMap[normalizePath(pathname)] ??
      pathname.replace(/^\/en/, "") ??
      "/"
    : reversePathMap[pathname] ??
      reversePathMap[normalizePath(pathname)] ??
      `/en${pathname}`;

  console.log(`🌍 Växlar språk från ${pathname} till ${newPathname}`);

  return (
    <div className={styles.languageswitcher}>
      <button
        onClick={() => {
          if (newPathname) {
            console.log(`Navigerar till: ${newPathname}`);
            router.push(newPathname);
          } else {
            console.warn("🚨 Ingen giltig översättning hittades!");
          }
        }}
      >
        {isEnglish ? "🇸🇪 " : "🇬🇧 "}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
