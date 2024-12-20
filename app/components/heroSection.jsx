import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/heroSection.module.css";
import bgbild from "../../public/produkter/5216B2EC-B52C-4624-8893-85EED9576B09.jpeg";
import logo from "../../public/Finance/vitlogo.png";

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
        <div className={styles.backgroundImage}></div>
        <div className={styles.div14}>
          <div className={styles.column}>
            <div className={styles.div15}>
              <Link href="/">
                <Image
                  src={logo}
                  alt="Loggan"
                  width={130}
                  height={130}
                  className="mr-[1150px] mt-6"
                />
                <img className={styles.logo} />
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
