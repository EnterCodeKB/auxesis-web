"use client";

import styles from "../../../../styles/Finance.module.css";
import BackArrow from "../../../components/BackArrow";

export default function Protokol() {
  return (
    <>
      <div className={styles.redovdiv}>
        <BackArrow mainLink="/forinvest/finansrapport" label="Finansrapport" />

        <section className={styles.section}>
          <h2 className={styles.h2divdark}>EN Årsredovisning 2023-12-31</h2>
          <p className={styles.redovptext}>
            Godkänd årsredovisning 2023-12-31 finns tillgänglig här. Klicka på
            länken för att visa rapporten.
          </p>
          <a
            href="/Finance/Arsredovisning-2023-559195-6486.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}
          >
            Visa PDF
          </a>
        </section>
        <section className={styles.section}>
          <h2 className={styles.h2divdark}>Revisionsberättelse 2023</h2>
          <p className={styles.redovptext}>
            Revisionsberättelse 2023 för AUXESIS PHARMA HOLDING AB (publ) med
            organisationsnummer 559195-6486.
          </p>
          <a
            href="/Finance/23ECB23C-11F8-441B-BA8C-73867BC9DE37.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}
          >
            Visa här
          </a>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2divdark}>Årsredovisning 2022-12-31</h2>
          <p className={styles.redovptext}>
            Godkänd årsredovisning 2022-12-31 finns tillgänglig här. Klicka på
            länken för att visa rapporten.
          </p>
          <a
            href="/Finance/2022-Arsredovisning-Auxesis-Pharma-Holding-AB-2022-signed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}
          >
            Visa PDF
          </a>
        </section>
        {/* 
        <section className={styles.section}>
          <h2 className={styles.h2divdark}>Revisionsberättelse 2022</h2>
          <p className={styles.redovptext}>
            Revisionsberättelse 2023 för AUXESIS PHARMA HOLDING AB (publ) med
            organisationsnummer 559195-6486.
          </p>
          <a
            href="/Finance/Protokoll-Arsstamma-Auxesis-2023/Revision 2022.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}
          >
            Visa här
          </a>
        </section>*/}
      </div>
    </>
  );
}
