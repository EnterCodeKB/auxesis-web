"use client";
import styles from "../styles/Finance.module.css";

export default function Revision() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className={styles.revision}>
        <img
          loading="revision"
          src="/Finance/revisionberät.2023_Sida_1.jpg"
          className={styles.imgrevision}
        />
      </div>
      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </>
  );
}
