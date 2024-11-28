"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Investorer.module.css";

export default function Investorer() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  return (
    <section className={styles.investorPage}>
      <h1>För Investorer</h1>
      <div className={styles.dropdown}>
        <div
          className={styles.mainLink}
          onClick={() => toggleDropdown("investorInfo")}
        >
          Mer information
        </div>
        {activeDropdown === "investorInfo" && (
          <div className={styles.dropdownContent}>
            <Link href="/omoss/investorer/arsredovisningar">
              <div className={styles.subLink}>Årsredovisningar</div>
            </Link>
            <Link href="/omoss/investorer/finansiella-rapporter">
              <div className={styles.subLink}>Finansiella rapporter</div>
            </Link>
            <Link href="/omoss/investorer/styrelse">
              <div className={styles.subLink}>Styrelse och ledning</div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
