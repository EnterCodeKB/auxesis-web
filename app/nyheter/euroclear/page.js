import styles from "../../styles/Info.module.css";

export default function Euroclear() {
  return (
    <div className={styles.details}>
      <h1> Euroclear​</h1>
      <h4>2023-08-18</h4>
      <p className={styles.ptext}>
        AUXESIS PHARMA HOLDING AB (publ) är nu avstämningsbolag och igång med
        Euroclear Sweden AB som värdepappersinstitut. Detta är sista fasen,
        enligt ABL, på vägen mot börsnotering och nu ska vi välja vilken
        Corporate Finance grupp vi kommer att samarbeta med, för att ta oss dit.
      </p>
      <p className={styles.ptext}>
        nu med att registrera företagets aktionärer i Euroclear systemet. Som
        kund hos Euroclear Sweden blir Auxesis Pharma en del av navet i den
        svenska finansmarknaden. När bolagets aktier är registrerade hos
        Euroclear digitaliseras aktieboken och flyttas över till deras system.
        Förutom att det är en förutsättning om Auxesis Pharma vill börsnoteras i
        framtiden, innebär det också flera fördelar. Ett avstämningsbolag är ett
        aktiebolag vars bolagsordning innehåller villkor om att bolagets aktier
        ska vara registrerade i ett avstämningsregister hos en
        värdepapperscentral. Anledningen till att ett bolag väljer att bli ett
        avstämningsbolag är ofta att bolaget önskar införas på en marknadsplats
        såsom börsmarknaden.  www.euroclear.com/sweden/
      </p>
      <div className={styles.articlesimage}>
        <img
          className={styles.image1}
          src="/Nyheter/euroclear-logo.png"
          alt="Euroclear"
        />
      </div>
    </div>
  );
}
