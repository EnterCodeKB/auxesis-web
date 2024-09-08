import styles from "../../styles/Forinvest.module.css";

export default function IrKontakt() {
  return (
    <>
      <div className={styles.agare}>
        <h2 className={styles.h2}>Ägare</h2>

        <p className={styles.ptext}>
          <span className={styles.fettext}>Roar Adelsten</span> – 66 procent
          (privat och via bolag) <br />
          <span className={styles.fettext}>Professor Moustapha Hassan</span> –
          4,85 procent <br /> <span className={styles.fettext}>Övriga</span> –
          29,15 procent. <br />
          Övriga ägare är i huvudsak privatpersoner och mindre företag.
        </p>

        {/*  <div>
          <img className={styles.world} src="/world.jpeg" alt="world" />
        </div>*/}
      </div>
    </>
  );
}
