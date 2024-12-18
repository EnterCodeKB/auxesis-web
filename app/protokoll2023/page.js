"use client";
import styles from "../protokoll2023/index.module.css";

export default function Protokol() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className={styles.protokolSection}>
        <h2>Protokoll från Årsstämman 2023</h2>
        <p>
          Du kan ladda ner protokollet som en PDF-fil genom att klicka på
          knappen nedan.
        </p>
        <a
          href="/Finance/240618 Protokoll årsstämma.pdf"
          download="Protokoll-Arsstamma-Auxesis-2023.pdf"
          className={styles.downloadButton}
        >
          Ladda ner PDF
        </a>
      </section>
      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </>
  );
}
