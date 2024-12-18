import styles from "../vardering2023/index.module.css";

export default function Vardering2023() {
  return (
    <section className={styles.section}>
      <div className={styles.divdardering}>
        <h2 className={styles.h2divdark}>Värderingsrapport 2024-02-13</h2>
        <a
          href="/Finance/Värdering 2023.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadButton}
        >
          Visa här
        </a>
      </div>
    </section>
  );
}
