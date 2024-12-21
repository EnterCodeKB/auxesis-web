"use client";

import styles from "../../styles/Finance.module.css";
import Link from "next/link";

export default function ProFinanceRapport() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className={styles.frapportsection}>
        <h1 className={styles.h1}>Finansiella rapporter</h1>
        <div className={styles.imgdiv1}>
          <Link href="/forinvest/finansrapport/bolagsstamma">
            <button className={styles.imgFinanceButton}>
              <img
                className={styles.icons}
                src="/Finance/bolagsordningJpeg1.jpeg"
                alt="Bolagsordning"
              />
              <span>Bolagsstämma</span>
            </button>
          </Link>

          <Link href="/forinvest/finansrapport/vaerdering">
            <button className={styles.imgFinanceButton}>
              <img
                className={styles.icons}
                src="/Finance/varderingJpeg1.jpeg"
                alt="Värdering"
              />
              <span>Värdering</span>
            </button>
          </Link>

          <Link href="/forinvest/finansrapport/arsredovisning">
            <button className={styles.imgFinanceButton}>
              <img
                className={styles.icons}
                src="/Finance/protokolSvg1.svg"
                alt="Protokoll Årsredovisning"
              />
              <span>Årsredovisning</span>
            </button>
          </Link>
        </div>
      </section>

      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </>
  );
}
