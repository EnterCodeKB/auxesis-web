"use client";
import styles from "../patentasokanregistrerad/index.module.css";

export default function Patent() {
  return (
    <div className={styles.details}>
      <h1 className={styles.h1div}>
        Patentansökan är nu officiellt registrerad!​
      </h1>
      <h4>2024-07-11</h4>
      <div className={styles.ptext}>
        <p>
          Vi är glada att meddela att AUXESIS PHARMA HOLDING AB (publ) har
          framgångsrikt lämnat in ansökan för sitt allra första patent med ASA.P
          - formuleringen.
        </p>
        <br />
        <p>
          Ett stort tack till EIP-Patent Office för det enastående arbete som
          har lagts ned i denna process! <br /> Denna milstolpe är ett bevis på
          vårt dedikerade team och deras hårda arbete.
        </p>
        <br />
        <p>
          Vi ser fram emot framtida framgångar och är tacksamma för det stöd vi
          har fått på vägen. Tack igen till alla inblandade för att göra denna
          resa möjlig och spännande!
        </p>
      </div>
    </div>
  );
}
