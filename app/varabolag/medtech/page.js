"use client";
import styles from "../../styles/Bolag.module.css";

export default function MedTech() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className={styles.medtech}>
        <h2 className={styles.h2}>Auxesis MedTech AB</h2>
        <h3 className={styles.h3}>Vår historia i korthet</h3>
        <p className={styles.ptext}>
          Auxesis MedTech AB grundades 2024 och ingår i Auxesis Pharma Holding
          AB. Auxesis MedTech AB kommer inledningsvis inneha
          prototyptillverkning och licensen för att producera och marknadsföra
          våra medicinska produkter i Norden och licenser för resten av världen.
        </p>
        <h3 className={styles.h3}>Toppmodern fabrik</h3>
        <p className={styles.ptext}>
          Auxesis MedTech AB kommer att fokusera på att sälja och marknadsföra
          ASA.P® och Coxypet-produkterna. För att säkerställa högsta möjliga
          standard och effektivitet etablerar vi en egen fabrik i Östersund.
          Fabriken skräddarsys för att producera våra egna produkter. Genom att
          ha full kontroll över produktionsprocessen kan vi garantera en unik
          och anpassad kvalitet av våra produkter samt kontrollerade leveranser.
        </p>
        <img
          className={styles.imgprodukt}
          src="/produkter/ASAP-productline2-scaled.jpg"
          alt=""
        />
      </div>
      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </>
  );
}
