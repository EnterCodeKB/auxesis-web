"use client";
import styles from "../../../../styles/Finance.module.css";
import BackArrow from "../../../components/BackArrow";

export default function Protokol() {
  return (
    <>
      <section className={styles.section}>
        <BackArrow mainLink="/forinvest/finansrapport" label="Finansrapport" />

        <h2 className={styles.h2divdark}>EN Protokoll från årsstämman</h2>
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
        <h2 className={styles.h2divdark}>Årsredovisning 2023-12-31</h2>
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

      <section className={styles.section}>
        <h2 className={styles.h2divdark}>Årsredovisning 2022-12-31</h2>
        <p>
          Godkänd årsredovisning 2022-12-31 finns tillgänglig här. <br />
          Klicka på länken för att ladda ner rapporten.
        </p>
        <a
          href="/Finance/2022-Arsredovisning-Auxesis-Pharma-Holding-AB-2022-signed.pdf"
          download="Arsredovisning-Auxesis-Pharma-Holding-AB-2022-signed.pdf"
          className={styles.downloadButton}
        >
          Ladda ner PDF
        </a>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2divdark}>Revisionsberättelse 2023</h2>
        <p>
          Revisionsberättelse 2023 för AUXESIS PHARMA HOLDING AB (publ) med
          organisationsnummer 559195-6486.
        </p>
        <a
          href="/Finance/23ECB23C-11F8-441B-BA8C-73867BC9DE37.jpeg"
          download="Revisionsberättelse"
          className={styles.downloadButton}
        >
          Ladda ner här
        </a>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2divdark}>Bolagsordning</h2>
        <p>Bolagsordning AUXESIS PHARMA HOLDING AB (publ)</p>
        <a
          href="/Finance/23ECB23C-11F8-441B-BA8C-73867BC9DE37.jpeg"
          download="Revisionsberättelse"
          className={styles.downloadButton}
        >
          Ladda ner här
        </a>
      </section>
    </>
  );
}
