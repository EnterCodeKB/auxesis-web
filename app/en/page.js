//app/en/page.js

"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "../en/components/Card";
import Middle from "../en/components/middleSection";
import styles from "../styles/Page.module.css";
import Finance from "../en/components/Finance";
import LatestNews from "../en/components/LatestNews";
import SearchComponent from "../en/components/SearchComponent.jsx";
import { newsItems } from "../en/data/newsItems";
import { searchData } from "../data/searchData";

export default function HomePage() {
  const router = useRouter();

  const handleResultClick = (item) => {
    console.log("Navigating to:", item.link);
    router.push(item.link);
  };

  return (
    <>
      {/* Search Component */}
      <SearchComponent
        placeholder="Search on website..."
        onResultClick={handleResultClick}
      />

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
      <Link href="/en">
        <button>EN</button>
      </Link>
    </div>
  );
};
