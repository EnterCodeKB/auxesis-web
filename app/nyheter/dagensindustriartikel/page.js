"use client";
import styles from "./index.module.css";
import { newsItems } from "../../data/newsItems";
import Image from "next/image";

export default function DagensIndustri() {
  const item = newsItems.find((n) => n.slug === "dagensindustriartikel");

  // Fallbacks om något skulle saknas i datan
  const title = item?.title || "GBC pressmeddelande";
  const date = item?.subtitle || "2025/08/19";
  const link =
    item?.link ||
    "https://www.di.se/pressreleaser/2025/08/19/gbc-investerar-i-auxesis-pharma-holding-ab-et-83bd0ebe-9330-5299-abcb-fee1f65be7cd/";
  const heroSrc = item?.imageUrl?.trim() || "/Nyheter/dagensindustri.jpeg";

  return (
    <main className={styles.page}>
      {/* Innehållskort */}
      <section className={styles.container}>
        <article className={styles.card}>
          <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <time className={styles.date} dateTime={date.replaceAll("/", "-")}>
              {date}
            </time>
          </header>

          <p className={styles.lead}>
            Läs pressmeddelandet på Dagens industri.
          </p>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
            aria-label="Öppna artikeln på Dagens industri (öppnas i ny flik)"
          >
            Läs artikeln på Di
            <span className={styles.extIcon} aria-hidden="true">
              ↗
            </span>
          </a>

          <p className={styles.note}>Länken öppnas i en ny flik.</p>
        </article>
      </section>
    </main>
  );
}
