"use client";

import styles from "./index.module.css";
import Link from "next/link";

export default function Partners() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={styles.partnersSection}>
      <h1 className={styles.title}>Välrenommerade partners</h1>
      <p className={styles.description}>
        Auxesis är i en uppstartfas där erfarna och specialiserade partners är
        avgörande för att snabbt komma i gång med verksamheten. Våra
        samarbetspartners finns inom en rad olika verksamhetsområden.
      </p>

      <div className={styles.partnersGrid}>
        {/* Example Partner Card */}
        <div className={styles.partnerCard}>
          <Link href="https://ramberglaw.se/">
            <img
              src="/partners/ram_law_logo.png"
              alt="Ramberg Advokater"
              className={styles.partnerImage}
            />
          </Link>
          <div className={styles.partnerContent}>
            <h3 className={styles.partnerTitle}>RAMBERG Advokater</h3>
            <p className={styles.partnerDescription}>
              Ramberg Advokater i Stockholm är en fullservicebyrå med
              spetskompetens inom flera rättsområden. Ramberg ger juridiskt stöd
              till Auxesis och hjälper till med affärsjuridik, varumärkesfrågor
              och alla typer av regulatoriska frågor kopplade till juridik över
              hela världen.
            </p>
            <Link href="https://ramberglaw.se/">
              <button className={styles.partnerButton}>Mer om Ramberg</button>
            </Link>
          </div>
        </div>

        {/* Repeat similar blocks for other partners */}
        <div className={styles.partnerCard}>
          <Link href="https://www.iqvia.com/locations/nordics">
            <img
              src="/partners/sl.jpeg"
              alt="IQVIA och Svensk Läkemedelsstatistik"
              className={styles.partnerImage}
            />
          </Link>
          <div className={styles.partnerContent}>
            <h3 className={styles.partnerTitle}>
              IQVIA och Svensk Läkemedelsstatistik
            </h3>
            <p className={styles.partnerDescription}>
              Iqvia och Svensk Läkemedelsstatistik tillhandahåller exakta och
              omfattande analyser av läkemedelsbranschen i Sverige och globalt.
              Genom noggranna analyser och skräddarsydda konsulttjänster erbjuds
              Auxesis värdefulla insikter för beslutsfattande.
            </p>
            <Link href="https://www.iqvia.com/locations/nordics">
              <button className={styles.partnerButton}>Mer om IQVIA</button>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </section>
  );
}
