"use client";

import styles from "../../styles/InvestAgare.module.css";
import BackArrow from "../../components/BackArrow";

export default function Aegare() {
  return (
    <>
      <section className={styles.section}>
        <BackArrow mainLink="/" label="Hem" />

        <h1 className={styles.title}>Solid ägarstruktur</h1>

        <div className={styles.aegareContainer}>
          {/* Whiteboard 1 */}
          <div className={styles.whiteboard}>
            <h2 className={styles.subtitle}>Roar Adelsten</h2>
            <p className={styles.ptext}>
              Äger 64,4 procent (privat och via bolag).
              <br />
              Grundare och affärsutvecklare inom Auxesis-koncernen sedan 2014.
            </p>
          </div>

          {/* Whiteboard 2 */}
          <div className={styles.whiteboard}>
            <h2 className={styles.subtitle}>Övriga ägare</h2>

            <p className={styles.ptext}>
              Övriga ägare har sammantaget 35,6 procent ägande och är i huvudsak
              privatpersoner och mindre företag.
            </p>
          </div>

          {/* Whiteboard 3 */}
          <div className={styles.whiteboard}>
            <h2 className={styles.subtitle}>Aktieägare</h2>

            <p className={styles.ptext}>
              Auxesis har cirka 700 aktieägare.
              <br />
              Källa för aktieinnehaven är Euroclear Sweden som ansvarar för
              aktieboken.
              <br />
              Siffrorna är per 2024-11-30.
              <br />
              Auxesis äger 100 procent av dotterbolagen Auxesis Animal Care AB
              och Auxesis Medtech AB.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
