import styles from "./index.module.css";

export default function Afry() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>New Partner – AFRY ​</h1>
      <h4 className={styles.date}>2024-07-11</h4>
      <div className={styles.text}>
        <p>
          AFRY employs thousands of highly skilled specialists in manufacturing
          processes, production lines, equipment, and monitoring. With extensive
          expertise, AFRY assembles specialized project teams to develop
          innovative products, processes, and systems.
        </p>
        <p>
          Their reference projects span multiple industries, including Pharma &
          Biotech, Healthcare, Medical Devices, and Cosmetics.
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
