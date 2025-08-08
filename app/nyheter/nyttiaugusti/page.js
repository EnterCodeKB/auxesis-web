"use client";

import { useRouter } from "next/navigation";
import styles from "../majnyheter/MajNyheter.module.css";

export default function Produktion() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.img3}
          src="/Nyheter/augusti2025.jpeg"
          alt="Augustinytt 2025"
        />
      </div>
      <h1 className={styles.title}>Nyhetsbrev – augusti 2025</h1>
      <h4 className={styles.date}>2025-08-08</h4>
      <h2 className={styles.subtitle}>
        <br /> <br />
      </h2>
      <p> Hej!</p>
      <p className={styles.text}>
        Sommaren börjar lida mot sitt slut och vi på AUXESIS PHARMA HOLDING AB
        (publ), drar igång med full kraft. Under sommaren har
        läkemedelsformuleringarna med tester fortsatt som vanligt. Denna process
        tar aldrig semester. Behovet av läkemedel som ASA.P är stort. Sommaren
        ser ut att ha varit både varm och blöt och det tycks nu på eftersommaren
        också vara en grogrund för bl a getingars och andra stickande insekters
        framfart.
      </p>
      <p className={styles.text}>
        På årsstämman i Auxesis Pharma så blev Magnus Larsson vald som ny
        ordförande. Han har bl.a suttit i styrelsen för Svenskt Näringsliv och
        är utbildad ekonom från Stockholms universitet med inriktning på
        redovisning och finansiering. Han har en lång och gedigen karriär bakom
        sig som entreprenör, företagsledare och strateg, och har sedan
        1980-talet haft ledande roller inom IT-branschen.
      </p>
      <p className={styles.text}>
        Eftersom Auxesis växer, så har företaget behov av ytterligare kompetens.
        Under Augusti får vi en ny anställd -Robert Lindh. Han har bred erfanhet
        som analytiker och har erfarenhet av informationshantering både i
        Sverige och internationellt. Robert vill bli en del av teamet för att
        jobba med research och stöd under VD och VVD. Robert har varit med ett
        tag som konsult och har arbetat mycket med Auxesis Animal Care AB.
        Auxesis Animal Care (Coxypet) kommer att växa nu i tiden framöver och då
        har vi Robert som stöd i denna process.
        <br /> <br />
        I slutet av september väntar vi på resultatet av vår sexmånaders
        läkemedelsstudier. Under hösten går vi in i effektstudier som givetvis
        är en av de viktigaste delarna i framtagningen av ett läkemedel.
        <br /> <br />
        Vi påbörjar inom kort pre-IPO processen. Revisionsfirman Edlund &
        Partners är den part vi avser ska vara vår kravställare i pre-IPO
        processen. Under hösten 2025 förväntas processen starta. En Pre-IPO
        betyder inte att vi är redo för att börsintroduseras, men pre-IPO är en
        granskning som utförs inför en noteringsprocess. Granskning går ut på
        att undersöka hur bolaget ligger till utifrån börsens krav på noterade
        bolag. Kort sagt, att göra en bedömning av om bolaget är börsfähigt.
        Granskningen mynnar ut i en rapport med vilka gap och brister som finns
        och vad som behöver åtgärdas för att leva upp till börsens krav. Detta
        kan sedan följas upp av ett separat projekt som går ut på att åtgärda de
        noterade gapen och bristerna för att bolaget ska vara börsfähigt.
      </p>
      <p className={styles.text}>
        Förprojekteringen av maskinparken för läkemedelsproduktion startas upp
        under hösten och produktionsmaskiner kommer så småningom att installeras
        i våra produktionslokaler i Östersund. För tillverkning av
        produktionsmaskiner har vi nu tecknat ett letter of intent med
        maskinfirman Höglunds Legotillverkning AB i Vallentuna. De har
        erfarenhet av att producera högtekonologiska maskindelar och koppla ihop
        mekanik, elektronik och montage till färdiga produktionsenheter. Här
        kommer vi också att GMP certifiera anläggningen vilket är ett krav från
        bl a Läkemedelsverket.
        <br /> <br />
        Vi kommer under hösten att flytta vårt huvudkontor i Stockholm till
        Karolinska Instiutet i Solna (Campus Solna) för att förutom
        kontorsplatser också få möjlighet att ligga närmare den medicinska
        professionen och samtidigt få tillgång till laboratoriekapacitet.
        <br /> <br />
        Förutom OTC med ASA.P börjar vi nu också diskussioner där vi genomför
        behovsanalyser och kliniska diskussioner om andra mer potenta och
        framtida receptbelagda preparat för b la svårare sårbehandlingar där vi
        har många patientindikationer som exempelvis hos cancerpatienter. Mer
        information om detta i kommande nyhetsbrev.
      </p>
      <p>
        <strong>
          Vänligen <br /> Peter Åberg <br /> VD, Auxesis Pharma AB
        </strong>
      </p>
    </div>
  );
}
