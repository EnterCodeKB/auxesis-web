import styles from "../../styles/Forinvest.module.css";

export default function Styrelse() {
  return (
    <>
      <div className={styles.styrelse}>
        <h2 className={styles.h2}>Styrelsen</h2>

        <p className={styles.ptext}>
          <span className={styles.fettext}>Roar Adelsten,</span> VD och
          styrelseledamot <br />
          <span className={styles.fettext}>Rune Nordström,</span>{" "}
          styrelseordförande <br />
          <span className={styles.fettext}>Charlotta Larsson,</span>{" "}
          styrelseledamot <br />
          <span className={styles.fettext}>Moustapha Hassan,</span> professor
          och styrelseledamot
        </p>
        <h2 className={styles.h2}>Ledningsgruppen</h2>

        <p className={styles.ptext}>
          <span className={styles.fettext}>Roar Adelsten,</span> VD <br />
          <span className={styles.fettext}>Lars Larsson, </span> CFO <br />
          <span className={styles.fettext}>Rune Nordström, </span> PR, IR och HR{" "}
          <br />
          <span className={styles.fettext}>Charlotta Larsson,</span> marknad och
          sälj
        </p>
        <div className={styles.ledning}>
          Samtliga styrelseledamöter och medlemmar i ledningsgruppen är också
          aktieägare i Auxesis Pharma Holding AB.
        </div>

        {/*  <div>
          <img className={styles.world} src="/world.jpeg" alt="world" />
        </div>*/}
      </div>
    </>
  );
}
