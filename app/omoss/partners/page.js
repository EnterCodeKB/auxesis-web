"use client";
import styles from "../../styles/Partners.module.css";
import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Partners() {
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={styles.partnerssection}>
      <h1 className={styles.h1}>Välrenommerade partners</h1>
      <p className={styles.ptext}>
        Auxesis är i en uppstartfas där erfarna och specialiserade partners är
        avgörande för att snabbt komma i gång med verksamheten. Våra
        samarbetspartners finns inom en rad olika verksamhetsområden.{" "}
      </p>

      <div className={styles.partners}>
        <div className={styles.container}>
          <Link href="https://ramberglaw.se/">
            <img
              src="/partners/ram_law_logo.png"
              alt="ramberglaw"
              className={styles.image}
            />
          </Link>
          <div className={styles.content}>
            <h3 className={styles.title}>RAMBERG Advokater</h3>
            <div className={styles.description}>
              <p>
                Ramberg Advokater i Stockholm är en fullservicebyrå med
                spetskompetens inom flera rättsområden. Ramberg ger juridiskt
                stöd till Auxesis och hjälper till med affärsjuridik,
                varumärkesfrågor och alla typer av regulatoriska frågor kopplade
                till juridik över hela världen.
              </p>
              <div className={styles.itemsUrl}>www.ramberglaw.se</div>
            </div>

            <div>
              <Link href="https://ramberglaw.se/">
                <button
                  className={styles.infoButton}
                  onClick={() => handleInfoClick(itemsUrl)}
                >
                  Mer om Ramberg
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <Link href="https://www.iqvia.com/locations/nordics">
            <img
              src="/partners/sl.jpeg"
              alt="Läkemedelsstatistik"
              className={styles.image}
            />
          </Link>
          <div className={styles.content}>
            <h3 className={styles.title}>
              IQVIA och Svensk Läkemedelsstatistik
            </h3>
            <div className={styles.description}>
              <p>
                Iqvia och Svensk Läkemedelsstatistik tillhandahåller exakta och
                omfattande analyser av läkemedelsbranschen i Sverige och
                globalt. Genom noggranna analyser och skräddarsydda
                konsulttjänster erbjuds Auxesis värdefulla insikter för
                beslutsfattande inom hälso- och läkemedelssektorn. Expertisen
                sträcker sig från att förstå marknadsdata och
                försäljningsstatistik till att tillhandahålla Business
                Intelligence-lösningar.
              </p>

              <div className={styles.itemsUrl}>
                www.iqvia.com/locations/nordics
              </div>
            </div>
            <div>
              <Link href="https://www.iqvia.com/locations/nordics">
                <button
                  className={styles.infoButton}
                  onClick={() => handleInfoClick(itemsUrl)}
                >
                  Mer om IQVIA
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <Link href="https://granathreklam.se/">
            <img
              src="/partners/granath.png"
              alt="Granath"
              className={styles.image}
            />
          </Link>
          <div className={styles.content}>
            <h3 className={styles.title}>Granath Reklam AB</h3>
            <div className={styles.description}>
              <p>
                Granath hjälper Auxesis med kommunikation, reklam och
                varumärkesfrågor inför lansering av ASA.P®. Det är en
                fullservicebyrå som i en tid av brus och fragmentering som
                skapar distinkt kommunikation som når målgrupperna på ett
                effektivt och framgångsrikt sätt.
              </p>
              <div className={styles.itemsUrl}>www.granathreklam.se</div>

              <div>
                <Link href="https://granathreklam.se/">
                  <button
                    className={styles.infoButton}
                    onClick={() => handleInfoClick(itemsUrl)}
                  >
                    Mer om Granath
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <Link href="https://regsmart.se/">
            <img
              src="/partners/reg.jpeg"
              alt="regsmart"
              className={styles.image}
            />
          </Link>
          <div className={styles.content}>
            <h3 className={styles.title}>RegSmart Life Science AB</h3>
            <div className={styles.description}>
              <p>
                RegSmart Life Science AB hjälper Auxesis med regulatoriska
                frågor kopplat till kommersialisering av ASA.P®. Bolaget är en
                konsultfirma inom läkemedelsindustrin som hjälper sina kunder
                att navigera i ett komplext och föränderlig regulatoriskt
                landskap.
              </p>
              <div className={styles.itemsUrl}>www.regsmart.se</div>{" "}
            </div>
            <div>
              <Link href="https://regsmart.se/">
                {" "}
                <button
                  className={styles.infoButton}
                  onClick={() => handleInfoClick(itemsUrl)}
                >
                  Mer om RegSmart
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <Link href="https://zelmic.se/">
            <img
              src="/partners/zelmic.png"
              alt="Zelmic"
              className={styles.image}
            />
          </Link>
          <div className={styles.content}>
            <h3 className={styles.title}>Zelmic AB</h3>
            <div className={styles.description}>
              <p>
                Zelmic utvecklar topikala och transdermala
                läkemedelsformuleringar och stödjer och verifierar Auxesis
                formuleringar. Zelmic är ett erfaret, privatägt CRO (Contract
                Research Organisation) och CDMO (Contract Development and
                Manufacturing Organization).
              </p>

              <div className={styles.itemsUrl}>www.zelmic.se</div>
            </div>
            <div>
              <Link href="https://zelmic.se/">
                {" "}
                <button
                  className={styles.infoButton}
                  onClick={() => handleInfoClick(itemsUrl)}
                >
                  Mer om Zelmic
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <Link href="https://afry.com/sv">
            <img
              src="/partners/Afry.jpeg"
              alt="AFRY"
              className={styles.image}
            />
          </Link>
          <div className={styles.content}>
            <h3 className={styles.title}>AFRY</h3>
            <div className={styles.description}>
              <p>
                AFRY hjälper Auxesis i processen att planera och konstruera en
                hållbar produktionsmodell. AFRY är den företagsgrupp som stöttar
                Auxesis med allt mellan den pågående medicinska forskningen,
                Läkemedelsverket och uppförandet av den planerade fabriksenheten
                i Östersund.
              </p>

              <div className={styles.itemsUrl}>www.afry.com/sv </div>
            </div>
            <div>
              <Link href="https://afry.com/sv">
                <button
                  className={styles.infoButton}
                  onClick={() => handleInfoClick(itemsUrl)}
                >
                  Mer om AFRY
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <Link href="https://eip.com/global/">
            <img
              src="/partners/eip_logo_black.svg"
              alt="EIP"
              className={styles.image}
            />
          </Link>
          <div className={styles.content}>
            <h3 className={styles.title}>EIP</h3>
            <div className={styles.description}>
              <p>
                Auxesis samarbetar med EIP gällande patent för ASA.P® och andra
                kommande patentansökningar. EIP har bred och internationell en
                avgörande kompetens när det gäller att formulera bra
                patentansökningar över hela världen.
              </p>
              <div className={styles.itemsUrl}>www.eip.com/global</div>
              <div>
                <Link href="https://eip.com/global/">
                  {" "}
                  <button
                    className={styles.infoButton}
                    onClick={() => handleInfoClick(itemsUrl)}
                  >
                    Mer om EIP
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <Link href="https://edlundpartners.se/">
            <img
              src="/partners/edlund.png"
              alt="Edlund & Partners"
              className={styles.image}
            />
          </Link>
          <div className={styles.content}>
            <h3 className={styles.title}>Edlund & Partners</h3>
            <div className={styles.description}>
              <p>
                Auxesis har Edlund & Partners som revisionsfirma. Edlund &
                Partners har kompetens och erfarenhet och rätt att hjälpa bolag
                med börsnoteringar.
              </p>
              <div className={styles.itemsUrl}>www.edlundpartners.se</div>{" "}
            </div>

            <div>
              <Link href="https://edlundpartners.se/">
                <button
                  className={styles.infoButton}
                  onClick={() => handleInfoClick(itemsUrl)}
                >
                  Mer om E&P
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* OBS! För mer containers öppna det dolda nedan! */}

        {/*  <div className={styles.container}>
          <Link href="https://www.iqvia.com/locations/nordics">
            <img
              src="/partners/sl.jpeg"
              alt="Läkemedelsstatistik"
              className={styles.image}
            />
          </Link>
          <div className={styles.content}>
            <h3 className={styles.title}>
              IQVIA och Svensk Läkemedelsstatistik
            </h3>
            <div className={styles.description}>
              <p>
                Iqvia och Svensk Läkemedelsstatistik tillhandahåller exakta och
                omfattande analyser av läkemedelsbranschen i Sverige och
                globalt. Genom noggranna analyser och skräddarsydda
                konsulttjänster erbjuds Auxesis värdefulla insikter för
                beslutsfattande inom hälso- och läkemedelssektorn. Expertisen
                sträcker sig från att förstå marknadsdata och
                försäljningsstatistik till att tillhandahålla Business
                Intelligence-lösningar.
              </p>

              <div className={styles.itemsUrl}>
                https://www.iqvia.com/locations/nordics
              </div>
            </div>
            <div>
              <Link href="https://www.iqvia.com/locations/nordics">
                <button
                  className={styles.infoButton}
                  onClick={() => handleInfoClick(itemsUrl)}
                >
                  Mer om SL
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <Link href="https://granathreklam.se/">
            <img
              src="/partners/granath.png"
              alt="Granath"
              className={styles.image}
            />
          </Link>
          <div className={styles.content}>
            <h3 className={styles.title}>Granath Reklam AB</h3>
            <div className={styles.description}>
              <p>
                Granath hjälper Auxesis med kommunikation, reklam och
                varumärkesfrågor inför lansering av ASA.P®. Det är en
                fullservicebyrå som i en tid av brus och fragmentering som
                skapar distinkt kommunikation som når målgrupperna på ett
                effektivt och framgångsrikt sätt.
              </p>
              <div className={styles.itemsUrl}>https://granathreklam.se/</div>

              <div>
                <Link href="https://granathreklam.se/">
                  <button
                    className={styles.infoButton}
                    onClick={() => handleInfoClick(itemsUrl)}
                  >
                    Mer om Granath
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>*/}

        <div className={styles.scrollToTop} onClick={scrollToTop}>
          ⬆️
        </div>
      </div>
    </section>
  );
}
