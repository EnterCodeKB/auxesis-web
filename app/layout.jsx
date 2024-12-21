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

    // Om användaren inte är autentiserad och inte redan är på "/login", omdirigera
    if (!isAuthenticated && pathname !== "/login") {
      router.push("/login");
    }

    // Om användaren är autentiserad, sätt en timeout för automatisk utloggning
    if (isAuthenticated) {
      const logoutTimeout = setTimeout(() => {
        localStorage.removeItem("authenticated");
        router.push("/login");
      }, 15 * 60 * 1000); // 15 minuter

      return () => clearTimeout(logoutTimeout); // Rensa timeout vid navigering
    }
  }, [pathname, router]);

  // Undanta header, hero och footer från "/login"
  const isLoginPage = pathname === "/login";

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
        {!isLoginPage && <Header />}
        {!isLoginPage && <Hero />}
        <div className="container">
          <main>{children}</main>
        </div>
        {!isLoginPage && <Footer />}
        {!isLoginPage && <Footer2 />}
        {!isLoginPage && <CookieBanner />}
      </body>
    </html>
  );
}
