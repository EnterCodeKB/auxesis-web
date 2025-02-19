import styles from "./index.module.css";

export default function Zelmic() {
  return (
    <div className={styles.details}>
      <h1 className={styles.h1div}>
        Auxesis Pharma Enters Test Production Phase – Partnership with Zelmic AB
      </h1>
      <h4 className={styles.h4}>2024-07-10</h4>

      <div className={styles.ptext}>
        <p>
          As Auxesis Pharma moves into the test production phase, we have
          entered a strategic partnership with Zelmic AB. <br />
          <br />
          Zelmic is an experienced, privately owned CRO (Contract Research
          Organization) and CDMO (Contract Development and Manufacturing
          Organization), fully dedicated to the development of topical and
          transdermal pharmaceutical formulations.
        </p>
        <br />

        <p>
          Based in Lund, Sweden—one of Europe’s leading science hubs and home to
          numerous life science companies, the MAX IV Laboratory, and the
          recently launched UNOPS Global Innovation Centre—Zelmic’s dedicated
          team and specialized laboratory are ideally positioned to help clients
          succeed. Zelmic's highly skilled experts specialize in topical and
          transdermal delivery, with deep expertise in formulation development,
          analytical chemistry, and intellectual property management—all aimed
          at strengthening clients’ R&D capabilities while minimizing risks.
        </p>
      </div>
    </div>
  );
}
