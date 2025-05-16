"use client";
import styles from "../../styles/kallelse.module.css";

export default function Kallelse() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className={styles.kallelse}>
        <h2 className={styles.h2divdark}>
          AUXESIS PHARMA Kallelse till årsstämma 2025
        </h2>
        <a
          href="/Nyheter/kallelse/250617 AUXESIS Kallelse till årsstämma.pdf"
          download="AUXESIS Kallelse till årsstämma 2025.pdf"
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
