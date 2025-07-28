"use client";

import { usePathname } from "next/navigation";
import Hero from "../components/heroSection";
import HeroEN from "../en/components/HeroSection";
import Header from "../components/Header";
import HeaderEN from "../en/components/Header";
import Footer from "../components/Footer";
import FooterEN from "../en/components/Footer";
import Footer2 from "../components/underFooter";
import Footer2EN from "../en/components/underFooter";
import ScrollToTop from "../components/ScrollToTop";
import CookieBanner from "../components/CookieBanner";
import BackArrow from "../components/BackArrow";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function AppLayoutClient({ children }) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const hideHeroPaths = isEnglish
    ? ["/en/products", "/en/sustainability"]
    : ["/produkter", "/hallbarhet"];
  const shouldShowHero = !hideHeroPaths.some((path) =>
    pathname.startsWith(path)
  );

  return (
    <>
      {isEnglish ? <HeaderEN /> : <Header />}
      {shouldShowHero && (isEnglish ? <HeroEN /> : <Hero />)}

      <div className="container">
        <main>{children}</main>
      </div>

      {isEnglish ? <FooterEN /> : <Footer />}
      {isEnglish ? <Footer2EN /> : <Footer2 />}

      <CookieBanner />
      <ScrollToTop />
      <BackArrow />
      <LanguageSwitcher />
    </>
  );
}
