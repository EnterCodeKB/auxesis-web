"use client"; // Se till att komponenten körs på klienten

import { useRouter } from "next/navigation"; // Korrekt import för App Router
import styles from "../produktion/index.module.css";

export default function Produktion() {
  const router = useRouter(); // Fortsätt använda useRouter från next/navigation

  const handleInfoClick = () => {
    router.push(
      "https://www.op.se/2024-09-21/raddade-ofk-nu-har-lakemedelsforetaget-hittat-lokal/"
    );
  };

  return (
    <div className={styles.details}>
      <img
        className={styles.img1}
        src="/Nyheter/ostersund_web-scaled.jpg"
        alt="Östersund"
      />
      <h1>
        Auxesis MedTech AB tecknade avtal om en ny produktionsanläggning i
        Östersund
      </h1>
      <h4>2024-09-21</h4>
      <h2 className={styles.h2}>
        Den 17 september 2024 besökte Auxesis Östersund för att skriva på
        kontraktet för den lokal som ska bli Auxesis produktionsanläggning.
      </h2>
      <p>
        – Närmsta året kommer vi använda till att få allting på plats så att vi
        därefter kan komma i gång med produktionen, säger vd:n Roar Adelsten
        till tidningen Östersunds-Posten. Fabrikslokalerna är omkring 600
        kvadratmeter som ska anpassas efter Auxesis behov och krav på
        fabrikslokaler för läkemedelsproduktion. Hyresvärd är Persson Invest
        Fastigheter i Östersund.
      </p>
      <h2>Många arbetstillfällen</h2>
      <p>
        Östersunds-Posten beskriver hur Auxesis planerar för tvåskiftsproduktion
        med 12-14 personer som jobbar per skift för att producera 27 000
        produkter varje dygn när produktionen är i full drift. Tidningen
        konstaterar att det kommer att bli en hel del arbetstillfällen för
        Östersunds kommun, och Auxesis CFO Lars Larsson svarar: – Ja,
        maskinproduktionen kommer behöva övervakning. Sedan kommer det bli
        logistiktjänster eftersom vi kommer ha lager här. Och så blir det ett
        laboratorium, där vätskorna som ska in i maskinen ska förberedas, säger
        Larsson.
      </p>
      <h2>Den nya etableringen engagerar</h2>
      <p>
        Att ha produktion och laboratorium på en ort utanför Stockholm har klara
        fördelar anser vd Roar Adelsten som ser fram emot pionjärandan och
        engagemanget för det nya Life Science-bolaget i Östersund.
      </p>
      <button className={styles.infoButton} onClick={handleInfoClick}>
        Läs mer på ÖP
      </button>
      <div className={styles.articlesimage}>
        <img
          className={styles.image2}
          src="/Nyheter/entrelokal.jpeg"
          alt="Östersunds Auxesis MedTech AB lokal"
        />
      </div>
    </div>
  );
}
