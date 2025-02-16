"use client";

import styles from "./finansrapport.module.css";
import Link from "next/link";

export default function ProFinanceRapport() {
  return (
    <>
      <section className={styles.frapportSection}>
        <h1 className={styles.h1}>EN Finansiella rapporter</h1>
        <div className={styles.buttonGrid}>
          <Link href="/forinvest/finansrapport/bolagsstamma">
            <div className={styles.imgFinanceButton}>
              <img
                className={styles.icons}
                src="/Finance/bolagsordning.png"
                alt="Bolagsordning"
              />
              <span className={styles.buttonText}>Bolagsstämma</span>
            </div>
          </Link>

          <Link href="/forinvest/finansrapport/vaerdering">
            <div className={styles.imgFinanceButton}>
              <img
                className={styles.icons}
                src="/Finance/vardering.png"
                alt="Värdering"
              />
              <span className={styles.buttonText}>Värdering</span>
            </div>
          </Link>

          <Link href="/forinvest/finansrapport/arsredovisning">
            <div className={styles.imgFinanceButton}>
              <img
                className={styles.icons}
                src="/Finance/protokol.png"
                alt="Årsredovisning"
              />
              <span className={styles.buttonText}>Årsredovisning</span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
