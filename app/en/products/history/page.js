"use client";
import { useEffect, useRef } from "react";
import HeroPr from "../../components/HeroSectionPr";

import styles from "../../../styles/ProduktHistorik.module.css";
import BackArrow from "../../components/BackArrow";

export default function Historik() {
  const animatedBoxRef = useRef(null);
  const effektRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // 10% synlighet
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (animatedBoxRef.current) observer.observe(animatedBoxRef.current);
    if (effektRef.current) observer.observe(effektRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <HeroPr />
      <section className={styles.produkthistorik}>
        <BackArrow mainLink="/en" label="Home" />

        <div className={styles.produktinfo}>
          <div className={styles.servettext}>
            <h1 className={styles.h1}>Groundbreaking Products</h1>
            <p className={styles.ptext}>
              Auxesis is developing multiple formulations that block pain
              signals to the brain, effectively eliminating pain on the skin.{" "}
              <br /> <br /> Our research focuses on products for human use, with
              potential applications for pets and livestock, though specific
              formulation adjustments may be required for different animal
              species. Additionally, the cosmetics and skincare industry
              represents another key target market.
            </p>
          </div>
        </div>

        <div className={styles.produktinfo1}>
          <h2 className={styles.h2}>Auxesis Stabilizes ASA in Liquid Form</h2>
          <div className={styles.divasa}>
            <p className={styles.ptext}>
              Acetylsalicylic acid (ASA) is one of the most well-known
              pain-relieving substances and has been used in medications since
              the late 1800s, including Treo, Bamyl, and Aspirin.
              <br /> <br /> After years of research and thousands of trials,
              Auxesis, in collaboration with Professor Moustapha Hassan and his
              team, has achieved what no one else has done before: stabilizing
              ASA in liquid form.
              <br /> <br />
              With liquid ASA, entirely new formulations can be developed,
              allowing for easy direct application to the skin, effectively
              relieving pain or irritation within minutes. By adding other
              pharmaceutically active substances, the effect is sustained until
              the body has healed itself. Studies indicate that the substance
              remains on the skin and does not enter the bloodstream.
            </p>

            <div className={styles.handsdiv}>
              <img
                className={styles.hands}
                src="/produkter/hands12.png"
                alt="Händerna "
              />
            </div>
          </div>
        </div>

        <div className={styles.animations}>
          <div
            ref={animatedBoxRef}
            className={`${styles.animatedBox} ${styles.hidden} text-xl leading-tight border-2 border-gray-500 p-6 rounded-lg shadow-lg bg-gray-100`}
          >
            <h3>The History of Acetylsalicylic Acid (ASA)</h3>
            <p className={styles.ptext}>
              In herbal medicine, salicylic acid—a natural compound related to
              synthetic aspirin—has been used since ancient times, dating back
              at least to 2500 BCE. It is extracted from plants such as myrtle,
              willow, and meadowsweet.
              <br />
              <br /> In 1897, Dr. Felix Hoffmann, a German scientist at
              Friedrich Bayer & Co., successfully synthesized acetylsalicylic
              acid (ASA) for oral use for the first time. <br />
              This breakthrough marked the birth of both Aspirin and the modern
              pharmaceutical industry.
            </p>
          </div>

          <div
            ref={effektRef}
            className={`${styles.animatedBox} ${styles.hidden} text-xl leading-tight border-2 border-gray-500 p-6 rounded-lg shadow-lg bg-gray-100`}
          >
            <h3>How Aspirin and Other Anti-Inflammatory Drugs Work</h3>
            <p className={styles.ptext}>
              In the 1970s, researchers discovered that damage to human tissue
              triggers the release of prostaglandins—hormone-like molecules that
              cause fever and inflammation.
              <br />
              They also found that aspirin blocks the production of these
              molecules, though the exact mechanism was initially unclear.
              <br />
              <br /> Other anti-inflammatory drugs, such as Ibuprofen and
              Naproxen, work by physically blocking enzyme channels rather than
              chemically altering them.
            </p>
          </div>
        </div>
        <div className={styles.sistadiv}>
          <h2>What Is Skin Pain and How Does the Body React?</h2>
          <p className={styles.ptext}>
            The nerve pathways that connect the peripheral nervous system to the
            brain transport information from various sensory receptors, which
            the brain processes into sensations.
          </p>
          <p className={styles.ptext}>
            These pathways, known as sensory nerves, transmit signals related to
            touch, heat, cold, and pain.
          </p>
          <p className={styles.ptext}>
            A fundamental characteristic of the first-order neurons in the
            tactile system—which extend into the skin to detect touch—is that
            each neuron’s fiber branches out, forming multiple sensitive zones
            across the skin.
          </p>
          <p className={styles.ptext}>
            The skin, along with nearly the entire body, contains pain receptors
            that respond to heat, cold, inflammation, and injury. These
            receptors send signals through nerve cells to the brain, where the
            information is transmitted as electrical impulses.
          </p>
        </div>
        <div className={styles.allaprodukter}>
          <img
            className={styles.imgallaprodukter}
            src="/produkter/allaprodukter.png"
            alt="ASA.P produkter"
          />
        </div>
      </section>
    </>
  );
}
