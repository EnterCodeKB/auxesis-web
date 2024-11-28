import React from "react";
import styles from "../../styles/Hallbarhet.module.css";

const Agenda = () => {
  return (
    <section>
      <div className={styles.section1}>
        <h1>Ansvar och transparens är avgörande</h1>
        <p className={styles.ptext}>
          Auxesis har ett transparent förhållningssätt och företaget ska tydligt
          redovisa sin påverkan på samhälle och miljö. Vidare har vi integrerat
          socialt ansvarstagande i kärnverksamheten. För oss är sociala och
          miljömässiga faktorer en del av affärsstrategin snarare än separata
          stuprörsinitiativ.
        </p>
        <p className={styles.ptext}>
          Grunden i Auxesis samlade hållbarhetsarbete är våra värderingar:
          nytänkande, pålitlighet och omtänksamhet. Värderingarna genomsyrar
          allt vi gör och uttrycks genom vårt hållbarhetsarbete på ett tydligt,
          genomtänkt och systematiskt sätt.{" "}
        </p>
      </div>
      <div className={styles.section2}>
        {" "}
        <h2>ISO-certifiering inom en snar framtid </h2>
        <p className={styles.ptext}>
          Under 2025 inleder Auxesis Pharma arbetet med ISO-certifiering för
          14001 (miljö) och 9001 (kvalitet). Det stärker vårt systematiska
          hållbarhetsarbete och gör att vi kan möta EU:s kommande regelverk för
          hållbarhet.
        </p>
        <p className={styles.ptext}>
          Förutom ISO-certifieringen ligger cirkulära flöden, våra värderingar
          och Agenda 2030:s målområden till grund för vår verksamhet.{" "}
        </p>
      </div>
      <div className={styles.section3}>
        {" "}
        <h2>Cirkulära flöden styr produktionen </h2>
        <p className={styles.ptext}>
          När Auxesis produktion startar kommer vi att arbeta i cirkulära flöden
          för att:{" "}
        </p>
        <ul>
          <li className={styles.divli}>Minimera materialanvändning.</li>
          <li className={styles.divli}>Öka andelen återvunnet material.</li>
          <li className={styles.divli}>Maximera avfallsåtervinning.</li>
          <li className={styles.divli}>
            Utveckla mätetal för förbättringsåtgärder.
          </li>
        </ul>
      </div>
      <div className={styles.section4}>
        {" "}
        <h2>Agenda 2030 är grunden </h2>
        <p className={styles.ptext}>
          Agenda 2030 har sju delområden som alla påverkar Auxesis verksamhet:
        </p>
        <ul>
          <li className={styles.divli}>
            Organisationsstyrning: Vi har ett etiskt och transparent ledarskap
            som uppmuntrar socialt ansvarstagande.
          </li>
          <li className={styles.divli}>
            Mänskliga rättigheter: Vi har respekt för alla individers
            grundläggande rättigheter, oavsett sammanhang.
          </li>
          <li className={styles.divli}>
            Arbetsvillkor: Vi prioriterar rättvisa och säkra arbetsförhållanden,
            inkludering och icke-diskriminering.
          </li>
          <li className={styles.divli}>
            Miljö: För tillverkning av läkemedel prioriterar vi aktiviteter för
            bevarande av miljön genom hållbara verksamhetsmetoder.
          </li>
          <li className={styles.divli}>
            God affärssed: Vi har en tydlig och genomarbetad etisk praxis,
            bekämpning av korruption och ansvarsfulla marknadsföringsmetoder.
          </li>
          <li className={styles.divli}>
            Konsumentfrågor: Vi prioriterar produkters och tjänsters säkerhet
            och kvalitet.
          </li>
          <li className={styles.divli}>
            Samhällsengagemang och utveckling: Vi ger bidrag till
            samhällsutveckling, ekonomiskt och socialt och vi deltar i olika
            frivillighetsorganisationer.{" "}
          </li>
        </ul>
      </div>

      <div>
        <img
          className={styles.imgbox}
          src="  /produkter/helhetssyn3.png"
          alt="Agenda Auxesis"
        />
      </div>
    </section>
  );
};

export default Agenda;
