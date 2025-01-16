"use client";

import styles from "./index.module.css";
import Link from "next/link";
import BackArrow from "../../components/BackArrow";

export default function Partners() {
  const partnersData = [
    {
      name: "RAMBERG Advokater",
      link: "https://ramberglaw.se/",
      image: "/partners/ram_law_logoJpeg.jpg",
      description:
        "Ramberg Advokater i Stockholm är en fullservicebyrå med spetskompetens inom flera rättsområden. Ramberg ger juridiskt stöd till Auxesis och hjälper till med affärsjuridik, varumärkesfrågor och alla typer av regulatoriska frågor kopplade till juridik över hela världen.",
    },
    {
      name: "IQVIA och Svensk Läkemedelsstatistik",
      link: "https://www.iqvia.com/locations/nordics",
      image: "/partners/sl.jpeg",
      description:
        "Iqvia och Svensk Läkemedelsstatistik tillhandahåller exakta och omfattande analyser av läkemedelsbranschen i Sverige och globalt. Genom noggranna analyser och skräddarsydda konsulttjänster erbjuds Auxesis värdefulla insikter för beslutsfattande.",
    },
    {
      name: "Granath Reklam AB",
      link: "https://granathreklam.se/",
      image: "/partners/granath.png",
      description:
        "Granath hjälper Auxesis med kommunikation, reklam och varumärkesfrågor inför lansering av ASA.P®. Det är en fullservicebyrå som skapar distinkt kommunikation som når målgrupperna på ett effektivt och framgångsrikt sätt.",
    },
    {
      name: "RegSmart Life Science AB",
      link: "https://regsmart.se/",
      image: "/partners/reg.jpeg",
      description:
        "RegSmart Life Science AB hjälper Auxesis med regulatoriska frågor kopplat till kommersialisering av ASA.P®. De navigerar i ett komplext och föränderligt regulatoriskt landskap.",
    },
    {
      name: "Zelmic AB",
      link: "https://zelmic.se/",
      image: "/partners/zelmic.png",
      description:
        "Zelmic utvecklar topikala och transdermala läkemedelsformuleringar och stödjer Auxesis formuleringar. De är ett erfaret, privatägt CRO och CDMO.",
    },
    {
      name: "AFRY",
      link: "https://afry.com/sv",
      image: "/partners/Afry.jpeg",
      description:
        "AFRY hjälper Auxesis i processen att planera och konstruera en hållbar produktionsmodell. AFRY stöttar Auxesis med medicinsk forskning, Läkemedelsverket och uppförandet av fabriksenheten i Östersund.",
    },
    {
      name: "EIP",
      link: "https://eip.com/global/",
      image: "/partners/eip_logo_black.svg",
      description:
        "Auxesis samarbetar med EIP gällande patent för ASA.P® och andra kommande patentansökningar. EIP har bred och internationell kompetens när det gäller att formulera bra patentansökningar över hela världen.",
    },
    {
      name: "Edlund & Partners",
      link: "https://edlundpartners.se/",
      image: "/partners/edlundJpeg.jpg",
      description:
        "Auxesis har Edlund & Partners som revisionsfirma. Edlund & Partners har kompetens och erfarenhet och rätt att hjälpa bolag med börsnoteringar.",
    },
  ];

  return (
    <section className={styles.partnersSection}>
      <BackArrow mainLink="/omoss" label="Om Oss" />

      <h1 className={styles.title}>Välrenommerade partners</h1>
      <p className={styles.description}>
        Auxesis är i en uppstartfas där erfarna och specialiserade partners är
        avgörande för att snabbt komma i gång med verksamheten. Våra
        samarbetspartners finns inom en rad olika verksamhetsområden.
      </p>

      <div className={styles.partnersGrid}>
        {partnersData.map((partner, index) => (
          <div key={index} className={styles.partnerCard}>
            <Link href={partner.link}>
              <img
                src={partner.image}
                alt={partner.name}
                className={styles.partnerImage}
              />
            </Link>
            <div className={styles.partnerContent}>
              <h3 className={styles.partnerTitle}>{partner.name}</h3>
              <p className={styles.partnerDescription}>{partner.description}</p>
              <Link href={partner.link}>
                <button className={styles.partnerButton}>
                  Mer om {partner.name}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
