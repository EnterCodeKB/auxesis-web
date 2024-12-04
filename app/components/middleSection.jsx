import styles from "../styles/Middle.module.css";

export default function MiddleSection() {
  return (
    <section className={styles.div67}>
      <div className={styles.div68}>
        <div className={styles.column9}>
          <video
            src="/team/Lobaratorium-video-1 (1).mov"
            alt="laboratory video"
            className={styles.img15}
            controls
            autoPlay
            loop
            muted
          ></video>
        </div>

        <div className={styles.column}>
          <div className={styles.div69}>
            <h2>Ett team bestående av medicinsk expertis</h2>
            <p className={styles.ptext}>
              Auxesis Pharma är ett publikt företag som fokuserar på utveckling
              av läkemedel för människor och djur inom kategorin “lokal smärta
              och irritation på huden”. Auxesis har bred kompetens inom
              forskning och utveckling samt en erfaren företagsledning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
