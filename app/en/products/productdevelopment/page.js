"use client";

import styles from "./index.module.css";
import BackArrow from "../../components/BackArrow";

export default function ProduktUtveckling() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={styles.sectionU}>
      <BackArrow
        mainLink="/en/products/productdevelopment/page.js"
        label="Product development"
      />

      <div>
        <img
          className={styles.imgakne}
          src="/produkter/akne.png"
          alt="Akne behandling"
        />
      </div>
      <div className={styles.textcontainer}>
        <img
          src="/produkter/productdevelopment.png"
          alt="Blå bg"
          width={600}
          height={400}
          className={styles.bluepalette}
        />
        <p className={styles.ptext}>
          The product development strategy focuses on creating innovative
          medications that rapidly relieve pain and irritation on the skin for
          both humans and animals, based on proprietary patents.
          <br /> <br />
          Building on its patent, Auxesis is advancing the development of
          prescription medications and cosmetic products designed to provide
          fast-acting pain and irritation relief. These products will be easily
          accessible to both consumers and various professional groups.
          <br />
          One key application area is cosmeceuticals—cosmetic products with
          medical benefits.
        </p>
        <div className={styles.imageGridContainer}>
          {/* Första kolumnen */}
          <div className={styles.column}>
            <img
              src="/produkter/tubeicon1.png"
              alt="Tuben"
              className={styles.image}
            />
            <p className={styles.imageText}>
              ASA.P® OTC <br /> New Indications
              <br /> and <br />
              Formulations
            </p>
          </div>

          {/* Andra kolumnen */}
          <div className={styles.column}>
            <img
              src="/produkter/petsicon1.png"
              alt="Pets"
              className={styles.image}
            />
            <p className={styles.imageText}>
              CoxyPet® <br /> Pain-Relieving <br />
              Medication for
              <br />
              Pets and <br /> Livestock
            </p>
          </div>

          {/* Tredje kolumnen */}
          <div className={styles.column}>
            <img
              src="/produkter/detoskopicon1.png"
              alt="Detoskop"
              className={styles.image}
            />
            <p className={styles.imageText}>
              ASA.P® RX <br /> Prescription <br /> Versions of <br />
              ASA.P®
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
