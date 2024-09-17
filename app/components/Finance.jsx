"use client";

import styles from "../styles/Finance.module.css";
import Link from "next/link";

export default function Finance() {
  return (
    <>
      <div className={styles.div}>
        <div className={styles.div73}>
          <div className={styles.div74}>Finansiell information</div>
          <h2>
            Här presenterar vi information för partners och investerare med
            nyheter och uppdateringar från Auxesis Pharma.
          </h2>
        </div>
        <div className={styles.div79} />
        <div className={styles.div80}>
          <div className={styles.div81}>
            <div className={styles.column10}>
              <div className={styles.div82}>
                <img
                  loading="finance-bild1"
                  src="/bild1-finance.png"
                  className={styles.img17}
                />
                <div className={styles.div83}>
                  <div className={styles.div84}>Euroclear </div>
                  <div className={styles.div85}>
                    AUXESIS PHARMA HOLDING AB (publ) är nu avstämningsbolag och
                    igång med Euroclear Sweden AB som värdepappersinstitut. Läs
                    här mer om alla våra mål{" "}
                  </div>
                  <div className={styles.div86}>
                    <div className={styles.div19}>
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
            <div className={styles.column11}>
              <div className={styles.div93}>
                <img
                  loading="finance-bild2"
                  srcSet="/finance-bild2.png"
                  className={styles.img20}
                />
                <div className={styles.div94}>
                  <div className={styles.div95}>
                    Protokoll Årsstämman 2023/ Protocol Annual General Meeting
                    2023
                  </div>
                  <div className={styles.div96}>
                    Protokoll från Årsstämman 2023 för AUXESIS PHARMA HOLDING AB
                    (publ) med organisationsnummer 559195-6486.{" "}
                  </div>
                  <div className={styles.div97}>
                    <div className={styles.div19}>
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
            <div className={styles.column12}>
              <div className={styles.div104}>
                <img
                  loading="finance-bild3"
                  srcSet="/finance-bild3.png"
                  className={styles.img23}
                />
                <div className={styles.div105}>
                  <div className={styles.div106}>Revisionsberättelse 2023</div>
                  <div className={styles.div107}>
                    Revisionsberättelse 2023 för AUXESIS PHARMA HOLDING AB
                    (publ) med organisationsnummer 559195-6486.{" "}
                  </div>
                  <div className={styles.div108}>
                    <div className={styles.div109}>
                      <div className={styles.div19}>
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
        </div>
      </div>
    </>
  );
}
