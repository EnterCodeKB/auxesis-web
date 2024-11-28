import React from "react";
import styles from "../styles/Innovation.module.css";

const Innovation = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section1}>
        <h1 className={styles.divh1}>
          Ständig utveckling och bestående förändring
        </h1>
        <p className={styles.ptext}>
          Innovation ligger i vårt DNA. Auxesis verksamhet startade med en
          glödande övertygelse om att vilja upptäcka något nytt och nyttigt för
          mänskligheten. Det blev startskottet för en omdanande forskningsinsats
          som tog flera år och flera tusen försök innan vi lyckades nå vårt mål:
          att stabilisera Acetylsalicylsyra i flytande form för att kunna
          applicera den på huden.
        </p>
      </div>
      <div className={styles.section2}>
        <h2 className={styles.divh2}>Naturlig innovativ kultur</h2>
        <p className={styles.ptext}>
          Baserat på upptäckten har en helt ny koncern bildats och vi har alla
          förutsättningar att låta vår verksamhet växa vidare utanför Sveriges
          gränser. Vi har en naturlig innovativ affärskultur där idéer föds och
          formas, och där det är högt i tak. Samtidigt vill vi göra gott och där
          knyter vår hållbarhetsstrategi an till vår innovationskultur. En god
          innovation är en god affär bara om vi samtidigt gör gott för människa,
          djur och planet.
        </p>
      </div>
    </section>
  );
};

export default Innovation;
