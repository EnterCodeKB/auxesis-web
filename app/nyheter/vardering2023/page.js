import styles from "../../styles/Info.module.css";

export default function Vardering2023() {
  return (
    <div className={styles.details}>
      <h1> Värdering AUXESIS 03/2023​</h1>

      <p>
        Scenario värdering av aktierna i AUXESIS PHARMA HOLDING AB (publ) inför
        lansering av bolagets smärtstillande produkt ASA.P® finns nu
        tillgänglig.
      </p>
      <div className={styles.articlesimage}>
        <img
          className={styles.image1}
          src="/Nyheter/1725048665825-5074de69-f526-43f9-a960-0ffbbfc8e8da_1.jpg"
          alt="Värdering"
        />
        <img
          className={styles.image1}
          src="/Nyheter/1725048665825-5074de69-f526-43f9-a960-0ffbbfc8e8da_3.jpg"
          alt="Värdering"
        />
      </div>
    </div>
  );
}
