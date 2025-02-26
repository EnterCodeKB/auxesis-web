"use client";

import styles from "../../styles/InvestStyrelse.module.css";

export default function Styrelse() {
  return (
    <div className={styles.styrelse}>
      <h1 className={styles.h1styrelse}>Väl sammansatt styrelse och ledning</h1>

      <p className={styles.ptext}>
        Auxesis Pharma har en väl sammansatt styrelse och ledning som
        representerar olika kompetenser.
      </p>

      <div className={styles.menu}>
        <h2 className={styles.h2ul}>Auxesis Pharma ledningsgrupp</h2>
        <ul className={styles.ulList}>
          <li>Peter Åberg, VD, Läkemedelsutveckling och hållbarhet</li>

          <li>Roar Adelsten, vice VD</li>
          <li>Charlotta Larsson, sälj och marknad</li>
          <li>Lars Larsson, ekonomi och finans</li>
          <li>Rune Nordström, styrelseordförande, PR, HR och IR</li>
        </ul>

        <h2 className={styles.h2ul}>Auxesis Pharma styrelse</h2>
        <ul className={styles.ulList2}>
          <li>Roar Adelsten, vice VD och styrelseledamot</li>
          <li>Rune Nordström, styrelseordförande</li>
          <li>Charlotta Larsson, styrelseledamot</li>
        </ul>
      </div>
    </div>
  );
}
