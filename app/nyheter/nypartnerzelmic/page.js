import styles from "../../styles/Info.module.css";

export default function Zelmic() {
  return (
    <div className={styles.details}>
      <h1 className={styles.h1div}>
        {" "}
        När nu Auxesis Pharma ska in i testproduktionsfasen så har vi nu ingått
        partnerskap med Zelmic AB.​
      </h1>
      <h4>2024-07-10</h4>
      <div className={styles.ptext}>
        <p>
          Zelmic är en erfaren, privatägd CRO (Contract Research Organisation)
          och CDMO (Contract Development and Manufacturing Organisation) som
          helt fokuserar på utvecklingen av aktuella och transdermala
          farmaceutiska formuleringar. Zelmic är belägna i Lund, Sverige, ett av
          Europas främsta vetenskapscentrum och hem till många life
          science-företag, MAX IV-laboratoriet och FN:s nylanserade UNOPS Global
          Innovation Centre. Detta gör Zelmics dedikerade team och
          specialiserade laboratorium perfekt beläget för att hjälpa kunderna
          att lyckas.
        </p>
        <p>
          Zelmics experter är välutbildade inom aktuell och transdermal leverans
          och högkvalificerade inom formuleringsutveckling, analytisk kemi och
          hantering av immateriella rättigheter, allt i syfte att stärka kundens
          FoU-kapacitet och minimera kundens risk.
        </p>
      </div>
    </div>
  );
}
