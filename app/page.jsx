"use client";
import React from "react";
import Card from "./components/Card";
import Middle from "./components/middleSection";
import styles from "./styles/Page.module.css";
import Finance from "./components/Finance";
import LatestNews from "./components/LatestNews";
import { newsItems } from "./data/newsItems"; // Anpassa vägen om det behövs
import AnimatedText from "./components/AnimatedText";

export default function HomePage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <LatestNews newsItems={newsItems} />
      <div className={styles.pagediv}>
        <section>
          <Middle />
        </section>
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
