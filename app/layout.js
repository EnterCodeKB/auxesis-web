"use client";

import Footer2 from "./components/underFooter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Importera ScrollToTop-komponenten
import "./globals.css";
import Hero from "./components/heroSection";
import "bootstrap-icons/font/bootstrap-icons.css";
import { usePathname } from "next/navigation"; // Endast usePathname används
import CookieBanner from "./components/CookieBanner";
import BackArrow from "./components/BackArrow"; // Importera BackArrow-komponenten

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Endast denna används nu

  const hideHeroPaths = ["/produkter", "/hallbarhet"];
  const shouldShowHero =
    !pathname.startsWith("/login") &&
    !hideHeroPaths.some((path) => pathname.startsWith(path));

  // Navigering tillbaka logik
  const mainLinks = {
    "/forinvest/agare": "/",
    "/forinvest/styrelse": "/forinvest/agare",
    "/forinvest/vision": "/forinvest/agare",

    "/innovation": "/",
    "/hallbarhet/hallbaraaffarer": "/",
    "/hallbarhet/agenda": "/",
    "/kontakt": "/",
    "/press": "/",
  };

  const mainLink = mainLinks[pathname] || null; // Default till null om ingen match hittas

  return (
    <html lang="sv">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Auxesis Pharma Holding AB (publ)</title>
        <meta name="description" content="Your Website Description" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {shouldShowHero && <Hero />}
        <div className="container">
          <main>{children || <p>Inget innehåll att visa.</p>}</main>
        </div>
        <Footer />
        <Footer2 />
        <CookieBanner />
        <ScrollToTop />
      </body>
    </html>
  );
}
