"use client";

import styles from "../../styles/ProduktPatent.module.css";
import BackArrow from "../../components/BackArrow";
import HeroPatent from "../../components/HeroSectionPatent";

export default function Patent() {
  return (
    <>
      <HeroPatent />
      <section className={styles.patentsection}>
        <BackArrow mainLink="/produkter/historik" label="Produkter" />

        <h1>Patent söks i flera länder</h1>
        <p className={styles.ptext}>
          Auxesis Pharma lämnade den 29 november 2023 in en svensk patentansökan
          till Patent- och registreringsverket (PRV) för uppfinningen ASA.P®. Då
          påbörjades patentprocessen enligt internationella regler och rutiner.
          Processen omfattar översiktligt sju steg i två faser:
        </p>

        <ol className={styles.olList}>
          <h2 className={styles.fasdiv}>Fas 1</h2>
          <li>
            Svensk patentansökan till PRV (Local filing application) – månad 0.
          </li>
          <li>
            Internationell patententansökan (PCT filing application) – månad 12.
          </li>
          <li>
            Internationell sökrapport (International search report) med
            skriftligt utlåtande – månad 16.
          </li>
          <li>
            Publicering av patentansökan (International Publication) – månad 18.
          </li>

          <h2 className={styles.fasdiv}>Fas 2</h2>

          <li>
            Begäran förberedande patentbarhetsprövning (Demand for International
            Preliminary Examination) – månad 22.
          </li>
          <li>
            Preliminär bedömning av patentbarheten (Preliminary Examination and
            Patentability Report) – månad 28.
          </li>
          <li>
            Fullföljande av patentansökningar i utvalda länder (National Phase)
            – månad 30.
          </li>
        </ol>
        <p className={styles.ptext}>
          Patentprocessens första 30 månader syftar till att skapa en bra
          ansökan med så stora möjligheter som möjligt till framtida
          registrering och godkända patent i utvalda länder.
        </p>
        <div>
          <img
            className={styles.imgpatent}
            src="/produkter/produktutveckling2.png"
            alt="Produktutveckling Auxesis"
          />
        </div>
      </section>
    </>
  );
}
