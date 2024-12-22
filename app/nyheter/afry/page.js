import styles from "./index.module.css";

export default function Afry() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ny partner - AFRY​</h1>
      <h4 className={styles.date}>2024-07-11</h4>
      <div className={styles.text}>
        <p>
          AFRY sysselsätter tusentals högutbildade specialister inom
          tillverkningsprocesser och -linjer, utrustning och uppföljning. Med
          gedigen expertis utformar AFRY projektteam som utvecklar innovativa
          produkter, processer eller nya system.
        </p>
        <p>
          Deras referensprojekt omfattar Pharma & Biotech, Healthcare samt
          Medical devices and Cosmetics.
        </p>
        <p>
          <a
            href="https://afry.com/sv"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            https://afry.com/sv
          </a>
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/partners/Afry2.png" alt="Afry" />
      </div>
    </div>
  );
}
