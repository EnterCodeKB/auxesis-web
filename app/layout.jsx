"use client";

import Footer2 from "./components/underFooter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

import Hero from "./components/heroSection";
import "bootstrap-icons/font/bootstrap-icons.css";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import CookieBanner from "./components/CookieBanner";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Kontrollera autentisering
    const isAuthenticated = localStorage.getItem("authenticated");

    // Logga ut automatiskt efter 15 minuter
    const logoutTimeout = setTimeout(() => {
      localStorage.removeItem("authenticated");
      router.push("/login");
    }, 5 * 60 * 1000); // 5 minuter

    return () => clearTimeout(logoutTimeout); // Rensa timeout vid navigering
  }, [pathname, router]);

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
        <Hero />
        <div className="container">
          <main>{children}</main>
        </div>
        <Footer />
        <Footer2 />
        <CookieBanner />
      </body>
    </html>
  );
}
