"use client";
import styles from "./index.module.css";

export default function Smestatus() {
  return (
    <div className={styles.details}>
      <h1>NEW SME STATUS FROM EMA GRANTED ​</h1>
      <h4>2024-01-23</h4>
      <p className={styles.ptext}>
        {" "}
        On January 23, 2024, Auxesis Pharma Holding AB had its application
        approved and was granted SME status as a “Micro/Linked” company by the
        European Medicines Agency (EMA). A granted SME status from EMA provides
        the company with easier access to regulatory, financial, and
        administrative support from EMA throughout all stages of product
        development. The SME status can be extended one year at a time, provided
        that the company submits its resource flow data for the previous
        financial year to EMA.
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
