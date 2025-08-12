"use client";
import styles from "../../../styles/Asap.module.css";
import BackArrow from "../../components/BackArrow";
import HeroProduct from "../../components/HeroSectionProduct";

export default function AsaP() {
  return (
    <>
      <HeroProduct />
      <section className={styles.sectionA}>
        <BackArrow />
        <h2>Over-the-Counter Product for Humans – ASA.P®</h2>

        <div className={styles.container1}>
          <div className={styles.textcontainer}>
            <p className={styles.ptext}>
              There is currently no known **OTC (over-the-counter) product** on
              the market that rapidly alleviates pain and irritation on the
              skin. Existing products provide a soothing and cooling effect for
              a short period, requiring frequent reapplication.
              <br /> <br />
              ASA.P® is an **over-the-counter (OTC) medication** for human use,
              designed to treat pain and irritation on the skin caused by insect
              bites, jellyfish stings, nettles, and other allergenic plants, as
              well as minor burns, sunburn, rashes, and eczema.
            </p>
          </div>
          <div>
            <img
              className={styles.imgirritation}
              src="/produkter/B5FC1967-6242-4F3A-9F8D-2B48204D2492.jpeg"
              alt="klias i myggbett"
            />
          </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.textcontainer}>
            <h2 className={styles.divh2}>
              Blocks Pain Until the Body Heals Itself
            </h2>
            <p className={styles.ptext}>
              ASA.P® is the first over-the-counter consumer product that rapidly
              relieves pain and irritation on the skin.
            </p>
            <br />
            <ul className={styles.ulList}>
              <li>Fast-acting – pain disappears within minutes.</li>
              <br />
              <li>Single application – no need for repeated use.</li>
              <br />
              <li>Blocks pain quickly until the body has healed itself.</li>
              <br />
              <li>Anti-inflammatory properties.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
