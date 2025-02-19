"use client";
import styles from "./index.module.css";

export default function Vardering() {
  return (
    <div className={styles.details}>
      <h1> Valuation of AUXESIS ​</h1>
      <h4>2024-03-01</h4>
      <p className={styles.ptext}>
        The Fintegrity AB - Scenario One Pager valuation of shares in AUXESIS
        PHARMA HOLDING AB (publ), conducted in preparation for the launch of the
        company’s pain relief product ASA.P®, is now available.
      </p>
      <section className={styles.section}>
        <h2 className={styles.h2divdark}>Valuation Report 2024-02-13</h2>
        <a
          href="/Finance/Värdering 2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadButton}
        >
          View here
        </a>
      </section>
    </div>
  );
}
