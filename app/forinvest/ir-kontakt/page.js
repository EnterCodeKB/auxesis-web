import styles from "../../styles/Forinvest.module.css";

export default function IrKontakt() {
  return (
    <>
      <div className={styles["ir-container"]}>
        <div className={styles.ir}>
          <h2 className={styles.h2}>IR-kontakter</h2>
          <h4 className={styles.h4}>Rune Nordström</h4>
          <p className={styles.ptext}>
            Styrelseordförande och presskontakt <br />
            E-post: rune.nordstrom@auxesispharma.se <br />
            Mobil: 070-602 65 20
          </p>
          <h4 className={styles.h4}>Roar Adelsten</h4>
          <p className={styles.ptext}>
            VD och grundare <br />
            E-post: roar.adelsten@auxesispharma.se <br />
            Tel: 46 (0) 73 627 15 65
          </p>
        </div>
        <div>
          <img className={styles.world} src="/world.jpeg" alt="world" />
        </div>
      </div>
    </>
  );
}
