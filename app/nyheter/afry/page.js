import styles from "../afry/index.module.css";

export default function Afry() {
  return (
    <div className={styles.details}>
      <h1> Ny partner- AFRY​</h1>
      <h4>2024-07-11</h4>
      <div className={styles.ptext}>
        <p>
          AFRY sysselsätter tusentals högutbildade specialister inom
          tillverkningsprocesser och -linjer, utrustning och uppföljning. Med
          gedigen expertis utformar AFRY projektteam som utvecklar innovativa
          produkter, processer eller nya system.{" "}
        </p>
        <p>
          Deras referensprojekt omfattar Pharma & Biotech, Healthcare samt
          Medical devices and Cosmetics.
        </p>
        <p>https://afry.com/sv</p>
      </div>
      <div className={styles.articlesimage2}>
        <img
          className={styles.image1}
          src="/partners/Afry2.png
        "
          alt="Afry"
        />
      </div>
    </div>
  );
}
