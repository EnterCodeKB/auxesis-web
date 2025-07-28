// app/components/ClientHome.jsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Card from "./Card";
import Middle from "./middleSection";
import styles from "../styles/Page.module.css";
import Finance from "./Finance";
import LatestNews from "./LatestNews";
import SearchComponent from "./SearchComponent";
import { newsItems } from "../data/newsItems";
import { searchData } from "../data/searchData";

export default function ClientHome() {
  const router = useRouter();

  const handleResultClick = (item) => {
    console.log("Navigerar till:", item.link);
    router.push(item.link);
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
