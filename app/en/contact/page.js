import styles from "../../styles/Kontakt.module.css";

export default function Kontakt() {
  return (
    <>
      <div className={styles.kontaktsection}>
        <div className={styles.section1}>
          <h1 className={styles.h1div}>Contact Us</h1>
        </div>
        <div className={styles.kontakt}>
          <div className={styles.section2}>
            <div className={styles.squarecontainer}>
              <div className={styles.kontaktinner}>
                <img
                  className={styles.kontaktikoner}
                  src="/kontakt/tel-ikon.png"
                  alt="telefon ikoner"
                />
                <p className={styles.ptext}>+46 (0)8-771 43 00</p>
              </div>
              <div className={styles.kontaktinner}>
                <img
                  className={styles.kontaktikoner}
                  src="/kontakt/glob-ikon.png"
                  alt="glob ikoner"
                />
                <p className={styles.ptext}>auxesis@auxesispharma.com</p>
              </div>
              <div className={styles.kontaktinner}>
                <img
                  className={styles.kontaktikoner}
                  src="/kontakt/email-ikon.png"
                  alt="postadress ikoner"
                />
                <p className={styles.ptext}>
                  P.O.Box 3626, Regeringsgatan 63, <br /> 103 59 Stockholm,
                  Sweden
                </p>
              </div>
              <div className={styles.kontaktinner}>
                <img
                  className={styles.kontaktikoner}
                  src="/kontakt/adress-ikon1.png"
                  alt="kontakt ikoner"
                />
                <p className={styles.ptext}>
                  Skeppargatan 26, 114 52 Stockholm, Sweden
                </p>
              </div>
            </div>
          </div>
          <div className={styles.circlecontainer}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
        </div>
      </div>
    </>
  );
}
