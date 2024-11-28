import styles from "../../../styles/Forinvest.module.css";

export default function Aegare() {
  return (
    <>
      <section className={styles.section}>
        <h1>Solid ägarstruktur </h1>

        <div className={styles.aegarecontainer}>
          <h2> Roar Adelsten:</h2>

          <div className={styles.aegaretext}>
            <p className={styles.ptext1}>
              Äger 64,4 procent (privat och via bolag).
              <br />
              Grundare, VD och affärsutvecklare inom Auxesis-koncernen sedan
              2014.
            </p>
          </div>
        </div>

        <div className={styles.aegarecontainer}>
          <h2> Moustapha Hassan:</h2>
          <div className={styles.aegaretext}>
            <p className={styles.ptext}>
              4,45 procent aktieinnehav. <br />
              Är ansvarig för Auxesis forskningsteam och professor i
              transplantationsforskning vid Karolinska Institutet.
            </p>
          </div>
        </div>

        <p className={styles.ptext}>
          Övriga ägare har sammantaget 31,15 procent och är i huvudsak
          privatpersoner och mindre företag.{" "}
        </p>
        <p className={styles.ptext}>
          Auxesis har cirka 600 (sexhundra) aktieägare. <br />
          Källa för aktieinnehaven är Euroclear som ansvarar för aktieboken.{" "}
          <br /> Siffrorna är per 2024-06-28.
          <br />
          Auxesis äger 100 procent av dotterbolagen Auxesis Animal Care AB och
          Auxesis Medtech AB (under registrering).
        </p>

        {/*  <div>
          <img className={styles.world} src="/world.jpeg" alt="world" />
        </div>*/}
      </section>
    </>
  );
}
