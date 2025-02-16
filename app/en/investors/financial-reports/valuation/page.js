"use client";

import styles from "./vaerdering.module.css";
import BackArrow from "../../../components/BackArrow";

export default function Vaerdering() {
  return (
    <>
      <section className={styles.vaerdering}>
        <BackArrow mainLink="/forinvest/finansrapport" label="Finansrapport" />

        <h2 className={styles.h2divdark}>
          EN Värderingsrapport <br /> 2024-02-13
        </h2>
        <a
          href="/Finance/Värdering 2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadButton}
        >
          Visa här
        </a>
      </section>
    </>
  );
}
