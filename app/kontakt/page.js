import styles from "../styles/Kontakt.module.css";

export default function Kontakt() {
  return (
    <>
      <div className={styles.kontakt}>
        <h3 className={styles.h3}>E-post och telefon</h3>
        <p className={styles.ptext}>
          info@auxesis.se <br />
          +46 (0)8-771 43 00{" "}
        </p>
        <h3 className={styles.h3}>Adress</h3>
        <div className={styles.adressen}>
          <div className={styles.column1}>
            <span className={styles.fettext}>
              <h4>Besöksadress:</h4>
            </span>{" "}
            <p className={styles.ptext}>
              Skeppargatan 26 <br />
              114 52 Stockholm <br />
              Sweden
            </p>
          </div>
          <div className={styles.column1}>
            <span className={styles.fettext}>
              <h4>Postadress:</h4>
            </span>{" "}
            <p className={styles.ptext}>
              P.O.Box 3626 <br />
              Regeringsgatan 63 <br /> 103 59 Stockholm <br /> Sweden
            </p>
          </div>
        </div>
        {/*  <div>
          <img className={styles.world} src="/world.jpeg" alt="world" />
        </div>*/}
      </div>
    </>
  );
}
