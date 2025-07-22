"use client";
import styles from "../../styles/Nyanstalld.module.css";

export default function NyOrdf() {
  return (
    <div className={styles.details}>
      <h1>
        Ny ordförande i <br></br> Auxesis Pharma Holding AB (publ)
      </h1>
      <h4>2025-06-17</h4>
      <p className={styles.ptext}>
        Vi har glädjen att meddela att Magnus Larsson tillträdde som
        styrelseordförande i Auxesis Pharma Holding AB (publ) den 17 juni 2025.
        Magnus är ekonom från Stockholms universitet med inriktning på
        redovisning och finansiering. Han har en lång och gedigen karriär bakom
        sig som entreprenör, företagsledare och strateg, och har sedan
        1980-talet haft ledande roller inom IT-branschen.
      </p>
      <p className={styles.ptext}>
        Han har grundat flera företag, varit koncernchef och ordförande i både
        börsnoterade och privata bolag, samt verkat som konsult inom
        ekonomistyrning. Magnus har även haft ett stort engagemang i Svenskt
        Näringsliv, där han haft ett flertal förtroendeuppdrag.
      </p>
      <p className={styles.ptext}>
        Med sin omfattande erfarenhet och sitt affärsfokus stärker Magnus
        Auxesis styrelse och blir en viktig nyckelperson i bolagets fortsatta
        utveckling.
      </p>
      <h4>
        <strong>Varmt välkommen, Magnus!</strong>
      </h4>

      <div className={styles.articlesimage1}>
        <img
          className={styles.image1}
          src="/team/magnus2.png"
          alt="Magnus Larsson"
        />
      </div>
    </div>
  );
}
