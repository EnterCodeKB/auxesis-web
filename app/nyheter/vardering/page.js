import styles from "../../styles/Info.module.css";

export default function Vardering() {
  return (
    <div className={styles.details}>
      <h1> Värdering AUXESIS​</h1>
      <h4>22024-03-01</h4>
      <p>
        Fintegrity AB - Scenario One Pager värdering av aktierna i AUXESIS
        PHARMA HOLDING AB (publ) inför lansering av bolagets smärtstillande
        produkt ASA.P® finns nu tillgänglig.
      </p>
      <div className={styles.articlesimage3}>
        <img
          className={styles.image1}
          src="/Nyheter/värdering.jpeg"
          alt="Värdering"
        />
      </div>
    </div>
  );
}
