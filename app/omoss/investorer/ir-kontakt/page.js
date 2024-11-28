import styles from "../../../styles/Forinvest.module.css";

export default function IrKontakt() {
  return (
    <>
      <div className={styles["ir-container"]}>
        <div className={styles.ir}>
          <h2 className={styles.h2}>IR-kontakter</h2>
          <h3 className={styles.h3}>Rune Nordström</h3>
          <p className={styles.ptext}>
            Styrelseordförande <br />
            E-post: rune.nordstrom@auxesispharma.com <br />
            Mobil: 46 (0) 70-602 65 20
          </p>
          <h3 className={styles.h3}>Roar Adelsten</h3>
          <p className={styles.ptext}>
            VD och grundare <br />
            E-post: roar.adelsten@auxesispharma.com <br />
            Mobil: 46 (0) 73 627 15 65
          </p>
        </div>
        <div>
          <img className={styles.world} src="/world.jpeg" alt="world" />
        </div>
      </div>
    </>
  );
}
