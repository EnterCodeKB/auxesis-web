"use client";

import styles from "../../../styles/ProduktCoxypet.module.css";
import BackArrow from "../../components/BackArrow";
import HeroPr from "../../components/HeroSectionPr";
export default function Coxypet() {
  return (
    <>
      <HeroPr />
      <section className={styles.sectionC}>
        <BackArrow />
        <div className={styles.contentSection}>
          <div className={styles.textBlock}>
            <h2 className={styles.h2}>
              A Natural and Innovative Remedy for Animals - CoxyPet®
            </h2>
            <p>
              There are more than 1.5 billion cattle, 960 million pigs, 600
              million horses, 900 million dogs, and 600 million cats worldwide.
              <br />
              The use of acetylsalicylic acid orally or by injection in
              veterinary medicine is strongly discouraged in many countries and
              is prohibited in some, including the United States and the United
              Kingdom.
            </p>
            <p>
              Livestock, including cows and pigs, are regularly treated with
              antibiotics as a preventive measure, leading to significant losses
              in milk and meat production during treatment.
            </p>
          </div>
          <img
            className={styles.image1}
            src="/produkter/theo2.png"
            alt="Hund Theo"
          />
        </div>

        <div className={styles.contentSection}>
          <img
            className={styles.image}
            src="/produkter/coxypet.png"
            alt="Coxypet"
          />
          <div className={styles.textBlock}>
            <h2 className={styles.h2}>Reduce the Use of Antibiotics</h2>
            <p>
              CoxyPet® offers natural and innovative solutions for animal
              medication. Skin pain can be treated with CoxyPet®, not only to
              relieve pain and reduce inflammation but also to improve animal
              welfare.
            </p>
            <p>
              The use of CoxyPet® through local application can reduce reliance
              on antibiotics and other medications, thereby helping to decrease
              antibiotic resistance and minimize climate and environmental
              impact.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.textBlock3}>
            <h2 className={styles.h2}>
              Great Potential with Multiple Benefits
            </h2>
            <p>
              CoxyPet® is based on groundbreaking research in veterinary
              medicine and contains several substances with curative effects.
              What makes CoxyPet® unique is that animal caretakers can apply the
              treatment themselves without the risk of overdosing, making it
              both safe and effective.
            </p>
            <p>
              This innovation represents a significant advancement in modern
              animal care and opens new opportunities to improve animal health
              in a sustainable way.
            </p>
          </div>
          <img
            className={styles.image}
            src="/kosan2024.png"
            alt="Ko på ängen"
          />
        </div>
      </section>
    </>
  );
}
