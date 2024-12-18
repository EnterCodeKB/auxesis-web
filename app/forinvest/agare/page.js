import styles from "../../styles/InvestAgare.module.css";

export default function Aegare() {
  return (
    <>
      <section className={styles.section}>
        <h1>Solid ägarstruktur </h1>

        <div className={styles.aegarecontainer}>
          <div className={styles.whiteboard1}>
            <h2> Roar Adelsten:</h2>

            <div className={styles.aegaretext}>
              <p className={styles.ptext2}>
                Äger 64,4 procent (privat och via bolag).
                <br />
                Grundare, VD och affärsutvecklare inom Auxesis-koncernen sedan
                2014.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.whiteboard2}>
          <p className={styles.ptext2}>
            Övriga ägare har sammantaget 35,6 procent och är i huvudsak
            privatpersoner och mindre företag.{" "}
          </p>
        </div>
        <div className={styles.whiteboard3}>
          <p className={styles.ptext2}>
            Auxesis har cirka 700 aktieägare. <br />
            Källa för aktieinnehaven är Euroclear Sweden som ansvarar för
            aktieboken. <br /> Siffrorna är per 2024-11-30.
            <br />
            Auxesis äger 100 procent av dotterbolagen Auxesis Animal Care AB och
            Auxesis Medtech AB.
          </p>
        </div>

        {/*  <div>
          <img className={styles.world} src="/world.jpeg" alt="world" />
        </div>*/}
      </section>
    </>
  );
}
