"use client";

import React from "react";
import styles from "../../styles/animatedText.module.css";

export default function AnimatedText() {
  return (
    <div className={styles.animatedText}>
      <h2 className={styles.divh2}>
        AN INNOVATIVE
        <br /> PHARMACEUTICAL COMPANY
      </h2>
      <h2 className={styles.h2}>WITH GROUNDBREAKING PATENTS</h2>
    </div>
  );
}
