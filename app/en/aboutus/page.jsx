"use client";
import { useEffect, useRef } from "react";
import styles from "../styles/Omoss.module.css";

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
      <section className={styles.section}>
        <h2>Nytt läkemedelsföretag förändrar spelplanen </h2>
        <p className={styles.ptext}>
          AUXESIS PHARMA HOLDING AB (publ) är ett publikt företag som fokuserar
          på utveckling av läkemedel för människor och djur inom kategorin
          ”lokal smärta och irritation på huden”.
        </p>
        <p
          ref={animatedBoxRef}
          className={`${styles.animatedBox} ${styles.hidden} text-xl leading-tight border-2 border-gray-500 p-6 rounded-lg shadow-lg bg-gray-100`}
        >
          Vår affärsidé: Auxesis utvecklar, baserat på eget patent, innovativa
          läkemedel som snabbt tar bort smärta och irritation på huden hos både
          människor och djur och som är lättillgängliga för konsumenter och
          olika yrkesgrupper.
        </p>
        <h2>Unik innovation blockerar smärtsignalen </h2>
        <p className={styles.ptext}>
          Efter många års forskning och tusentals försök har Auxesis,
          tillsammans med professor Moustapha Hassan och hans team på Karolinska
          Institutet, Stockholm lyckats göra det som ingen annan har gjort
          tidigare: att stabilisera Acetylsalicylsyra (ASA) i flytande form. Den
          här innovationen gör det möjligt att applicera Acetylsalicylsyran på
          huden. <br />
          Auxesis tar nu fram den första receptfria konsumentprodukten som
          snabbt tar bort smärta och irritation på hud. Produktens namn är
          ASA.P®.
        </p>
        <div className={`${styles.andrast} flex items-center justify-between`}>
          <div ref={imgspelRef} className={styles.imgdiv}>
            <img
              ref={beeRef}
              className={`${styles.bee} ${styles.hidden}`}
              src="/bin.png"
              alt="Bee"
            />
          </div>{" "}
          <div ref={effektRef} className={`${styles.effekt} ${styles.hidden}`}>
            <h2 className={styles.h2}>Receptfritt läkemedel</h2>
            <p className={styles.ptext}>
              ASA.P® är ett receptfritt läkemedel för humant bruk för behandling
              av smärta och irritation på huden orsakad av insektsbett, maneter,
              brännässlor och andra allergiframkallande växter, mindre
              brännskador, solbränna, utslag och eksem.
            </p>
            <p className={styles.ptext}>
              Preparatet ASA.P® har snabb verkan och blockerar smärtsignalen
              till hjärnan inom några minuter. ASA.P® blockerar smärtan med
              bibehållen effekt tills kroppen läker sig själv. ASA.P® har också
              antiinflammatoriska egenskaper.{" "}
            </p>
            <p className={styles.ptext}>
              För närvarande finns två varumärken registrerade globalt: ASA.P®
              och CoxyPet®.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
