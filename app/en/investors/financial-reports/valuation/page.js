"use client";

import styles from "./valuation.module.css";
import BackArrow from "../../../components/BackArrow";

export default function Vaerdering() {
  return (
    <>
      <section className={styles.vaerdering}>
        <BackArrow />

        <h2 className={styles.h2divdark}>
          Valuation Report <br /> 2024-02-13
        </h2>
        <a
          href="/Finance/Värdering 2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadButton}
        >
          View here
        </a>
      </section>
    </>
  );
}
