import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
import BackArrow from "../../components/BackArrow";

const Miljo = () => {
  return (
    <>
      <section className={styles.halbara}>
        <BackArrow mainLink="/en" label="Home" />
        <h1 className={styles.mainHeading}>
          Sustainable Innovation for the Future of Health
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
            <h2>Good business is sustainable</h2>
            <p className={styles.ptext}>
              At Auxesis Pharma, we actively engage in all areas of Agenda 2030,
              with a strong focus on economic, social, and environmental
              sustainability. Sustainability plays a crucial role in both the
              development and launch of our pharmaceuticals. A drug’s life cycle
              is long, and minimizing its environmental impact requires
              continuous effort. Every day, we assess which stages of our
              development, research, production, and sales can be improved to
              reduce our environmental footprint.
            </p>
          </div>
        </div>

        {/* Andra sektionen med text till vänster och bild till höger */}
        <div className={styles.sectionContainerReverse}>
          <div className={styles.textContainer}>
            <h2>Innovative Packaging</h2>
            <p className={styles.ptext}>
              The products we develop will feature innovative, sustainable, and
              recyclable packaging with minimal environmental impact. Any
              residual product should be easily disposed of through waste
              sorting or returned to pharmacy recycling systems or their
              equivalents in other countries. This approach supports sustainable
              growth for both Auxesis Pharma and society as a whole.
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
