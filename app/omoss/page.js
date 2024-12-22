"use client";
import { useEffect, useRef } from "react";
import styles from "./omossSida.module.css";

export default function About() {
  const animatedBoxRef = useRef(null);
  const imgspelRef = useRef(null);
  const effektRef = useRef(null);
  const beeRef = useRef(null);

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

    if (animatedBoxRef.current) observer.observe(animatedBoxRef.current);
    if (imgspelRef.current) observer.observe(imgspelRef.current);
    if (effektRef.current) observer.observe(effektRef.current);
    if (beeRef.current) observer.observe(beeRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section className={styles.omoss}>
        <h1 className={styles.h1div}>
          Nytt läkemedelsföretag förändrar spelplanen
        </h1>
        <p className={styles.ptext}>
          AUXESIS PHARMA HOLDING AB (publ) är ett publikt företag som fokuserar
          på utveckling av läkemedel för människor och djur inom kategorin
          ”lokal smärta och irritation på huden”.
        </p>
        <p
          ref={animatedBoxRef}
          className={`${styles.animatedBox} ${styles.hidden}`}
        >
          Vår affärsidé: Auxesis utvecklar, baserat på eget patent, innovativa
          läkemedel som snabbt tar bort smärta och irritation på huden hos både
          människor och djur och som är lättillgängligt för konsumenter och
          olika yrkesgrupper.
        </p>
        <h2 className={styles.subHeading}>
          Banbrytande innovation som blockerar smärtsignalen
        </h2>
        <p className={styles.ptext}>
          Acetylsalicylsyra (ASA) är en av de mest välkända substanserna för
          smärtlindring och har använts i läkemedel sedan slutet av 1800-talet,
          inklusive Treo, Bamyl, Aspirin. <br /> <br />
          Efter flera års forskning och tusentals försök har Auxesis tillsammans
          med professor Moustapha Hassan och hans team lyckats göra det som
          ingen annan har lyckats med förut: Att stabilisera ASA i flytande
          form.
        </p>
        <div className={styles.flexContainer}>
          <div ref={imgspelRef} className={styles.imgdiv}>
            <img
              ref={beeRef}
              className={`${styles.bee} ${styles.hidden}`}
              src="/bin.png"
              alt="Bee"
            />
          </div>
          <div ref={effektRef} className={`${styles.effekt} ${styles.hidden}`}>
            <h2 className={styles.h2}>Receptfritt läkemedel</h2>
            <p className={styles.ptext}>
              ASA.P® är ett receptfritt läkemedel för humant bruk för behandling
              av smärta och irritation på huden orsakad av insektsbett, maneter,
              brännässlor och andra allergiframkallande växter, mindre
              brännskador, solbränna, utslag och eksem.
              <br /> <br />
              Preparatet ASA.P® har snabb verkan och blockerar smärtsignalen
              till hjärnan inom några minuter. ASA.P® blockerar smärtan med
              bibehållen effekt tills kroppen läker sig själv. ASA.P® har också
              antiinflammatoriska egenskaper. För närvarande finns två
              varumärken registrerade globalt: ASA.P® och CoxyPet®.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
