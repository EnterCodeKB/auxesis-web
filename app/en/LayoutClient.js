"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Footer2 from "./components/underFooter";
import ScrollToTop from "../components/ScrollToTop";
import "../globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CookieBanner from "../components/CookieBanner";
import { usePathname } from "next/navigation";

export default function LayoutClient({ children }) {
  const pathname = usePathname();

  const hideHeroPaths = [
    "/en/products",
    "/en/sustainability",
    "/en/about/ourteam",
  ];
  const shouldShowHero = !hideHeroPaths.some((path) =>
    pathname.startsWith(path)
  );

  return (
    <>
      <Header />
      <div className="container">
        <main>{children || <p>No content available.</p>}</main>
      </div>
      <Footer />
      <Footer2 />
      <CookieBanner />
      <ScrollToTop />
    </>
  );
}
