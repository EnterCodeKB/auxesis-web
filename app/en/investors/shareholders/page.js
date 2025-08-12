"use client";

import styles from "../../../styles/InvestAgare.module.css";
import BackArrow from "../../components/BackArrow";

export default function Aegare() {
  return (
    <>
      <section className={styles.section}>
        <BackArrow />
        <h1 className={styles.title}>Solid Ownership Structure</h1>

        <div className={styles.aegareContainer}>
          {/* Whiteboard 1 */}
          <div className={styles.whiteboard}>
            <h2 className={styles.subtitle}>Roar Adelsten</h2>
            <p className={styles.ptext}>
              Owns 64.4% (privately and through companies).
              <br />
              Founder and business developer within the Auxesis Group since
              2014.
            </p>
          </div>

          {/* Whiteboard 2 */}
          <div className={styles.whiteboard}>
            <h2 className={styles.subtitle}>Other Owners</h2>

            <p className={styles.ptext}>
              The remaining 35.6% of ownership is held primarily by private
              individuals and small businesses.
            </p>
          </div>

          {/* Whiteboard 3 */}
          <div className={styles.whiteboard}>
            <h2 className={styles.subtitle}>Shareholders</h2>

            <p className={styles.ptext}>
              Auxesis has approximately 800 shareholders.
              <br />
              The source for shareholding data is Euroclear Sweden, which
              manages the shareholder register.
              <br />
              Figures are as of November 30, 2024.
              <br />
              Auxesis owns 100% of its subsidiaries, Auxesis Animal Care AB and
              Auxesis Medtech AB.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
