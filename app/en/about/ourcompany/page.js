"use client";
import styles from "./ourcompany.module.css";
import React, { useEffect, useRef } from "react";
import BackArrow from "../../components/BackArrow";

export default function Bolag() {
  const bolagRefs = useRef([]);

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

    bolagRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <BackArrow />
      <section className={styles.varabolag}>
        <div className={styles.textarea}>
          <h1 className={styles.h1}>
            A Solid Group with Three Companies in one group
          </h1>

          <div className={styles.ularea}>
            {/* Första bolaget */}
            <div className={`${styles.auxesis} ${styles.card}`}>
              <div className={styles.auxesisbild}>
                <h2 className={styles.divh2}>
                  Auxesis Pharma Holding AB(publ)
                </h2>
              </div>
              <div className={styles.auxesistext}>
                <p className={styles.ptext}>
                  <strong>Auxesis Pharma Holding AB (publ)</strong>Auxesis
                  Pharma Holding AB is the parent company and owns the rights to
                  patents in specific medical research areas. Auxesis Pharma
                  Holding in turn owns two subsidiaries: Auxesis MedTech AB and
                  Auxesis Animal Care AB. It is a publicly registered company,
                  meaning it is a limited company whose articles of association
                  include a provision that the company's shares must be
                  registered in a securities register (read more on
                  Bolagsverket). The company is a parent company and holds the
                  rights to patents within specific medical research areas.
                  Auxesis Pharma Holding AB (publ) focuses on the development of
                  innovative pharmaceuticals for the treatment of localized pain
                  and skin irritation, for both humans and animals.
                </p>
                <h4 className={styles.h4}>Business Idea</h4>
                <p className={styles.ptext}>
                  Building on its own patents, Auxesis develops innovative
                  pharmaceuticals that effectively relieve pain and skin
                  irritation. The products are easy to use and accessible to
                  both consumers and professional sectors. After years of
                  research and thousands of tests, Auxesis, in collaboration
                  with the research team at Karolinska Institutet in Stockholm,
                  has achieved something unique: stabilizing acetylsalicylic
                  acid (ASA) in liquid form. This stabilization, combined with
                  other already approved pharmaceuticals, enables direct
                  application to the skin.
                </p>
                <h4 className={styles.h4}>Milestones and Future</h4>
                <p className={styles.ptext}>
                  In the summer of 2025, the company will celebrate 10 years.
                  Since its inception, Auxesis has evolved from an initial idea
                  through research and capitalization to preclinical testing and
                  global PCT patent protection. The goal is to achieve approval
                  for the groundbreaking product ASA.P® by 2026, followed by a
                  public listing. Currently, Auxesis has two globally registered
                  trademarks: ASA.P® and CoxyPet®.
                </p>
              </div>
            </div>

            {/* Andra bolaget */}
            <div className={`${styles.medtech} ${styles.card}`}>
              <div className={styles.medtechbild}>
                <h2 className={styles.divh2}>Auxesis MedTech AB</h2>
              </div>
              <div className={styles.medtechtext}>
                <p className={styles.ptext}>
                  <strong>Auxesis MedTech AB </strong> was founded in 2024 and
                  is part of Auxesis Pharma Holding AB. Initially, Auxesis
                  MedTech AB will manage prototype manufacturing and hold the
                  license to produce and market our medical products in the
                  Nordic region, as well as licenses for the rest of the world.
                  To ensure the highest possible standards and efficiency, we
                  are establishing our own state-of-the-art factory in
                  Östersund, specifically designed for the production of our own
                  products. By maintaining full control over the production
                  process, we can guarantee a unique and customized product
                  quality, as well as controlled deliveries.
                </p>
              </div>
            </div>

            {/* Tredje bolaget */}
            <div className={`${styles.animalcare} ${styles.card}`}>
              <div className={styles.animalcarebild}>
                <h2 className={styles.divh2}>Auxesis Animal Care AB</h2>
              </div>
              <div className={styles.animalcaretext}>
                <p className={styles.ptext}>
                  <strong> Auxesis Animal Care AB </strong>develops products for
                  the animal care market, focusing on dogs, cats, and the
                  livestock industry. There is a clear demand and market need
                  among both pet owners and veterinarians for a product that
                  effectively addresses pain on animals' skin. Therefore, in the
                  next phase, we will direct our research and development
                  towards the veterinary pharmaceutical category.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ovalcontainer}>
          <img
            className={styles.bolagsbord}
            src="/bolagsbild.png"
            alt="Våra bolagsstruktur"
          />
        </div>
      </section>
    </>
  );
}
