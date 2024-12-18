import * as React from "react";
import Link from "next/link";
import styles from "../styles/heroPr.module.css";

export default function HeroPr() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.div13}>
        <div className={styles.div14}>
          <div className={styles.column}>
            <div className={styles.div15}>
              {/* Logo */}
              <Link href="/">
                <img
                  src="/278149D3-C96F-4CEE-BC16-3D7AB9E4DABE.png"
                  alt="Loggan"
                  className={styles.logo}
                />
              </Link>
              <div className={styles.div16}>
                <h2 className={styles.divh1}>
                  ETT INNOVATIVT <br /> LÄKEMEDELSFÖRETAG
                  <br />
                  MED BANBRYTANDE PATENT
                </h2>
              </div>
              <div className={styles.div18}></div>
            </div>
          </div>
          <div className={styles.column2}></div>
        </div>
      </div>
      <div className={styles.div000}></div>
    </div>
  );
}
