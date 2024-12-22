"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/heroSection.module.css";

// MyImage-komponenten
const MyImage = ({ src, alt, width, height, className }) => (
  <Image
    src={src}
    alt={alt || "Default description"}
    width={width || 100}
    height={height || 100}
    className={className || ""}
    onError={(e) => {
      e.target.src = "/produkter/fallback-image.png"; // En fallback-bild
    }}
  />
);

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.div13}>
        {/* Bakgrundsbild */}
        <div
          className={styles.backgroundImage}
          style={{
            backgroundImage: `url(/webbg.jpeg)`,
          }}
        >
          {/* Logotyp */}
        </div>

        {/* Övrigt innehåll */}
        <div className={styles.div14}>
          <div className={styles.column}>
            <div className={styles.div15}>
              <div className={styles.logoContainer}>
                <MyImage
                  src="/Finance/278149D3-C96F-4CEE-BC16-3D7AB9E4DABE.png"
                  alt="Logo"
                  width={80}
                  height={80}
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
