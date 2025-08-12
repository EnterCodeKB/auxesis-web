"use client";

import styles from "./index.module.css";
import BackArrow from "../../components/BackArrow";

export default function ProduktUtveckling() {
  return (
    <section className={styles.sectionU}>
      <BackArrow />
      {/* Vänster: huvudbild */}
      <div className={styles.mediaCol}>
        <img
          className={styles.imgakne}
          src="/produkter/akne.png"
          alt="Aknebehandling"
        />
      </div>

      {/* Höger: text + grid */}
      <div className={styles.textcontainer}>
        {/* Dekorativ bakgrundsbild */}
        <img
          src="/produkter/bluepalette4.png"
          alt=""
          aria-hidden="true"
          className={styles.bluepalette}
        />

        <p className={styles.ptext}>
          Produktutvecklingsstrategin är att utveckla innovativa läkemedel som
          snabbt tar bort smärta och irritation på huden hos både människor och
          djur baserat på egna patent.
          <br />
          <br />
          Med det egna patentet som grund går Auxesis vidare för att utveckla
          receptbelagda läkemedel samt kosmetiska produkter som snabbt tar bort
          smärta och irritation på huden hos människor som ska vara
          lättillgängligt för konsumenter och olika professionella grupper.
          <br />
          Ett tillämpningsområde är Cosmeceuticals – kosmetiska produkter med
          medicinska fördelar.
        </p>

        <div className={styles.imageGridContainer}>
          <div className={styles.column}>
            <img
              src="/produkter/tubeicon1.png"
              alt="ASA.P OTC"
              className={styles.image}
            />
            <p className={styles.imageText}>
              ASA.P® OTC <br /> Nya indikationer <br /> och <br />{" "}
              beredningsformer
            </p>
          </div>

          <div className={styles.column}>
            <img
              src="/produkter/petsicon1.png"
              alt="CoxyPet"
              className={styles.image}
            />
            <p className={styles.imageText}>
              CoxyPet® <br /> Smärtstillande <br /> läkemedel för <br />
              husdjur och <br /> boskap
            </p>
          </div>

          <div className={styles.column}>
            <img
              src="/produkter/detoskopicon1.png"
              alt="ASA.P RX"
              className={styles.image}
            />
            <p className={styles.imageText}>
              ASA.P® RX <br /> Receptbelagda <br /> versioner av <br /> ASA.P®
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
