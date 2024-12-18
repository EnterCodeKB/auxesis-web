"use client";

import Footer2 from "./components/underFooter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/globals.css";

import Hero from "./components/HeroSection";
import "bootstrap-icons/font/bootstrap-icons.css";
import { usePathname } from "next/navigation";
import CookieBanner from "./components/CookieBanner";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideHeroPaths = ["/produkter"];
  const shouldHideHero = hideHeroPaths.some((path) =>
    pathname.startsWith(path)
  );

  return (
    <html lang="sv">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Your Website Title</title>
        <meta name="description" content="Your Website Description" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {!shouldHideHero && <Hero />}
        <div className="container">
          <main>{children}</main>
        </div>
        <Footer />
        <Footer2 />
        <CookieBanner /> {/* Lägg till cookie-bannern här */}
      </body>
    </html>
  );
}
