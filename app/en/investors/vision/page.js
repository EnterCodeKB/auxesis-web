"use client";

import { useEffect, useRef } from "react";
import styles from "./vision.module.css";

export default function Vision() {
  const effektRef = useRef(null);

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

    if (effektRef.current) observer.observe(effektRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.vision}>
      <h1 className={styles.h1vision}></h1>

      <div className={styles.whiteboard4}>
        <div className={styles.container1}>
          <h2 className={styles.h2}>EN Vision</h2>
          <div ref={effektRef} className={`${styles.effekt} ${styles.hidden}`}>
            ATT MED VETENSKAP SOM GRUND OMDEFINIERA LÄKEMEDLESKATEGORIN SMÄRTA
            OCH IRRITATION PÅ HUDEN.
          </div>
        </div>

        <div className={styles.affarside}>
          <h2 className={styles.h2}></h2>
        </div>
      </div>
    </section>
  );
}
