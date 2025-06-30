"use client";

import styles from "../../../styles/InvestStyrelse.module.css";

export default function Styrelse() {
  return (
    <div className={styles.styrelse}>
      <h1 className={styles.h1styrelse}>Well-Composed Board and Leadership</h1>

      <p className={styles.ptext}>
        Auxesis Pharma has a well-structured board and leadership team, bringing
        together diverse expertise.
      </p>

      <div className={styles.menu}>
        <h2 className={styles.h2ul}>Auxesis Pharma Executive Management</h2>
        <ul className={styles.ulList}>
          <li>
            Peter Åberg, CEO and Pharmaceutical Development & Sustainability
          </li>
          <li>Roar Adelsten, Vice President</li>
          <li>Charlotta Larsson, Sales & Marketing</li>
          <li>Lars Larsson, Finance & Economy</li>
        </ul>

        <h2 className={styles.h2ul}>Auxesis Pharma Board of Directors</h2>
        <ul className={styles.ulList2}>
          <li>Roar Adelsten, Vice President och Board Member</li>
          <li>Rune Nordström, Board Member</li>
          <li>Charlotta Larsson, Board Member</li>
        </ul>
      </div>
    </div>
  );
}
