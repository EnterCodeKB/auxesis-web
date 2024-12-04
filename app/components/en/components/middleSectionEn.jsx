import styles from "../styles/Middle.module.css";

export default function middleSection() {
  return (
    <>
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
              <h2>A team of medical expertise</h2>
              <p className={styles.ptext}>
                Auxesis Pharma is a public company focused on developing
                medications for humans and animals within the category of
                "localized pain and skin irritation." Auxesis possesses
                extensive expertise in research and development, as well as an
                experienced corporate management team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
