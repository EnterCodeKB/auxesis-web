import styles from "../styles/Middle.module.css";

export default function MiddleSection() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>
        AUXESIS PHARMA - FORSKNING OCH INNOVATION FÖR LOKAL SMÄRTLINDRING OCH
        HUDHÄLSA
      </h2>
      <div className={styles.content}>
        <div className={styles.videoContainer}>
          <video
            src="/team/Lobaratorium-video-1 (1).mov"
            alt="laboratory video"
            className={styles.video}
            controls
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.ptext}>
            Auxesis Pharma är ett publikt företag som fokuserar på att utveckla
            innovativa läkemedel för behandling av lokal smärta och irritation
            på huden, både för människor och djur. Med en gedigen bas av
            forskning och utveckling strävar företaget efter att leverera
            lösningar som förbättrar livskvaliteten och möter specifika behov på
            marknaden.
          </p>
          <p className={styles.ptext}>
            Vår styrka ligger i vår breda kompetens inom vetenskap och
            teknologi, kombinerat med en erfaren företagsledning som har djup
            förståelse för både branschen och marknadens dynamik.
          </p>
          <p className={styles.ptext}>
            Auxesis Pharma arbetar kontinuerligt för att skapa hållbara och
            effektiva lösningar som är framtagna på vetenskaplig grund.
          </p>
        </div>
      </div>
    </section>
  );
}
