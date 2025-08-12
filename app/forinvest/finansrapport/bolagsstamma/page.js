"use client";

import styles from "../bolagsstamma/bolags.module.css";
import BackArrow from "../../../components/BackArrow";

export default function Protokol() {
  return (
    <>
      <BackArrow />
      <section className={styles.container}>
        <BackArrow />
        <h2 className={styles.h2divdark}>Protokoll från årsstämman</h2>
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
      </section>
    </>
  );
}
