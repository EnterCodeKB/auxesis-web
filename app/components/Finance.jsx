"use client";

import styles from "../styles/Finance.module.css";
import Link from "next/link";

export default function Finance() {
  return (
    <>
      <div className={styles.financesection}>
        <div className={styles.div73}>
          <h1>Finansiell information</h1>
          <p className={styles.ptextunder}>
            Här presenterar vi information för partners och investerare med
            nyheter och uppdateringar från Auxesis Pharma.
          </p>
        </div>

        <div className={styles.div81}>
          <div className={styles.column}>
            <div className={styles.itemsbox}>
              <div className={styles.imgdiv}>
                <img
                  loading="finance-bild1"
                  src="/bild1-finance.png"
                  className={styles.imgfront}
                />
              </div>
              <div className={styles.textcontainer}>
                <div className={styles.textrubriken}>Euroclear </div>
                <p className={styles.ptext}>
                  AUXESIS PHARMA HOLDING AB (publ) är nu avstämningsbolag och
                  igång med Euroclear Sweden AB som värdepappersinstitut. Läs
                  här mer om alla våra mål{" "}
                </p>
                <p></p>
                <div className={styles.btncontainer}>
                  <div className={styles.btnbox}>
                    <button
                      className={styles.buttongradient}
                      onClick={() => handleScrollToTop()}
                    >
                      <Link
                        className={styles.link}
                        href="/nyheter/euroclear "
                        scroll={true}
                      >
                        Läs mer
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.itemsbox}>
              <div className={styles.imgdiv}>
                <img
                  loading="finance-bild2"
                  srcSet="/finance-bild2.png"
                  className={styles.imgfront}
                />{" "}
              </div>
              <div className={styles.textcontainer}>
                <div className={styles.textrubriken}>
                  Protokoll Årsstämman 2023/ Protocol Annual General Meeting
                  2023
                </div>
                <p className={styles.ptext}>
                  Protokoll från Årsstämman 2023 för AUXESIS PHARMA HOLDING AB
                  (publ) med organisationsnummer 559195-6486.{" "}
                </p>
                <div className={styles.btncontainer}>
                  <div className={styles.btnbox}>
                    <button
                      className={styles.buttongradient}
                      onClick={() => handleScrollToTop()}
                    >
                      <Link
                        className={styles.link}
                        href="/protokoll2023"
                        scroll={true}
                      >
                        Läs mer
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.itemsbox}>
              <div className={styles.imgdiv}>
                <img
                  loading="finance-bild3"
                  srcSet="/finance-bild3.png"
                  className={styles.imgfront}
                />{" "}
              </div>
              <div className={styles.textcontainer}>
                <div className={styles.textrubriken}>
                  Revisionsberättelse 2023
                </div>
                <p className={styles.ptext}>
                  Revisionsberättelse 2023 för AUXESIS PHARMA HOLDING AB (publ)
                  med organisationsnummer 559195-6486.{" "}
                </p>
                <p></p>
                <p></p>
                <div className={styles.btncontainer}>
                  <div className={styles.btnbox}>
                    <button
                      className={styles.buttongradient}
                      onClick={() => handleScrollToTop()}
                    >
                      <Link
                        className={styles.link}
                        href="/revision2023"
                        scroll={true}
                      >
                        Läs mer
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
