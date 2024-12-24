"use client";

import styles from "../bolagsstamma/bolags.module.css";

export default function Protokol() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Protokoll från Årsstämman</h2>
        <p className={styles.text}>
          Du kan se protokollet som en PDF-fil genom att klicka på knappen
          nedan.
        </p>
        <a
          href="/Finance/240618-protokoll-arsstamma.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadButton}
        >
          Visa PDF
        </a>
      </div>

      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </>
  );
}
