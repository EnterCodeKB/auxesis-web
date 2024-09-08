import React from "react";
import Link from "next/link";
import styles from "../../styles/Header.module.css";

export default function HeaderEn() {
  return (
    <div className={styles.div2}>
      <img
        src="./278149D3-C96F-4CEE-BC16-3D7AB9E4DABE.png"
        alt="Loggan"
        className={styles.logo}
      />
      <div className={styles.div3}></div>

      <div className={styles.div5}>
        <Link href="/en">
          <div className={styles.div6}>HOME</div>
        </Link>
        <Link href="/omoss">
          <div className={styles.mainLink}>OM OSS</div>
        </Link>
        <Link href="/varabolag">
          <div className={styles.div8}>VÅRA BOLAG</div>
        </Link>
        <Link href="/nyheter">
          <div className={styles.div11}>NYHETER</div>
        </Link>
        <Link href="/forinvest">
          <div className={styles.div12}>FÖR INVESTERARE</div>
        </Link>
        <Link href="/kontakt">
          <div className={styles.div13}>KONTAKT</div>
        </Link>
        <Link href="/blog">
          <div className={styles.div15}>BLOG</div>
        </Link>
      </div>

      {/* Enkel språkväxlare utan dynamisk logik */}
      <div className={styles.languageSwitcher}>
        <Link href="/">
          <button className={styles.languageButton}>Sv</button>
        </Link>
        <Link href="/en">
          <button className={styles.languageButton}>En</button>
        </Link>
      </div>
    </div>
  );
}
