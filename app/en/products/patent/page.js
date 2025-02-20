"use client";

import styles from "../../../styles/ProduktPatent.module.css";
import BackArrow from "../../components/BackArrow";
import HeroPatent from "../../../en/components/HeroSectionPatent";

export default function Patent() {
  return (
    <>
      <HeroPatent />
      <section className={styles.patentsection}>
        <BackArrow mainLink="/en/products/history" label="Products" />

        <h1>Patent Applications in Multiple Countries</h1>
        <p className={styles.ptext}>
          On November 29, 2023, Auxesis Pharma submitted a Swedish patent
          application for ASA.P® to the Swedish Patent and Registration Office
          (PRV), initiating the patent process in accordance with international
          regulations and procedures. <br /> The process consists of seven key
          steps across two phases:
        </p>

        <ol className={styles.olList}>
          <h2 className={styles.fasdiv}>Phase 1</h2>
          <li>
            Swedish Patent Application (Local Filing Application) – Month 0
          </li>
          <li>
            International Patent Application (PCT Filing Application) – Month 12
          </li>
          <li>
            Internationell sökrapport (International search report) med
            skriftligt utlåtande – månad 16.
          </li>
          <li>
            Publication of the Patent Application (International Publication) –
            Month 18{" "}
          </li>

          <h2 className={styles.fasdiv}>Phase 2</h2>

          <li>
            Request for Preliminary Patentability Examination (Demand for
            International Preliminary Examination) – Month 22
          </li>
          <li>Preliminary Examination and Patentability Report – Month 28</li>
          <li>
            Finalization of National Patent Applications (National Phase) –
            Month 30
          </li>
        </ol>
        <p className={styles.ptext}>
          The first 30 months of the patent process are dedicated to developing
          a strong application with the best possible prospects for future
          registration and patent approvals in selected countries.
        </p>
      </section>
    </>
  );
}
