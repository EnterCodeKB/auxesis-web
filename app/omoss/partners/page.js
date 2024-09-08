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
    <div className={styles.partners}>
      <h2 className={styles.rubrik}>Våra Partners</h2>

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
              Vi är en fullservicebyrå med spetskompetens inom flera
              rättsområden och branscher. Vi erbjuder kvalificerad
              affärsjuridisk rådgivning till företag och offentlig sektor.
              Rambergs klienter utgörs i huvudsak av svenska och internationella
              publika och privata bolag, branschorganisationer, svenska
              försäkringsbolag, riskkapitalfonder, landsting, kommuner,
              myndigheter och offentliga organisationer liksom offentliga bolag.
              Vår utgångspunkt är alltid klientens intressen och vi ska vara ett
              självklart verktyg i klientens verksamhet. Vår rådgivning ska i
              varje ärende bidra till klientens affär. https://ramberglaw.se/
            </p>
            <div className={styles.itemsUrl}>https://ramberglaw.se/</div>
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
          <h3 className={styles.title}>Svensk Läkemedelsstatistik</h3>
          <div className={styles.description}>
            <p>
              På Svensk Läkemedelsstatistik är vi dedikerade till att
              tillhandahålla exakta och omfattande analyser av
              läkemedelsbranschen i Sverige. Genom noggranna analyser och
              skräddarsydda konsulttjänster erbjuder vi värdefulla insikter för
              beslutsfattare inom hälso- och läkemedelssektorn. Vår expertis
              sträcker sig från att förstå marknadsdata och
              försäljningsstatistik till att tillhandahålla business
              intelligence-lösningar. Tillsammans strävar vi mot en mer
              informerad och innovativ framtid inom läkemedelsområdet.
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
              Granath är en fullservicebyrå, som i en tid av brus och
              fragmentering, skapar distinkt kommunikation som når våra
              viktigaste beslutsfattare – magen och hjärtat.
            </p>
            <div className={styles.itemsUrl}>https://granathreklam.se/</div>
          </div>
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
              RegSmart Life Science AB är en konsultfirma inom
              läkemedelsindustrin som hjälper sina kunder att navigera i ett
              komplext och föränderlig regulatoriskt landskap.
            </p>
            <div className={styles.itemsUrl}>https://regsmart.se/</div>
          </div>
          <div>
            <Link href="https://regsmart.se/">
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
              AFRY skapar hållbara ingenjörs- och designlösningar för att
              accelerera övergången till ett hållbart samhälle. AFRY kombinerar
              olika teknologier för att skapa utveckling och hållbara lösningar.
            </p>
            <div className={styles.itemsUrl}>https://zelmic.se/</div>
          </div>
          <div>
            <Link href="https://zelmic.se/">
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

      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </div>
  );
}
