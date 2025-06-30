import React from "react";
import styles from "./PressKontakt.module.css";

const PressKontakt = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Presskontakt</h1>
      <p className={styles.intro}>
        Välkommen till vår presskontakt. Här hittar du information för
        journalister, media och andra intressenter som vill komma i kontakt med
        oss angående pressfrågor och företagsnyheter.
      </p>

      {/* Kontaktuppgifter */}
      <div className={styles.contactBox}>
        <h2 className={styles.subHeading}>Presskontakt</h2>
        <p className={styles.ptext}>
          <strong>Namn:</strong>
          &nbsp; Peter Åberg
        </p>
        <p className={styles.ptext}>
          <strong>E-post:</strong>{" "}
          <a href="mailto:peter.aberg@auxesispharma.se" className={styles.link}>
            peter.aberg@auxesispharma.se
          </a>
        </p>
        <p className={styles.ptext}>
          <strong>Mobil:</strong>{" "}
          <a href="tel:+46706815050" className={styles.link}>
            +46 (0)70 681 50 50
          </a>
        </p>
      </div>

      {/* Pressmeddelanden */}
      <div className={styles.section}>
        <h2 className={styles.subHeading}>Senaste pressmeddelanden</h2>
        <p className={styles.ptext}>
          För våra senaste pressmeddelanden, besök vår{" "}
          <a href="/nyheter" className={styles.link}>
            Nyhetssida
          </a>
          .
        </p>
      </div>

      {/* Ladda ner pressmaterial 
      <div className={styles.section}>
        <h2 className={styles.subHeading}>Pressmaterial</h2>
        <p>
          Ladda ner högupplösta bilder, logotyper och företagsbeskrivningar i
          vårt{" "}
          <a href="#" className={styles.link}>
            presskit
          </a>
          .
        </p>
      </div>

      {/* Sociala medier 
      <div className={styles.section}>
        <h2 className={styles.subHeading}>Följ oss</h2>
        <p>
          Följ oss på{" "}
          <a href="#" className={styles.link}>
            LinkedIn
          </a>{" "}
          och{" "}
          <a href="#" className={styles.link}>
            Twitter
          </a>{" "}
          för de senaste uppdateringarna.
        </p>
      </div>*/}
    </div>
  );
};

export default PressKontakt;
