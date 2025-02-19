"use client";

import styles from "./financialreport.module.css";
import Link from "next/link";

export default function ProFinanceRapport() {
  return (
    <>
      <section className={styles.frapportSection}>
        <h1 className={styles.h1}>Financial Reports</h1>
        <div className={styles.buttonGrid}>
          <Link href="/en/investors/financial-reports/generalmeeting">
            <div className={styles.imgFinanceButton}>
              <img
                className={styles.icons}
                src="/Finance/bolagsordning.png"
                alt="Bolagsordning"
              />
              <span className={styles.buttonText}>General Meeting</span>
            </div>
          </Link>

          <Link href="/en/investors/financial-reports/valuation">
            <div className={styles.imgFinanceButton}>
              <img
                className={styles.icons}
                src="/Finance/vardering.png"
                alt="Värdering"
              />
              <span className={styles.buttonText}>Valuation</span>
            </div>
          </Link>

          <Link href="/en/investors/financial-reports/annualreport">
            <div className={styles.imgFinanceButton}>
              <img
                className={styles.icons}
                src="/Finance/protokol.png"
                alt="Årsredovisning"
              />
              <span className={styles.buttonText}>Annual Report</span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
