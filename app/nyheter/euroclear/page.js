"use client";
import styles from "./index.module.css";

export default function Euroclear() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Euroclear</h1>
      <h4 className={styles.date}>2023-08-18</h4>
      <p className={styles.text}>
        AUXESIS PHARMA HOLDING AB (publ) är nu avstämningsbolag och igång med
        Euroclear Sweden AB som värdepappersinstitut. Detta är sista fasen,
        enligt ABL, på vägen mot börsnotering och nu ska vi välja vilken
        Corporate Finance grupp vi kommer att samarbeta med, för att ta oss dit.
      </p>
      <p className={styles.text}>
        Nu med att registrera företagets aktionärer i Euroclear systemet. Som
        kund hos Euroclear Sweden blir Auxesis Pharma en del av navet i den
        svenska finansmarknaden. När bolagets aktier är registrerade hos
        Euroclear digitaliseras aktieboken och flyttas över till deras system.
        Förutom att det är en förutsättning om Auxesis Pharma vill börsnoteras i
        framtiden, innebär det också flera fördelar. Ett avstämningsbolag är ett
        aktiebolag vars bolagsordning innehåller villkor om att bolagets aktier
        ska vara registrerade i ett avstämningsregister hos en
        värdepapperscentral. Anledningen till att ett bolag väljer att bli ett
        avstämningsbolag är ofta att bolaget önskar införas på en marknadsplats
        såsom börsmarknaden.
        <a
          className={styles.link}
          href="https://www.euroclear.com/sweden/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.euroclear.com/sweden/
        </a>
      </p>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="/Nyheter/euroclear-logo.png"
          alt="Euroclear"
        />
      </div>
    </div>
  );
}
