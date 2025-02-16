import React from "react";
import styles from "../../styles/heroAgenda.module.css";

export default function HeroPr() {
  return (
    <div className={styles.heroSection}>
      {/* Första sektionen med bilden */}
      <div className={styles.div13}>
        <img
          src="/agenda/chema4.png"
          alt="Ekologisk hållbarhet - hållbar innovation"
          className={styles.responsiveImage}
        />
      </div>

      {/* Text och innehåll bredvid bilden */}
      <div className={styles.div14}>
        <div className={styles.column}>
          <div className={styles.div15}>
            <div className={styles.div18}></div>
          </div>
        </div>
        <div className={styles.column2}></div>
      </div>

      {/* Extra sektion (är tom, kan tas bort om ej används) */}
      {/* <div className={styles.div000}></div> */}
    </div>
  );
}
