"use client";

import { useEffect, useRef } from "react";
import styles from "./vision.module.css";

export default function Vision() {
  const effektRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // 10% synlighet
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (effektRef.current) observer.observe(effektRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.vision}>
      <h1 className={styles.h1vision}>
        Unik position med patentsökta preparat
      </h1>

      <div className={styles.whiteboard4}>
        <div className={styles.container1}>
          <h2 className={styles.h2}>Vision</h2>
          <div ref={effektRef} className={`${styles.effekt} ${styles.hidden}`}>
            ATT MED VETENSKAP SOM GRUND OMDEFINIERA LÄKEMEDLESKATEGORIN SMÄRTA
            OCH IRRITATION PÅ HUDEN.
          </div>
        </div>

        <div className={styles.affarside}>
          <h2 className={styles.h2}>Affärsidé</h2>
          <p className={styles.ptext}>
            Acetylsalicylsyra (ASA) är en av de mest välkända substanserna för
            smärtlindring och har använts i läkemedel sedan slutet av
            1800-talet, inklusive Treo, Bamyl, Aspirin.
          </p>

          <p className={styles.ptext}>
            Efter flera års forskning och tusentals försök har Auxesis
            tillsammans med professor Moustapha Hassan och hans team lyckats
            göra det som ingen annan har gjort tidigare: Att stabilisera ASA i
            flytande form.
          </p>
          <p className={styles.ptext}>
            Med ASA i flytande form finns möjligheter att utveckla helt nya
            beredningsformer som enkelt kan appliceras direkt på huden och ta
            bort smärta eller irritation inom några minuter genom att blockera
            smärtsignalen till hjärnan. Genom att tillsätta andra farmaceutiskt
            aktiva substanser bibehålls effekten till dess att kroppen har läkt
            sig själv. Studier pekar på att ASA.P stannar på huden och inte går
            ut i blodomloppet.
          </p>
          <p className={styles.ptext}>
            Baserat på egna patenter är Auxesis först med att utveckla
            innovativa och tillgängliga läkemedel som inte bara lindrar utan
            snabbt tar bort smärta och irritation på huden.
          </p>
        </div>
      </div>
    </section>
  );
}
