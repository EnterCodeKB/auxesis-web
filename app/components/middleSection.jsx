import styles from "../styles/Middle.module.css";

export default function middleSection() {
  return (
    <>
      <div className={styles.div67}>
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
              <div className={styles.div71}>
                Ett team bestående av medicinsk expertis
              </div>
              <div className={styles.div72}>
                Auxesis Pharma är ett publikt företag som fokuserar på
                utveckling av läkemedel för människor och djur inom kategorin
                “lokal smärta och irritation på huden”. Auxesis har bred
                kompetens inom forskning och utveckling samt en erfaren
                företagsledning.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
