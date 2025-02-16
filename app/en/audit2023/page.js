"use client";
import styles from "./index.module.css";

export default function Revision() {
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
    </>
  );
}
