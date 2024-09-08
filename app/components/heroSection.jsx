import * as React from "react";
import Link from "next/link";
import styles from "../styles/heroSection.module.css";
import Header from "./Header";

const LanguageSwitcher = () => {
  return (
    <div className={styles.languageSwitcher}>
      <Link href="/">
        <button>Sv</button>
      </Link>
      <Link href="/en">
        <button>En</button>
      </Link>
    </div>
  );
};
export default function heroSection() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.div13}>
        <Header />
        <div className={styles.div14}>
          <div className={styles.column}>
            <div className={styles.div15}>
              <div className={styles.div16}>
                Ett innovativt läkemedelsföretag <br />
                <span className={styles.med}> med banbrytande patent</span>
              </div>
              <div className={styles.div17}>
                <br />
              </div>
              <div className={styles.div18}>
                {/*Fina Kanppen med olika färg 
                <div className={styles.div19}>
                  <button className="button-gradient">
                    
                    <Link className={styles.link} href="/">
                      Gå vidare
                    </Link>
                  </button>
  </div>
                <div className={styles.div20}>
                  <div className={styles.div21}>Lihat Alur Belajar</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f075a70d0be1118fac064f171c6e3ad66b9f1929e29ab569e8059a588a0036ce?apiKey=be1c32169407432186037b3ed8861d0e&"
                    className={styles.img2}
                  />
                </div>*/}
              </div>
            </div>
          </div>
          <div className={styles.column2}></div>
        </div>
      </div>
      <div className={styles.div000}></div>
    </div>
  );
}
