"use client";
import styles from "../smestatus/index.module.css";

export default function Smestatus() {
  return (
    <div className={styles.details}>
      <h1>NY SME STATUS FRÅN EMA BEVILJAD​</h1>
      <h4>2024-01-23</h4>
      <p className={styles.ptext}>
        Auxesis Pharma Holding AB har den 2024-01-23 fått sin ansökan godkänd
        och erhållit SME status som ett ”Micro/Linked” bolag från Europeiska
        läkemedelsmyndigheten (EMA). En beviljad SME status från EMA betyder att
        bolaget får lättare tillgång till regulatorisk, finansiell och
        administrativ assistans från EMA inom utveckling av företagets produkter
        under alla steg. SME statusen kan förlängas med ett år åt gången så fort
        uppgifter om bolagets resursflöde för föregående verksamhetsår har
        rapporterats till EMA.
      </p>
      <div className={styles.articlesimage1}>
        <img
          className={styles.image1}
          src="/Nyheter/sme.jpeg"
          alt="Smestatus"
        />
      </div>
    </div>
  );
}
