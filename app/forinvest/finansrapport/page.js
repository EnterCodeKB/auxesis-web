"use client";
import styles from "../../styles/Finance.module.css";

export default function Protokol() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className={styles.section}>
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
      <section className={styles.section}>
        <h2>Årsredovisning 2023-12-31</h2>
        <p>
          Godkänd årsredovisning 2023-12-31 finns tillgänglig här. <br />
          Klicka på länken för att ladda ner rapporten.
        </p>
        <a
          href="/Finance/Arsredovisning-2023-559195-6486.pdf"
          download="Arsredovisning-2023-559195-6486.pdf"
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
