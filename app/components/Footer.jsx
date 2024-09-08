import * as React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.div201}>
      <div className={styles.div202}>
        <div className={styles.column}>
          <div className={styles.div203}>
            <div className={styles.div204}>Presskontakt</div>
            <div className={styles.div205}>
              Rune Nordström <br />
              Styrelseordförande <br />
              E-post: rune.nordstrom@ auxesispharma.com
              <br />
              Mobil: 070-602 65 20
              <div>
                <p>
                  Roar Adelsten <br />
                  VD och ägare <br />
                  E-post: roar.adelsten@ auxesispharma.com <br />
                  Tel: 46 (0) 73 627 15 65
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.column22}>
          <div className={styles.div213}>
            <div className={styles.div214}>
              <div className={styles.column23}>
                <div className={styles.div215}>
                  <h4>Besöksadress:</h4>
                  Skeppargatan 26 <br />
                  114 52 Stockholm <br />
                  Sweden
                  <div className={styles.div218}>
                    <h3>Postadress:</h3>
                    <div>
                      P.O.Box 3626 <br />
                      Regeringsgatan 63 <br />
                      103 59 Stockholm
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.column24}>
                <div className={styles.div220}>
                  <div className={styles.div221}>
                    <h4>Media:</h4>
                  </div>
                  <div className={styles.div222}>
                    <Link href="https://www.linkedin.com/in/auxesis-pharma-holding-ab-publ-2b354a224">
                      <img
                        className={styles.imglinkedin}
                        src="/linkedinlogo.png"
                        alt="linkedin"
                      />
                    </Link>
                  </div>
                  <div className={styles.div223}>
                    <h4>KONTAKT</h4>

                    <h4>
                      +46 (0)8-771 43 00 <br />
                      info@auxesis.se
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
