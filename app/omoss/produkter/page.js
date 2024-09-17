"use client";
import styles from "../../styles/Omoss.module.css";

export default function Produkt() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.produkt}>
        <h3 className={styles.h3}>
          Vi presenterar ASA.P® Den ultimata lösningen för atopisk lindring
        </h3>
        <p className={styles.ptext}>
          Namnet ASA.P® är namnet på Auxesis Pharmas första produkt och är en
          kombination av substanserna i läkemedlet samt innebörden av
          förkortningen ASAP. Historien bakom namnet är:
        </p>
        <ul className={styles.ulList}>
          <li>
            En av de tre aktiva farmaceutiska ingredienserna är
            Acetylsalicylsyra (ASA).
          </li>
          <li>
            Produkten erbjuder snabb smärtlindring på hud inom fyra till sex
            minuter (P som i Pain).
          </li>
          <li>
            Namnet förstärks av begreppet ASAP, en förkortning för As Soon As
            Possible.
          </li>
        </ul>
        <p className={styles.ptext}>
          ASA.P® är ett registrerat varumärke i klass 5 – smärtstillande
          läkemedel för människor – i Sverige, EU, USA, Kina och Storbritannien
          med pågående ansökan om varumärkesregistrering på den globala
          marknaden i över 30 länder. Vi har godkända ansökningar i 29 länder
          (juli 2024).
        </p>
        <h3 className={styles.h3}>Den banbrytande upptäckten bakom ASA.P®</h3>
        <p className={styles.ptext}>
          Acetylsalicylsyra (ASA) är en av de mest välkända substanserna för
          smärtlindring och har använts i läkemedel sedan slutet av 1800-talet.
        </p>
        <p className={styles.ptext}>
          De flesta känner till läkemedel som Treo, Bamyl och Aspirin.
        </p>
        <p className={styles.ptext}>
          Efter 10 års forskning och mer än 5 000 försök har Auxesis Pharma
          tillsammans med professor Moustapha Hassan och hans team på Karolinska
          Institutet i Stockholm, lyckats göra det som ingen annan har gjort
          tidigare: Att stabilisera ASA i flytande form och i kombination med
          andra godkända läkemedel. Med ASA i flytande form finns möjligheter
          att utveckla helt nya beredningsformer som enkelt kan appliceras
          direkt på huden och blockera smärtsignalen till hjärnan inom 4-6
          minuter. Genom att tillsätta två andra farmaceutiska aktiva substanser
          erhålls en långtidseffekt.
        </p>
        <p className={styles.ptext}>
          Smärtan kommer inte tillbaka. Baserat på ett eget patent är Auxesis
          Pharma först med att utveckla innovativa och tillgängliga läkemedel
          som inte bara lindrar, utan snabbt tar bort smärta och irritation på
          huden hos både människor och djur.
        </p>
        <img
          className={styles.imgprodukt}
          src="/produkter/asap-swab.jpg"
          alt="ASA.P produkt"
        />
      </div>
      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </>
  );
}
