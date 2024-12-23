import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/heroPr.module.css";
import AnimatedText2 from "../components/AnimatedText2";

const MyImage = ({ src, alt, width, height, className }) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
  />
);

export default function HeroPr() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.div13}>
        <div className={styles.div14}>
          <div className={styles.column}>
            <div className={styles.div15}>
              {/* Logo */}
              <Link href="/">
                <img src="/vitlogga.png" alt="Loggan" className={styles.logo} />
              </Link>

              <div className={styles.div18}>
                <AnimatedText2 />
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
