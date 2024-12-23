"use client";

import styles from "./index.module.css";

export default function ProduktUtveckling() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={styles.sectionU}>
      <div>
        <img
          className={styles.imgakne}
          src="/produkter/akne.png"
          alt="Akne behandling"
        />
      </div>
      <div className={styles.textcontainer}>
        <h2>Nya produkter lanseras i snabb takt</h2>
        <p>
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
          <br />
          Ett tillämpningsområde är Cosmeceuticals – kosmetiska produkter med
          medicinska fördelar.
        </p>
      </div>
    </section>
  );
}
