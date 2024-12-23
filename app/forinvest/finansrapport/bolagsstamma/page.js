"use client";

import styles from "./index.module.css";

export default function Protokol() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.title}>Protokoll från Årsstämman</h2>
        <p className={styles.text}>
          Du kan se protokollet som en PDF-fil genom att klicka på knappen
          nedan.
        </p>
        <a
          href="/Finance/240618%20Protokoll%20a%CC%8Arssta%CC%88mma.pdf"
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
