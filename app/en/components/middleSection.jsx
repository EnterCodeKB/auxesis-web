import styles from "../../styles/Middle.module.css";

export default function MiddleSection() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>
        AUXESIS PHARMA – RESEARCH AND INNOVATION FOR LOCAL PAIN RELIEF AND SKIN
        HEALTH
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
            Auxesis Pharma is a publicly traded company dedicated to developing
            innovative pharmaceuticals for the treatment of localized pain and
            skin irritation in both humans and animals. With a strong foundation
            in research and development, the company strives to deliver
            solutions that enhance quality of life and address specific market
            needs.
          </p>
          <p className={styles.ptext}>
            Our strength lies in our extensive expertise in science and
            technology, combined with an experienced leadership team that
            possesses a deep understanding of both the industry and market
            dynamics.
          </p>
          <p className={styles.ptext}>
            Auxesis Pharma is committed to continuously developing sustainable
            and effective solutions based on scientific principles.
          </p>
        </div>
      </div>
    </section>
  );
}
