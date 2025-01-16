"use client";

import styles from "./index.module.css";
import BackArrow from "../../components/BackArrow";

export default function ProduktUtveckling() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={styles.sectionU}>
      <BackArrow mainLink="/produkter/historik" label="Produkter" />

      <div>
        <img
          className={styles.imgakne}
          src="/produkter/akne.png"
          alt="Akne behandling"
        />
      </div>
      <div className={styles.textcontainer}>
        <img
          src="/produkter/bluepalette4.png"
          alt="Blå bg"
          width={600}
          height={400}
          className={styles.bluepalette}
        />
        <p className={styles.ptext}>
          Produktutvecklingsstrategin är att utveckla innovativa läkemedel som
          snabbt tar bort smärta och irritation på huden hos både människor och
          djur baserat på egna patent.
          <br /> <br />
          Med det egna patentet som grund går Auxesis vidare för att utveckla
          receptbelagda läkemedel samt kosmetiska produkter som snabbt tar bort
          smärta och irritation på huden hos människor som ska vara
          lättillgängligt för konsumenter och olika professionella grupper.
          <br />
          Ett tillämpningsområde är Cosmeceuticals – kosmetiska produkter med
          medicinska fördelar.
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
              ASA.P® OTC <br /> Nya indikationer <br /> och <br />
              beredningsformer
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
              CoxyPet® <br /> Smärtstillande <br />
              läkemedel för <br />
              husdjur och <br /> boskap
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
              ASA.P® RX <br /> Receptbelagda <br /> versioner av <br />
              ASA.P®
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
