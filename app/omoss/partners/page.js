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
        <div className={styles.partnerCard}>
          <Link href="https://ramberglaw.se/">
            <img
              src="/partners/ram_law_logoJpeg.jpg"
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

        <div className={styles.partnerCard}>
          <Link href="https://granathreklam.se/">
            <img
              src="/partners/granath.png"
              alt="Granath Reklam AB"
              className={styles.partnerImage}
            />
          </Link>
          <div className={styles.partnerContent}>
            <h3 className={styles.partnerTitle}>Granath Reklam AB</h3>
            <p className={styles.partnerDescription}>
              Granath hjälper Auxesis med kommunikation, reklam och
              varumärkesfrågor inför lansering av ASA.P®. Det är en
              fullservicebyrå som skapar distinkt kommunikation som når
              målgrupperna på ett effektivt och framgångsrikt sätt.
            </p>
            <Link href="https://granathreklam.se/">
              <button className={styles.partnerButton}>Mer om Granath</button>
            </Link>
          </div>
        </div>

        <div className={styles.partnerCard}>
          <Link href="https://regsmart.se/">
            <img
              src="/partners/reg.jpeg"
              alt="RegSmart Life Science AB"
              className={styles.partnerImage}
            />
          </Link>
          <div className={styles.partnerContent}>
            <h3 className={styles.partnerTitle}>RegSmart Life Science AB</h3>
            <p className={styles.partnerDescription}>
              RegSmart Life Science AB hjälper Auxesis med regulatoriska frågor
              kopplat till kommersialisering av ASA.P®. De navigerar i ett
              komplext och föränderligt regulatoriskt landskap.
            </p>
            <Link href="https://regsmart.se/">
              <button className={styles.partnerButton}>Mer om RegSmart</button>
            </Link>
          </div>
        </div>

        <div className={styles.partnerCard}>
          <Link href="https://zelmic.se/">
            <img
              src="/partners/zelmic.png"
              alt="Zelmic AB"
              className={styles.partnerImage}
            />
          </Link>
          <div className={styles.partnerContent}>
            <h3 className={styles.partnerTitle}>Zelmic AB</h3>
            <p className={styles.partnerDescription}>
              Zelmic utvecklar topikala och transdermala läkemedelsformuleringar
              och stödjer Auxesis formuleringar. De är ett erfaret, privatägt
              CRO och CDMO.
            </p>
            <Link href="https://zelmic.se/">
              <button className={styles.partnerButton}>Mer om Zelmic</button>
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
