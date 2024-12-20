import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/heroSection.module.css";
import webb2bg from "../../public/webb2bg.png";

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

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.div13}>
        <div className={styles.backgroundImage}>
          <Image
            src={webb2bg}
            alt="Background"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.div14}>
          <div className={styles.column}>
            <div className={styles.div15}>
              <Link href="/">
                <img
                  src="/278149D3-C96F-4CEE-BC16-3D7AB9E4DABE.png"
                  alt="Loggan"
                  className={styles.logo}
                />
              </Link>
              <div className={styles.div16}>
                <h2 className={styles.divh1}>
                  ETT INNOVATIVT <br /> LÄKEMEDELSFÖRETAG
                </h2>
                <h2 className={styles.h2}>MED BANBRYTANDE PATENT</h2>
              </div>
              <div className={styles.div18}></div>
            </div>
          </div>
          <div className={styles.column2}></div>
        </div>
      </div>
      <div className={styles.div000}></div>
    </div>
  );
}
