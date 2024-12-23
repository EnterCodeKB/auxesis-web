import * as React from "react";

import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.div201}>
      <div className={styles.div202}>
        <div className={styles.column}>
          <h4 className={styles.divh4}>
            <i className="bi bi-geo-alt"></i>Besöksadress:
          </h4>
          <p className={styles.footertext}>Skeppargatan 26</p>
          <p className={styles.footertext}>114 52 Stockholm</p>
          <p className={styles.footertext}>Sweden</p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.divh4}>
            <i className="bi bi-envelope"></i>Postadress:
          </h4>
          <p className={styles.footertext}>P.O.Box 3626</p>
          <p className={styles.footertext}>Regeringsgatan 63</p>
          <p className={styles.footertext}>103 59 Stockholm</p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.divh4}>
            +46 (0)8-771 43 00 <br />
            auxesis@auxesispharma.com
          </h4>
          <Link href="https://www.linkedin.com/in/auxesis-pharma-holding-ab-publ-2b354a224">
            <img
              className={styles.imglinkedin}
              src="/linkedinlogo 2.png"
              alt="linkedin"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
