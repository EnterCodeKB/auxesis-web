"use client";
import { useEffect, useRef } from "react";

import styles from "../../styles/ProduktHistorik.module.css";

export default function Historik() {
  const animatedBoxRef = useRef(null);
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

    if (animatedBoxRef.current) observer.observe(animatedBoxRef.current);
    if (effektRef.current) observer.observe(effektRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className={styles.produkthistorik}>
        <div className={styles.produktinfo}>
          <div className={styles.servettext}>
            <h1>Banbrytande produkter </h1>
            <p className={styles.ptext}>
              Auxesis utvecklar flera preparat som blockerar smärtsignalen till
              hjärnan och tar bort smärta på huden. <br /> <br /> Forskningen
              omfattar produkter för människa och kan också vara användbar för
              husdjur och boskap även om vissa receptanpassningar behöver
              anpassas per djurart krävs. Kosmetika- och hudvårdsindustrin är
              ytterligare en målgrupp.
            </p>
          </div>
        </div>

        <div className={styles.produktinfo}>
          <div>
            <h2>Auxesis stabiliserar ASA i flytande form</h2>
            <p className={styles.ptext}>
              Acetylsalicylsyra (ASA) är en av de mest välkända substanserna för
              smärtlindring och har använts i läkemedel sedan slutet av
              1800-talet, inklusive Treo, Bamyl, Aspirin.
              <br /> <br /> Efter flera års forskning och tusentals försök har
              Auxesis tillsammans med professor Moustapha Hassan och hans team
              lyckats göra det som ingen annan har gjort tidigare: Att
              stabilisera ASA i flytande form.
              <br /> <br />
              Med ASA i flytande form finns möjligheter att utveckla helt nya
              beredningsformer som enkelt kan appliceras direkt på huden och ta
              bort smärta eller irritation inom några minuter. Genom att
              tillsätta andra farmaceutiskt aktiva substanser bibehålls effekten
              till dess att kroppen har läkt sig själv. Studier visar att
              substansen stannar på huden och inte går ut i blodomloppet.
            </p>
          </div>
          <div className={styles.handsdiv}>
            <img
              className={styles.hands}
              src="/produkter/hand.png"
              alt="Händerna "
            />
          </div>
        </div>

        <div className={styles.animations}>
          <div
            ref={animatedBoxRef}
            className={`${styles.animatedBox} ${styles.hidden} text-xl leading-tight border-2 border-gray-500 p-6 rounded-lg shadow-lg bg-gray-100`}
          >
            <h3>Acetylsalicylsyrans (ASA) historia </h3>
            <p className={styles.ptext}>
              Inom örtmedicinen har man sedan urminnes tider, minst så långt
              tillbaka som 2500 f.Kr., använt salicylsyra – ett naturligt ämne
              besläktat med det syntetiska aspirin – som utvinns från växter som
              myrten, pil och ängsvädd.
              <br />
              <br /> År 1897 lyckades Dr. Felix Hoffmann, en tysk forskare vid
              Friedrich Bayer & Co., för första gången producera
              acetylsalicylsyra (ASA) för oral användning. <br />
              Detta markerade födelsen av både Aspirin och läkemedelsindustrin.
            </p>
          </div>

          <div
            ref={effektRef}
            className={`${styles.animatedBox} ${styles.hidden} text-xl leading-tight border-2 border-gray-500 p-6 rounded-lg shadow-lg bg-gray-100`}
          >
            <h3>
              Hur aspirin och andra antiinflammatoriska läkemedel fungerar{" "}
            </h3>
            <p className={styles.ptext}>
              På 1970-talet upptäckte forskare att skador på mänsklig vävnad
              utlöser frisättning av prostaglandiner – hormonliknande molekyler
              som orsakar feber och inflammation. <br />
              De fann också att aspirin blockerar produktionen av dessa
              molekyler på något sätt.
              <br />
              <br /> Andra antiinflammatoriska läkemedel, såsom Ibuprofen och
              Naproxen, verkar genom att fysiskt blockera enzymets kanaler
              snarare än att kemiskt förändra dem.
            </p>
          </div>
        </div>
        <div className={styles.sistadiv}>
          <h2>Vad är hudsmärta och hur reagerar kroppen?</h2>
          <p className={styles.ptext}>
            Nervbanorna som går från det perifera nervsystemet till hjärnan
            transporterar information från olika sensoriska receptorer vars
            signaler sammanställs till sinnesförnimmelser i hjärnan.
          </p>
          <p className={styles.ptext}>
            Dessa nervbanor kallas sensoriska nerver. De överför signaler om
            till exempel beröring, värme, kyla och smärta.
          </p>
          <p className={styles.ptext}>
            En grundläggande egenskap hos de nervceller som skickar sina trådar
            in i huden och registrerar beröring, så kallade första ordningens
            neuroner i det taktila systemet, är att den enskilda nervcellens
            tråd förgrenar sig i huden så att varje nervcell har många känsliga
            zoner.
          </p>
          <p className={styles.ptext}>
            Det finns smärtreceptorer i huden och i nästan hela kroppen som
            reagerar på värme, kyla, inflammation och när vi gör oss illa.
            Mottagarna skickar sedan signaler vidare till hjärnan via
            nervcellerna. I själva nervcellen fortplantas informationen som
            elektriska impulser.
          </p>
        </div>
        <div className={styles.allaprodukter}>
          <img
            className={styles.imgallaprodukter}
            src="/produkter/allaprodukter.png"
            alt="ASA.P produkter"
          />
        </div>
      </section>
      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </>
  );
}
