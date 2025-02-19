"use client";

import Header from "./components/Header";
import Hero from "./components/heroSection";
import Footer from "./components/Footer";
import Footer2 from "./components/underFooter";
import ScrollToTop from "./components/ScrollToTop";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CookieBanner from "./components/CookieBanner";
import { usePathname } from "next/navigation";

export default function LayoutClient({ children }) {
  const pathname = usePathname();

  const hideHeroPaths = ["/produkter", "/hallbarhet"];
  const shouldShowHero = !hideHeroPaths.some((path) =>
    pathname.startsWith(path)
  );

  return (
    <>
      <Header />
      <div className="container">
        <main>{children || <p>Inget innehåll att visa.</p>}</main>
      </div>
      <Footer />
      <Footer2 />
      <CookieBanner />
      <ScrollToTop />
    </>
  );
}
