"use client";
import styles from "../../styles/Press.module.css";
import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AuxesisMedia = () => {
  const router = useRouter();

  return (
    <section className={styles.huvuddiv}>
      <h1>Auxesis Pharma i media</h1>

      <section className={styles.press}>
        <div className={styles.media}>
          <div className={styles.container}>
            <Link href="https://www.di.se/pressreleaser/2025/08/19/gbc-investerar-i-auxesis-pharma-holding-ab-et-83bd0ebe-9330-5299-abcb-fee1f65be7cd/">
              <img
                src="/Nyheter/dagensindustri.jpeg"
                alt="DI"
                className={styles.image}
              />
            </Link>
            <div className={styles.content}>
              <h3 className={styles.title}>
                GBC investerar i Auxesis Pharma Holding AB - ett banbrytande
                bioteknikbolag inom smärtlindring
              </h3>
              <div className={styles.description}>
                <p>
                  Stockholm, 19/8-2025 - Growth By Capital Sweden AB (GBC) är
                  ett nytt men snabbt växande investeringsbolag som på kort tid
                  etablerat sig som en seriös aktör på den svenska
                  riskkapitalmarknaden. Efter en första investering i
                  energibolaget Etzy AB tar GBC nu nästa steg genom att gå in
                  som delägare i det innovativa bioteknikbolaget Auxesis Pharma
                  Holding AB (publ).
                </p>
                <div>
                  <Link href="https://www.di.se/pressreleaser/2025/08/19/gbc-investerar-i-auxesis-pharma-holding-ab-et-83bd0ebe-9330-5299-abcb-fee1f65be7cd/">
                    <button
                      className={styles.infoButton}
                      onClick={() => handleInfoClick(itemsUrl)}
                    >
                      Läs mer här
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <Link href="">
              <img
                src="/media/ostersunds-posten.svg"
                alt="Östersunds-posten"
                className={styles.image}
              />
            </Link>
            <div className={styles.content}>
              <h3 className={styles.title}>Östersunds Posten Sport</h3>
              <div className={styles.description}>
                <p>
                  Företaget som ska rädda ÖFK vill starta läkemedelstillverkning
                  i Östersund. Tanken är att fotbollsspelarna ska annonsera
                  smärtlindrande preparat. – Det är en bra metod för oss att bli
                  kända, både i kommunen och i Jämtland, säger företagsägaren
                  Roar Adelsten.
                </p>
              </div>
              <div>
                <Link href="/press/pdfmedia">
                  <button
                    className={styles.infoButton}
                    onClick={() => handleInfoClick(itemsUrl)}
                  >
                    Läs mer här
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <Link href="https://sverigesradio.se/artikel/ofk-donator-vill-bygga-fabrik-i-ostersund">
              <img
                src="/media/SR_P4_logo.svg.png"
                alt="P4"
                className={styles.image}
              />
            </Link>
            <div className={styles.content}>
              <h3 className={styles.title}>P4 Sveriges Radio Podcast</h3>
              <div className={styles.description}>
                <p>
                  Ett medicinskt företag som ger Östersund fotbollsklubb en stor
                  donation vill starta en fabrik i Östersund. – För en
                  smärtstillande produkt som vi hoppas få patent på snart, säger
                  företagets VD och grundare Roar Adelsten.
                </p>
                <div>
                  <Link href="https://sverigesradio.se/artikel/ofk-donator-vill-bygga-fabrik-i-ostersund">
                    <button
                      className={styles.infoButton}
                      onClick={() => handleInfoClick(itemsUrl)}
                    >
                      Läs mer här
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <Link href="https://idrottensaffarer.se/affarer/2023/08/i-ofk-ar-det-mesta-mojligt">
              <img
                src="/media/idrottensaffarer.png"
                alt="Idrottens Affärer"
                className={styles.image}
              />
            </Link>
            <div className={styles.content}>
              <h3 className={styles.title}>Idrottens Affärer</h3>
              <div className={styles.description}>
                <p>
                  – Vi ville hitta något som vi tror kan ge någon form av
                  avkastning i framtiden. Och så kom vi i kontakt med det här
                  företaget, Captigenics. Det är egentligen en ÖFK-supporter
                  baserad i Stockholm som varit konsult och jobbat åt dem. Det
                  är han som har kopplat oss, avslöjar Bengt Olofsson som också
                  uppger att det är ett medicinföretag som utvecklar produkter
                  för smärtlindring.
                </p>
              </div>
              <div>
                <Link href="https://idrottensaffarer.se/affarer/2023/08/i-ofk-ar-det-mesta-mojligt">
                  <button
                    className={styles.infoButton}
                    onClick={() => handleInfoClick(itemsUrl)}
                  >
                    Läs mer här
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
        </div>
      </section>
    </section>
  );
};

export default AuxesisMedia;
