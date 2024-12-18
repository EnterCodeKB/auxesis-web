"use client";

import styles from "../../../styles/Finance.module.css";

export default function Protokol() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.h2divdark}>Protokoll från Årsstämman</h2>
        <p>
          Du kan visa protokollet som en PDF-fil genom att klicka på knappen
          nedan.
        </p>
        <a
          href="/Finance/240618 Protokoll årsstämma.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadButton}
        >
          Visa PDF
        </a>
      </section>

      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </>
  );
}
