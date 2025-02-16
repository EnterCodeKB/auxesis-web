"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/BackArrow.module.css";

export default function BackArrow({ mainLink, label }) {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  // Visa knappen endast efter scroll
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleBack = () => {
    router.push(mainLink);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <div className={styles.backArrow} onClick={handleBack}>
        <span className={styles.arrow}>←</span>
        <span className={styles.text}>{label}</span>
      </div>
    )
  );
}
