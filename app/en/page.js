//app/en/page.js

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Card from "./components/Card";
import Middle from "./components/middleSection";
import Finance from "./components/Finance";
import LatestNews from "./components/LatestNews";
import SearchComponent from "./components/SearchComponent.jsx";

import styles from "@/styles/Page.module.css"; // använder @ för konsekvens
import { newsItems } from "./data/newsItems";
import { searchData } from "../data/searchData"; // svensk data kan vara gemensam

export default function HomePage() {
  const router = useRouter();

  const handleResultClick = (item) => {
    console.log("Navigating to:", item.link);
    router.push(item.link);
  };

  return (
    <>
      <div className={styles.searchWrapper}>
        <SearchComponent
          placeholder="Search the site..."
          onResultClick={handleResultClick}
          searchData={searchData} // om du använder det i SearchComponent
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
