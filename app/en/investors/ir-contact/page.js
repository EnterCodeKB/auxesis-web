import styles from "../../../styles/InvestIr.module.css";

export default function IrKontakt() {
  return (
    <>
      <div className={styles["ir-container"]}>
        <div className={styles.ir}>
          <h1 className={styles.h1div}>IR Contact </h1>
          <h2 className={styles.h2namn}>Peter Åberg</h2>
          <p className={styles.irptext}>
            Chairman of the Board <br />
            Email: peter.aberg@auxesispharma.se Mobile: +46 (0)70 681 50 50
          </p>
          <h2 className={styles.h2namn}>Roar Adelsten</h2>
          <p className={styles.irptext}>
            Owner och Board Member
            <br />
            Email: roar.adelsten@auxesispharma.com Mobile: +46 (0)73 627 15 65
          </p>
        </div>
        <div>
          <img className={styles.world} src="/world.jpeg" alt="world" />
        </div>
      </div>
    </>
  );
}
