"use client";

import styles from "../../../styles/Finance.module.css";

export default function Vaerdering() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.h2divdark}>Värderingsrapport 2024-02-13</h2>
        <a
          href="/Finance/Värdering 2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadButton}
        >
          Visa här
        </a>
      </section>

      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </>
  );
}
