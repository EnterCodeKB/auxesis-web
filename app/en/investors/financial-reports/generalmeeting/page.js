"use client";

import styles from "./generalmeeting.module.css";
import BackArrow from "../../../components/BackArrow";

export default function Protokol() {
  return (
    <>
      <BackArrow mainLink="/forinvest/finansrapport" label="Finansrapport" />

      <section className={styles.container}>
        <BackArrow mainLink="/forinvest/finansrapport" label="Finansrapport" />

        <h2 className={styles.h2divdark}>
          Minutes from the Annual General Meeting
        </h2>
        <p className={styles.text}>
          You can view the minutes as a PDF file by clicking the button below.
        </p>
        <a
          href="/Finance/240618-protokoll-arsstamma.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadButton}
        >
          View PDF
        </a>
      </section>
    </>
  );
}
