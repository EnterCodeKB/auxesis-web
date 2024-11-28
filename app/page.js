"use client";
import React from "react";
import RootLayout from "./layout";
import Card from "./components/Card";
import Hero from "./components/HeroSection";
import Middle from "./components/middleSection";
import Blog from "./components/Blog";
import Quiry from "./components/Quiry";
import styles from "./styles/Page.module.css";
import Finance from "./components/Finance";
import Spotlights from "./components/Spotlights";

export default function HomePage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className={styles.div}>
        <Middle />
        <Card />
        <Finance />
      </div>
      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </>
  );
}
const LanguageSwitcher = () => {
  return (
    <div className={styles.languageSwitcher}>
      <Link href="/">
        <button>Sv</button>
      </Link>
    </div>
  );
};
