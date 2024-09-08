"use client";
import styles from "../styles/Finance.module.css";

export default function Protokol() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className={styles.protokol}>
        <img
          loading="protokol"
          src="/Protokoll-Arsstamma-Auxesis-2023/1724271742284-b8619053-9216-41dc-89c2-44c6d549763a_1.jpg"
          className={styles.imgprotokol}
        />
        <img
          loading="protokol"
          src="/Protokoll-Arsstamma-Auxesis-2023/1724271742284-b8619053-9216-41dc-89c2-44c6d549763a_2.jpg"
          className={styles.imgprotokol}
        />
        <img
          loading="protokol"
          src="/Protokoll-Arsstamma-Auxesis-2023/1724271742284-b8619053-9216-41dc-89c2-44c6d549763a_3.jpg"
          className={styles.imgprotokol}
        />
        <img
          loading="protokol"
          src="/Protokoll-Arsstamma-Auxesis-2023/1724271742284-b8619053-9216-41dc-89c2-44c6d549763a_4.jpg"
          className={styles.imgprotokol}
        />
        <img
          loading="protokol"
          src="/Protokoll-Arsstamma-Auxesis-2023/1724271742284-b8619053-9216-41dc-89c2-44c6d549763a_5.jpg"
          className={styles.imgprotokol}
        />
        <img
          loading="protokol"
          src="/Protokoll-Arsstamma-Auxesis-2023/1724271742284-b8619053-9216-41dc-89c2-44c6d549763a_6.jpg"
          className={styles.imgprotokol}
        />
      </div>
      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </>
  );
}
