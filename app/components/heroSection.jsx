"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/heroSection.module.css";

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.div13}>
        {/* Bakgrundsbild */}
        <div
          className={styles.backgroundImage}
          style={{
            backgroundImage: `url(/produkter/5216B2EC-B52C-4624-8893-85EED9576B09.jpeg)`,
          }}
        >
          {/* Logotyp */}
        </div>

        {/* Övrigt innehåll */}
        <div className={styles.div14}>
          <div className={styles.column}>
            <div className={styles.div15}>
              <div className={styles.logoContainer}>
                <Image
                  src="/a2a740ff-fd20-4149-b99f-b720cd3b70c3.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className={styles.logo}
                />
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
