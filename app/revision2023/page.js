"use client";
import styles from "./index.module.css";

export default function Revision() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className={styles.container}>
        <img
          loading="lazy"
          src="/Finance/revisionberät.2023_Sida_1.jpg"
          alt="Revisionsberättelse 2023"
          className={styles.image}
        />
      </section>
      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </>
  );
}
