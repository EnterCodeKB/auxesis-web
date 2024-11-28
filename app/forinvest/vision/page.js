import styles from "../../styles/Forinvest.module.css";

export default function Vision() {
  return (
    <>
      <section className={styles.vision}>
        <h1>Unik position med patentsökta preparat</h1>

        <div className={styles.container1}>
          <h2>Vision</h2>
          <p
            className={`${styles.animatedBox} ${styles.hidden} text-xl leading-tight border-2 border-gray-500 p-6 rounded-lg shadow-lg bg-gray-100`}
          >
            ATT PÅ VETENSKAPLIG GRUND OMDEFINIERA LÄKEMEDLESKATEGORIN SMÄRTA OCH
            IRRITATION PÅ HUDEN.
          </p>
        </div>

        <div className={styles.affärside}>
          <h2>Affärsidé</h2>
          <p className={styles.ptext}>
            Acetylsalicylsyra (ASA) är en av de mest välkända substanserna för
            smärtlindring och har använts i läkemedel sedan slutet av
            1800-talet, inklusive Treo, Bamyl, Aspirin.
            <br /> <br />
            Efter flera års forskning och tusentals försök har Auxesis
            tillsammans med professor Moustapha Hassan och hans team lyckats
            göra det som ingen annan har gjort tidigare: Att stabilisera ASA i
            flytande form.
            <br /> <br />
            Med ASA i flytande form finns möjligheter att utveckla helt nya
            beredningsformer som enkelt kan appliceras direkt på huden och ta
            bort smärta eller irritation inom några minuter genom att blockera
            smärtsignalen till hjärnan. Genom att tillsätta andra farmaceutiskt
            aktiva substanser bibehålls effekten till dess att kroppen har läkt
            sig själv. Studier pekar på att ASA.P stannar på huden och inte går
            ut i blodomloppet.
            <br /> <br />
            Baserat på eget patent är Auxesis först med att utveckla innovativa
            och tillgängliga läkemedel som inte bara lindrar utan snabbt tar
            bort smärta och irritation på huden.
          </p>
        </div>
      </section>
    </>
  );
}
