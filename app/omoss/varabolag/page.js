"use client";
import styles from "../varabolag/varabolagSida.module.css";
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
      <section className={styles.varabolag}>
        <div className={styles.textarea}>
          <h1 className={styles.h1}>En solid koncern med tre bolag</h1>

          <div className={styles.bolagstree}>
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

          <div className={styles.ularea}>
            {/* Första bolaget */}
            <div className={styles.auxesis}>
              <div className={styles.auxesisbild}>
                <h2 className={styles.divh2}>Auxesis Pharma Holding AB</h2>
              </div>
              <div className={styles.auxesistext}>
                <p className={styles.ptext}>
                  <strong>Auxesis Pharma Holding AB (publ)</strong> är ett
                  publikt avstämningsbolag, vilket innebär att det är ett
                  aktiebolag vars bolagsordning innehåller ett förbehåll om att
                  företagets aktier ska vara registrerade i ett
                  avstämningsregister (läs mer på Bolagsverket). Företaget är
                  moderbolag och innehar rättigheterna till patent inom
                  specifika medicinska forskningsområden. Auxesis Pharma Holding
                  AB (publ) fokuserar på utveckling av innovativa läkemedel för
                  behandling av lokal smärta och irritation på huden, både för
                  människor och djur.
                </p>
                <h4 className={styles.h4}>Affärsidé</h4>
                <p className={styles.ptext}>
                  Med utgångspunkt i egna patent utvecklar Auxesis innovativa
                  läkemedel som effektivt lindrar smärta och irritation på
                  huden. Produkterna är enkla att använda och tillgängliga för
                  både konsumenter och professionella yrkesgrupper. Efter flera
                  års forskning och tusentals tester har Auxesis, i samarbete
                  med forskarteamet vid Karolinska Institutet i Stockholm,
                  uppnått något unikt: att stabilisera acetylsalicylsyra (ASA) i
                  flytande form. Denna stabilisering, kombinerad med andra redan
                  godkända läkemedel, möjliggör en applicering direkt på huden.
                </p>
                <h4 className={styles.h4}>Milstolpar och framtid</h4>
                <p className={styles.ptext}>
                  Sommaren 2025 firar bolaget 10 år. Sedan starten har Auxesis
                  genomgått en resa från idéstadiet, via forskning och
                  kapitalisering, till prekliniska tester och globalt
                  PCT-patentskydd. Målet är att uppnå godkännande för den
                  banbrytande produkten ASA.PÒ år 2026, följt av en
                  börsintroduktion. För närvarande har Auxesis två globala
                  varumärken registrerade: ASA.P® och CoxyPet®.
                </p>
              </div>
            </div>

            {/* Andra bolaget */}
            <div className={styles.medtech}>
              <div className={styles.medtechbild}>
                <h2 className={styles.divh2}>Auxesis MedTech AB</h2>
              </div>
              <div className={styles.medtechtext}>
                <p className={styles.ptext}>
                  <strong>Auxesis MedTech AB </strong> grundades 2024 och ingår
                  i Auxesis Pharma Holding AB. Auxesis MedTech AB kommer
                  inledningsvis inneha prototyptillverkning och licensen för att
                  producera och marknadsföra våra medicinska produkter i Norden
                  och licenser för resten av världen. För att säkerställa högsta
                  möjliga standard och effektivitet etablerar vi en egen,
                  toppmodern fabrik i Östersund. Fabriken skräddarsys för att
                  producera våra egna produkter. Genom att ha full kontroll över
                  produktionsprocessen kan vi garantera en unik och anpassad
                  kvalitet av produkterna samt kontrollerade leveranser.
                </p>
              </div>
            </div>

            {/* Tredje bolaget */}
            <div className={styles.animalcare}>
              <div className={styles.animalcarebild}>
                <h2 className={styles.divh2}>Auxesis Animal Care AB</h2>
              </div>
              <div className={styles.animalcaretext}>
                <p className={styles.ptext}>
                  <strong> Auxesis Animal Care AB </strong>utvecklar produkter
                  för djurvårdsmarknaden med fokus på hund, katt och
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
            alt="Våra bolagsstruktur"
          />
        </div>
      </section>
    </>
  );
}
