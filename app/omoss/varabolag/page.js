"use client";
import styles from "../../styles/Bolag.module.css";
import React, { useEffect, useRef } from "react";

export default function Bolag() {
  const bolagRefs = useRef([]);

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

    bolagRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section>
        <div className={styles.textarea}>
          <h1>En solid koncern med tre bolag</h1>

          <div className={styles.bolagstree}>
            <div className={styles.loggansdiv}>
              <img
                className={styles.loggansimg1}
                src="/bolag/bolagsbildning.png"
                alt=""
              />
            </div>

            <div className={styles.bolagsdiv}>
              <h2
                className={`${styles.bolag1} ${styles.hidden}`}
                ref={(el) => (bolagRefs.current[0] = el)}
              >
                Auxesis Pharma Holding AB
              </h2>
              <h2
                className={`${styles.bolag2} ${styles.hidden}`}
                ref={(el) => (bolagRefs.current[1] = el)}
              >
                Auxesis MedTech AB
              </h2>
              <h2
                className={`${styles.bolag3} ${styles.hidden}`}
                ref={(el) => (bolagRefs.current[2] = el)}
              >
                Auxesis Animal Care AB
              </h2>
            </div>
          </div>

          <div className={styles.ularea}>
            <div className={styles.auxesis}>
              <div className={styles.auxesisbild}>
                <h2 className={styles.divh2}>Auxesis Pharma Holding AB</h2>
              </div>
              <div className={styles.auxesistext}>
                <p className={styles.ptext}>
                  Auxesis Pharma Holding AB är moderbolag och äger rättigheterna
                  till patent inom specifika medicinska forskningsområden.
                  Auxesis Pharma Holding äger i sin tur två dotterbolag: Auxesis
                  MedTech AB och Auxesis Animal Care AB.
                </p>
              </div>
            </div>

            <div className={styles.medthech}>
              <div className={styles.medthechbild}>
                <h2 className={styles.divh2}>Auxesis MedTech AB</h2>
              </div>
              <div className={styles.medthechtext}>
                <p className={styles.ptext}>
                  Auxesis MedTech AB grundades 2024 och ingår i Auxesis Pharma
                  Holding AB. Auxesis MedTech AB kommer inledningsvis inneha
                  prototyptillverkning och licensen för att producera och
                  marknadsföra våra medicinska produkter i Norden och licenser
                  för resten av världen.
                  <br />
                  För att säkerställa högsta möjliga standard och effektivitet
                  etablerar vi en egen, toppmodern fabrik i Östersund. Fabriken
                  skräddarsys för att producera våra egna produkter. Genom att
                  ha full kontroll över produktionsprocessen kan vi garantera en
                  unik och anpassad kvalitet av våra produkter samt
                  kontrollerade leveranser.
                </p>
              </div>
            </div>

            <div className={styles.animalcare}>
              <div className={styles.animalcarebild}>
                <h2 className={styles.divh2}>Auxesis Animal Care AB</h2>
              </div>
              <div className={styles.animalcaretext}>
                <p className={styles.ptext}>
                  Auxesis Animal Care AB utvecklar produkter för
                  djurvårdsmarknaden med fokus på hund, katt och
                  boskapsindustri. Bland både djurägare och veterinärer finns
                  det efterfrågan och marknad för en produkt som hanterar smärta
                  på djurens hud. Därför kommer vi att styra vår forskning och
                  utveckling i nästa steg mot kategorin veterinärmedicinska
                  läkemedel.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ovalcontainer}>
          <img
            className={styles.bolagsbord}
            src="/bolagsbild.png"
            alt="Våra bolags bild"
          />
        </div>
      </section>
    </>
  );
}
