import styles from "../../styles/Info.module.css";

export default function Vardering() {
  return (
    <div className={styles.details}>
      <h1> Värdering AUXESIS​</h1>
      <h4>22024-03-01</h4>
      <p>
        Fintegrity AB - Scenario One Pager värdering av aktierna i AUXESIS
        PHARMA HOLDING AB (publ) inför lansering av bolagets smärtstillande
        produkt ASA.P® finns nu tillgänglig.
      </p>
      <section className={styles.section}>
        <h2 className={styles.h2divdark}>Värderingsrapport 2024-02-13</h2>
        <a
          href="/Finance/Värdering 2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadButton}
        >
          Visa här
        </a>
      </section>
    </div>
  );
}
