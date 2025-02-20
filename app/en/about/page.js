"use client";
import { useEffect, useRef } from "react";
import styles from "./about.module.css";
import BackArrow from "../components/BackArrow";

export default function About() {
  const animatedBoxRef = useRef(null);
  const animatedBoxRef2 = useRef(null);

  const imgspelRef = useRef(null);
  const effektRef = useRef(null);
  const visionRef = useRef(null);
  const beeRef = useRef(null);

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
    if (animatedBoxRef2.current) observer.observe(animatedBoxRef2.current);

    if (imgspelRef.current) observer.observe(imgspelRef.current);
    if (effektRef.current) observer.observe(effektRef.current);
    if (visionRef.current) observer.observe(visionRef.current);
    if (beeRef.current) observer.observe(beeRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section className={styles.omoss}>
        <h1 className={styles.h1div}>A Pharmaceutical Game-Changer</h1>
        <h2 className={styles.h2div}>Auxesis' Business Idea</h2>
        <p
          ref={animatedBoxRef}
          className={`${styles.animatedBox} ${styles.hidden}`}
        >
          AUXESIS DEVELOPS, BASED ON ITS OWN PATENT, INOVATIVE MEDECINES THAT
          QUICKLY REMOVE PAIN AND IRRITATION ON THE SKIN OF BOTH HUMANS AND
          ANIMALS AND THAT ARE EASILY ACCESSIBLE TO CONSUMERS AND VARIOUS
          PROFESSIONAL GROUPS.
        </p>
        <br />
        <p className={styles.ptext}>
          AUXESIS PHARMA HOLDING AB (publ), hereafter “Auxesis”, is a public
          company focused on the development of human and animal pharmaceuticals
          in the category of local skin pain and irritation.
        </p>
        <BackArrow mainLink="/en" label="Home" />

        <h2 className={styles.subHeading}>
          Unique Innovation That Blocks The Pain
        </h2>
        <p className={styles.ptext}>
          After years of research and thousands of trials, Auxesis, together
          with Professor Moustapha Hassan and his team at Karolinska Institutet,
          Stockholm, have managed to do what no one else has done before;
          stabilise Acetylsalicylic Acid (ASA) in liquid form, allowing it to be
          applied to the skin.
        </p>
        <p className={styles.ptext}>
          Currently, there are two trademarks registered globally; ASA.P® and
          CoxyPet®.
        </p>
        <p className={styles.ptext}>
          ASA.P® is the first over-the-counter consumer product that quickly
          removes pain and irritation on the skin.
        </p>
        <div className={styles.flexContainer}>
          <div ref={imgspelRef} className={styles.imgdiv}>
            <img
              ref={beeRef}
              className={`${styles.bee} ${styles.hidden}`}
              src="/bin.png"
              alt="Bee"
            />
          </div>
          <div ref={effektRef} className={`${styles.effekt} ${styles.hidden}`}>
            <h2 className={styles.h2}>Over-The-Counter Consumer Product</h2>
            <p className={styles.ptext}>
              ASA.P® is an over-the-counter medicine for human use to treat pain
              and irritation on the skin caused by insect bites, jellyfish,
              stinging nettles and other allergenic plants, minor burns,
              sunburn, rashes and eczema.
              <br /> <br />
              ASA.P® is the first over-the-counter consumer product that quickly
              removes pain and irritation on the skin:
            </p>
            <li> Quick effect, pain gone within minutes.</li>
            <li>One application is enough.</li>
            <li>
              Blocks the pain with rapid effect until the body has healed
              itself.
            </li>
            <li>Anti-inflammatory</li>
          </div>
        </div>
      </section>

      <section className={styles.omoss2}>
        <h2 className={styles.h2div}>Vision</h2>
        <p
          ref={animatedBoxRef2}
          className={`${styles.animatedBox2} ${styles.hidden}`}
        >
          {" "}
          TO REDEFINE THE PHARMACEUTICAL CATEGORY OF PAIN AND SKIN IRRITATION
          WITH SCIENCE AS THE DOUNDATION
        </p>

        <div>
          <p className={styles.ptext}>
            Acetylsalicylic acid (ASA) is one of the most well-known substances
            for pain relief and has been used in pharmaceuticals since the late
            19th century, including in Treo, Bamyl, and Aspirin.
          </p>

          <p className={styles.ptext}>
            After years of research and thousands of trials, Auxesis, together
            with Professor Moustapha Hassan and his team, has achieved what no
            one else has before: stabilizing ASA in liquid form.
          </p>
          <p className={styles.ptext}>
            With ASA in liquid form, there are new possibilities to develop
            entirely new formulations that can be easily applied directly to the
            skin, eliminating pain or irritation within minutes by blocking the
            pain signal to the brain. By adding other pharmaceutically active
            substances, the effect is maintained until the body has healed
            itself. Studies indicate that ASA.P remains on the skin and does not
            enter the bloodstream.
          </p>
          <p className={styles.ptext}>
            Based on proprietary patents, Auxesis is the first to develop
            innovative and accessible pharmaceuticals that not only relieve but
            rapidly eliminate pain and irritation on the skin.
          </p>
        </div>
      </section>
    </>
  );
}
