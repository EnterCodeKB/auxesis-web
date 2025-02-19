"use client";
import styles from "./index.module.css";

export default function Kallelse() {
  return (
    <>
      <section className={styles.kallelse}>
        <h2 className={styles.h2divdark}>
          AUXESIS PHARMA Notice of Annual General Meeting 2024{" "}
        </h2>
        <a
          href="/Nyheter/kallelse/240618 AUXESIS Kallelse till årsstämma.pdf"
          download="AUXESIS Kallelse till årsstämma.pdf"
          className={styles.downloadButton}
        >
          Download Here
        </a>
      </section>
    </>
  );
}
