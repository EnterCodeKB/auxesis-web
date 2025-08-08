"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/BackArrow.module.css";

export default function BackArrow() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const toggleVisibility = () => {
    if (typeof window !== "undefined" && window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleBack = () => {
    router.back(); // 👈 Alltid ett steg bakåt
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <div
        className={styles.backArrow}
        onClick={handleBack}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleBack()}
        aria-label="Gå tillbaka"
      >
        <span className={styles.arrow}>←</span>
      </div>
    )
  );
}
