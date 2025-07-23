//app/page.js

"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Rätt import för navigering
import Card from "./components/Card";
import Middle from "./components/middleSection";
import styles from "./styles/Page.module.css";
import Finance from "./components/Finance";
import LatestNews from "./components/LatestNews";
import SearchComponent from "./components/SearchComponent";
import { newsItems } from "./data/newsItems"; // Anpassa vägen om det behövs
import { searchData } from "./data/searchData"; // Importera datan

export default function HomePage() {
  const router = useRouter();

  const handleResultClick = (item) => {
    console.log("Navigerar till:", item.link);
    router.push(item.link); // Navigerar till den valda sidan
  };
  return (
    <>
      <div className={styles.searchWrapper}>
        <SearchComponent
          placeholder="Sök på webbplatsen..."
          onResultClick={handleResultClick}
        />
      </div>

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
