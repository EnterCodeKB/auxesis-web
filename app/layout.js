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

  const hideHeroPaths = ["/produkter"];
  const shouldShowHero =
    !pathname.startsWith("/login") &&
    !hideHeroPaths.some((path) => pathname.startsWith(path));

  useEffect(() => {
    const isAuthenticated = Boolean(localStorage.getItem("authenticated"));
    console.log("Autentiserad:", isAuthenticated, "Pathname:", pathname);

    if (!isAuthenticated && pathname !== "/login") {
      router.push("/login");
    }

    if (isAuthenticated && pathname === "/login") {
      router.push("/");
    }

    if (isAuthenticated) {
      const logoutTimeout = setTimeout(() => {
        localStorage.removeItem("authenticated");
        router.push("/login");
      }, 35 * 60 * 1000);

      return () => clearTimeout(logoutTimeout);
    }
  }, [pathname, router]);

  const isLoginPage = pathname === "/login";

  return (
    <html lang="sv">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Auxesis Pharma Holding AB(publ)</title>
        <meta name="description" content="Your Website Description" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </head>
      <body>
        {!isLoginPage && <Header />}
        {shouldShowHero && <Hero />}
        <div className="container">
          <main>{children || <p>Inget innehåll att visa.</p>}</main>
        </div>
        {!isLoginPage && <Footer />}
        {!isLoginPage && <Footer2 />}
        {!isLoginPage && <CookieBanner />}
      </body>
    </html>
  );
}
