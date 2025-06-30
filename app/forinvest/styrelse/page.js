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
          <p>Peter Åberg, VD, Läkemedelsutveckling och hållbarhet</p>

          <p>Roar Adelsten, vice VD</p>
          <p>Charlotta Larsson, sälj och marknad</p>
          <p>Lars Larsson, ekonomi och finans</p>
        </ul>

        <h2 className={styles.h2ul}>Auxesis Pharma styrelse</h2>
        <ul className={styles.ulList2}>
          <p>Roar Adelsten, vice VD och styrelseledamot</p>
          <p>Magnus Larsson, styrelseordförande</p>
          <p>Rune Nordström, styrelseledamot</p>

          <p>Charlotta Larsson, styrelseledamot</p>
        </ul>
      </div>
    </div>
  );
}
