"use client";

import styles from "../../styles/Produkter.module.css";

export default function ProduktUtveckling() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container1}>
          <div>
            <img className={styles.imgakne} src="/produkter/akne.png" alt="" />
          </div>
          <div className={styles.textcontainer}>
            <h2 className={styles.h2utveckling}>
              Nya produkter lanseras i snabb takt
            </h2>
            <p className={styles.ptext}>
              Produktutvecklingsstrategin är att utveckla innovativa läkemedel
              som snabbt tar bort smärta och irritation på huden hos både
              människor och djur baserat på egna patent.
              <br /> <br />
              Med det egna patentet som grund går Auxesis vidare för att
              utveckla receptbelagda läkemedel samt kosmetiska produkter som
              snabbt tar bort smärta och irritation på huden hos människor som
              ska vara lättillgängligt för konsumenter och olika professionella
              grupper. <br />
              <br />
              Ett tillämpningsområde är Cosmeceuticals – kosmetiska produkter
              med medicinska fördelar.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </>
  );
}
