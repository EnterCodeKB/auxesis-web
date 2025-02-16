"use client";
import styles from "./index.module.css";

export default function Kallelse() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className={styles.kallelse}>
        <h2 className={styles.h2divdark}>
          AUXESIS PHARMA Kallelse till årsstämma 2024
        </h2>
        <a
          href="/Nyheter/kallelse/240618 AUXESIS Kallelse till årsstämma.pdf"
          download="AUXESIS Kallelse till årsstämma.pdf"
          className={styles.downloadButton}
        >
          Ladda ner här
        </a>
      </section>

      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </>
  );
}
