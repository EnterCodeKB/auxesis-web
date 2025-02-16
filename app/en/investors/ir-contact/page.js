import styles from "../../../styles/InvestIr.module.css";

export default function IrKontakt() {
  return (
    <>
      <div className={styles["ir-container"]}>
        <div className={styles.ir}>
          <h1 className={styles.h1div}>EN IR-kontakter</h1>
          <h2 className={styles.h2namn}>Rune Nordström</h2>
          <p className={styles.irptext}>
            Styrelseordförande <br />
            E-post: rune.nordstrom@auxesispharma.com <br />
            Mobil: 46 (0) 70-602 65 20
          </p>
          <h2 className={styles.h2namn}>Roar Adelsten</h2>
          <p className={styles.irptext}>
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
