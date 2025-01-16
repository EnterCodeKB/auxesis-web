"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Rätt import för App Router
import Card from "./components/Card";
import Middle from "./components/middleSection";
import styles from "./styles/Page.module.css";
import Finance from "./components/Finance";
import LatestNews from "./components/LatestNews";
import { newsItems } from "./data/newsItems"; // Anpassa vägen om det behövs

export default function HomePage() {
  const router = useRouter();

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
