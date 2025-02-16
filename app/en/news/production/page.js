"use client";

import { useRouter } from "next/navigation";
import styles from "./index.module.css";

export default function Produktion() {
  const router = useRouter();

  const handleInfoClick = () => {
    router.push(
      "https://www.op.se/2024-09-21/raddade-ofk-nu-har-lakemedelsforetaget-hittat-lokal/"
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.img1}
          src="/Nyheter/ostersund_web-scaled.jpg"
          alt="Östersund"
        />
      </div>
      <h1 className={styles.title}>
        Auxesis MedTech AB tecknade avtal om en ny produktionsanläggning i
        Östersund
      </h1>
      <h4 className={styles.date}>2024-09-21</h4>
      <h2 className={styles.subtitle}>
        Den 17 september 2024 besökte Auxesis Östersund för att skriva på
        kontraktet för den lokal som ska bli Auxesis produktionsanläggning.
      </h2>
      <p className={styles.text}>
        – Närmsta året kommer vi använda till att få allting på plats så att vi
        därefter kan komma i gång med produktionen, säger vd:n Roar Adelsten
        till tidningen Östersunds-Posten. Fabrikslokalerna är omkring 600
        kvadratmeter som ska anpassas efter Auxesis behov och krav på
        fabrikslokaler för läkemedelsproduktion. Hyresvärd är Persson Invest
        Fastigheter i Östersund.
      </p>
      <h2 className={styles.subtitle}>Många arbetstillfällen</h2>
      <p className={styles.text}>
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
      <h2 className={styles.subtitle}>Den nya etableringen engagerar</h2>
      <p className={styles.text}>
        Att ha produktion och laboratorium på en ort utanför Stockholm har klara
        fördelar anser vd Roar Adelsten som ser fram emot pionjärandan och
        engagemanget för det nya Life Science-bolaget i Östersund.
      </p>
      <button className={styles.infoButton} onClick={handleInfoClick}>
        Läs mer på ÖP
      </button>
      <div className={styles.imageContainer}>
        <img
          className={styles.img2}
          src="/Nyheter/entrelokal.jpeg"
          alt="Östersunds Auxesis MedTech AB lokal"
        />
      </div>
    </div>
  );
}
