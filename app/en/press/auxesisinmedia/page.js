"use client";
import styles from "../../../styles/Press.module.css";
import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AuxesisMedia = () => {
  const router = useRouter();

  return (
    <section className={styles.huvuddiv}>
      <h1>Auxesis Pharma in the Media</h1>

      <section className={styles.press}>
        <div className={styles.media}>
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
                  The company aiming to save ÖFK plans to start pharmaceutical
                  production in Östersund. The idea is for football players to
                  advertise pain-relief products. “It is a great way for us to
                  gain recognition, both in the municipality and in Jämtland,”
                  says company owner Roar Adelsten.
                </p>
              </div>
              <div>
                <Link href="/press/pdfmedia">
                  <button
                    className={styles.infoButton}
                    onClick={() => handleInfoClick(itemsUrl)}
                  >
                    Read more here
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
                  A medical company that is making a large donation to Östersund
                  Football Club plans to establish a factory in Östersund. “For
                  a pain-relief product that we hope to patent soon,” says the
                  company’s CEO and founder, Roar Adelsten.
                </p>
                <div>
                  <Link href="https://sverigesradio.se/artikel/ofk-donator-vill-bygga-fabrik-i-ostersund">
                    <button
                      className={styles.infoButton}
                      onClick={() => handleInfoClick(itemsUrl)}
                    >
                      Read more here
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <Link href="https://idrottensaffarer.se/affarer/2023/08/i-ofk-ar-det-mesta-mojligt">
              <img
                src="/media/idrottensaffärer.png"
                alt="Idrottens Affärer"
                className={styles.image}
              />
            </Link>
            <div className={styles.content}>
              <h3 className={styles.title}>Idrottens Affärer</h3>
              <div className={styles.description}>
                <p>
                  “We wanted to find something that we believe could generate a
                  return in the future. Then we came into contact with this
                  company, Captigenics. It was actually an ÖFK supporter based
                  in Stockholm who worked as a consultant for them. He was the
                  one who connected us,” reveals Bengt Olofsson, who also states
                  that it is a pharmaceutical company developing pain-relief
                  products.
                </p>
              </div>
              <div>
                <Link href="https://idrottensaffarer.se/affarer/2023/08/i-ofk-ar-det-mesta-mojligt">
                  <button
                    className={styles.infoButton}
                    onClick={() => handleInfoClick(itemsUrl)}
                  >
                    Read more here
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
