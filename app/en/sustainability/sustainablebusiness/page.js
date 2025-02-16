import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
import BackArrow from "../../components/BackArrow";

const Miljo = () => {
  return (
    <>
      <section className={styles.halbara}>
        <BackArrow mainLink="/" label="Hem" />
        <h1 className={styles.mainHeading}>
          EN Hållbar Innovation för Framtidens Hälsa
        </h1>

        {/* Första sektionen med bild till vänster och text till höger */}
        <div className={styles.sectionContainer}>
          <div className={styles.imageContainer}>
            <Image
              src="/agenda/ecobilden.jpeg"
              alt="Ekologisk hållbarhet"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.textContainer}>
            <h2>Goda affärer är hållbara</h2>
            <p className={styles.ptext}>
              På Auxesis Pharma arbetar vi inom Agenda 2030:s samtliga områden
              med fokus på ekonomisk, social och miljömässig hållbarhet.
              Hållbarhet påverkar både utveckling och lansering av våra
              läkemedel. Ett läkemedels livscykel är lång. Att tillverka
              produkter med så lite miljöpåverkan som möjligt innebär ett
              dagligt arbete med att utvärdera vilka faser i vår utveckling,
              forskning, produktion och försäljning som kan påverka miljön.
            </p>
          </div>
        </div>

        {/* Andra sektionen med text till vänster och bild till höger */}
        <div className={styles.sectionContainerReverse}>
          <div className={styles.textContainer}>
            <h2>Innovativa förpackningar</h2>
            <p className={styles.ptext}>
              Produkterna vi producerar ska vara innovativa i hållbara och
              återvinningsbara förpackningar som inte påverkar miljön. Rester av
              det förbrukade preparatet ska kunna läggas i avfallssortering
              eller lämnas till apotekens återvinningssystem eller motsvarande i
              andra länder. Det bidrar till en mer hållbar tillväxt för Auxesis
              Pharma och för samhället.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/agenda/ecobilden2.jpeg"
              alt="Hållbara förpackningar"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Miljo;
