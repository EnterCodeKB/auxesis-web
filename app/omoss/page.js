"use client";
import { useEffect, useRef } from "react";
import styles from "./omossSida.module.css";
import BackArrow from "../components/BackArrow";

export default function About() {
  const animatedBoxRef = useRef(null);
  const animatedBoxRef2 = useRef(null);

  const imgspelRef = useRef(null);
  const effektRef = useRef(null);
  const visionRef = useRef(null);
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
    if (animatedBoxRef2.current) observer.observe(animatedBoxRef2.current);

    if (imgspelRef.current) observer.observe(imgspelRef.current);
    if (effektRef.current) observer.observe(effektRef.current);
    if (visionRef.current) observer.observe(visionRef.current);
    if (beeRef.current) observer.observe(beeRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section className={styles.omoss}>
        <h1 className={styles.h1div}>
          {" "}
          Nytt läkemedelsföretag förändrar spelplanen
        </h1>
        <h2 className={styles.h2div}>Affärsidé</h2>
        <p
          ref={animatedBoxRef}
          className={`${styles.animatedBox} ${styles.hidden}`}
        >
          Auxesis utvecklar, baserat på eget patent, innovativa läkemedel som
          snabbt tar bort smärta och irritation på huden hos både människor och
          djur och som är lättillgängligt för konsumenter och olika
          yrkesgrupper.
        </p>
        <br />
        <p className={styles.ptext}>
          AUXESIS PHARMA HOLDING AB(publ) är ett publikt företag som fokuserar
          på utveckling av läkemedel för människor och djur inom kategorin
          ”lokal smärta och irritation på huden”.
        </p>
        <BackArrow mainLink="/" label="Hem" />

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
              varumärken registrerade globalt: ASA.P® och CoxyPet®.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.omoss2}>
        <h2 className={styles.h2div}>Vision</h2>
        <p
          ref={animatedBoxRef2}
          className={`${styles.animatedBox2} ${styles.hidden}`}
        >
          {" "}
          ATT MED VETENSKAP SOM GRUND OMDEFINIERA LÄKEMEDLESKATEGORIN SMÄRTA OCH
          IRRITATION PÅ HUDEN.
        </p>

        <div>
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
            Baserat på egna patent är Auxesis först med att utveckla innovativa
            och tillgängliga läkemedel som inte bara lindrar utan snabbt tar
            bort smärta och irritation på huden.
          </p>
        </div>
      </section>
    </>
  );
}
