"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/Spotlights.module.css";

export default function SpotlightsEn() {
  const router = useRouter();

  const newsItems = [
    {
      title: "Nyhet 1",
      description:
        "Auxesis MedTech AB blev registrerat 2024-05-23 och ägs av Auxesis Pharma Holding AB.",
      imageUrl: "./Nyheter/Skärmavbild 2024-07-09 kl. 10.54.13.png",
      Url: "https://auxesis.se/auxesis-medtech-ab/",
    },
    {
      title: "Nyhet 2",
      description:
        "Värdering AUXESIS 03/2024 Fintegrity AB – Scenario One Pager värdering av aktierna i AUXESIS PHARMA HOLDING AB (publ).",
      imageUrl: "./Nyheter/Skärmavbild 2024-07-09 kl. 11.04.26.png",
      Url: "https://auxesis.se/vardering-auxesis-03-2024/",
    },
    {
      title: "Nyhet 3",
      description:
        "Auxesis Pharma Holding AB har den 2024-01-23 fått sin ansökan godkänd och erhållit SME status som ett ”Micro/Linked” bolag från Europeiska läkemedelsmyndigheten (EMA).",
      imageUrl: "./Nyheter/Skärmavbild 2024-07-09 kl. 11.11.16.png",
      Url: "https://auxesis.se/european-medicines-agency-sme-status/",
    },
    {
      title: "Nyhet 4",
      description: "Description for news item 4.",
      imageUrl: "./Nyheter/Skärmavbild 2024-07-09 kl. 11.11.16.png",
      Url: "#",
    },
    {
      title: "Nyhet 5",
      description: "Description for news item 5.",
      imageUrl: "./Nyheter/Skärmavbild 2024-07-09 kl. 11.11.16.png",
      Url: "#",
    },
    {
      title: "Nyhet 6",
      description: "Description for news item 6.",
      imageUrl: "./Nyheter/Skärmavbild 2024-07-09 kl. 11.11.16.png",
      Url: "#",
    },
    {
      title: "Nyhet 7",
      description: "Description for news item 7.",
      imageUrl: "./Nyheter/Skärmavbild 2024-07-09 kl. 11.11.16.png",
      Url: "#",
    },
    {
      title: "Nyhet 8",
      description: "Description for news item 8.",
      imageUrl: "./Nyheter/Skärmavbild 2024-07-09 kl. 11.11.16.png",
      Url: "#",
    },
    {
      title: "Nyhet 9",
      description: "Description for news item 9.",
      imageUrl: "./Nyheter/Skärmavbild 2024-07-09 kl. 11.11.16.png",
      Url: "#",
    },
    {
      title: "Nyhet 10",
      description: "Description for news item 10.",
      imageUrl: "./Nyheter/Skärmavbild 2024-07-09 kl. 11.11.16.png",
      Url: "#",
    },
    {
      title: "Nyhet 11",
      description: "Description for news item 11.",
      imageUrl: "./Nyheter/Skärmavbild 2024-07-09 kl. 11.11.16.png",
      Url: "#",
    },
    {
      title: "Nyhet 12",
      description: "Description for news item 12.",
      imageUrl: "./Nyheter/Skärmavbild 2024-07-09 kl. 11.11.16.png",
      Url: "#",
    },
  ];

  const handleReadMoreClick = () => {
    router.push("/allanyheter");
  };

  return (
    <ErrorBoundary>
      <div className={styles.spotlights}>
        <h2 className={styles.title}>Nyheter</h2>
        <div className={styles.newsContainer}>
          {newsItems.map((item, index) => (
            <div key={index} className={styles.newsItem}>
              <a href={item.Url} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className={styles.image}
                />
              </a>
              <div className={styles.content}>
                <h3 className={styles.newsTitle}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.readMoreButton} onClick={handleReadMoreClick}>
          Läs mer
        </button>
      </div>
    </ErrorBoundary>
  );
}
