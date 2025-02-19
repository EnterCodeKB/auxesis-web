"use client";

import Footer2 from "./components/underFooter";
import Hero from "./components/heroSection";
import HeroEN from "./en/components/heroSection"; // Engelska Hero
import Footer2EN from "./en/components/underFooter"; // Engelska Footer2
import Header from "./components/Header";
import HeaderEN from "./en/components/Header"; // Engelska Header
import Footer from "./components/Footer";
import FooterEN from "./en/components/Footer"; // Engelska Footer
import ScrollToTop from "./components/ScrollToTop";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CookieBanner from "./components/CookieBanner";
import BackArrow from "./components/BackArrow";
import LanguageSwitcher from "./components/LanguageSwitcher"; // Språkväxlare
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Kolla om vi är på den engelska delen av webbplatsen
  const isEnglish = pathname.startsWith("/en");

  // Kontrollera om Hero ska visas
  const hideHeroPaths = isEnglish
    ? ["/en/products", "/en/sustainability"]
    : ["/produkter", "/hallbarhet"];
  const shouldShowHero = !hideHeroPaths.some((path) =>
    pathname.startsWith(path)
  );

  return (
    <html lang={isEnglish ? "en" : "sv"}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {/* Dynamisk header */}
        {isEnglish ? <HeaderEN /> : <Header />}

        {/* Dynamisk Hero */}
        {shouldShowHero && (isEnglish ? <HeroEN /> : <Hero />)}

        <div className="container">
          <main>
            {children || (
              <p>
                {isEnglish
                  ? "No content available."
                  : "Inget innehåll att visa."}
              </p>
            )}
          </main>
        </div>

        {/* Dynamisk Footer */}
        {isEnglish ? <FooterEN /> : <Footer />}
        {isEnglish ? <Footer2EN /> : <Footer2 />}

        <CookieBanner />
        <ScrollToTop />

        {/* Språkväxlare alltid synlig */}
      </body>
    </html>
  );
}
