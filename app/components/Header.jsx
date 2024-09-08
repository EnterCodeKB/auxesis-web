"use client";

import React, { useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // State för att hantera aktiv dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  return (
    <div className={styles.div2}>
      <Link href="/">
        <img src="/Finance/vitlogo.png" alt="Loggan" className={styles.logo} />
      </Link>

      <button className={styles.hamburgerBtn} onClick={toggleMenu}>
        <img
          className={styles.hamburger}
          src="/hamburgare.png"
          alt="Hamburger Menu"
        />
      </button>

      {/* Visa menyn endast om menyn är öppen */}
      <div className={`${styles.div5} ${isMenuOpen ? styles.menuOpen : ""}`}>
        <Link href="/">
          <div className={styles.mainLink}>HEM</div>
        </Link>

        {/* OM OSS dropdown */}
        <div className={styles.dropdown}>
          <div
            className={styles.mainLink}
            onClick={() => toggleDropdown("omoss")}
          >
            OM OSS
          </div>
          {activeDropdown === "omoss" && (
            <div className={styles.dropdownContent}>
              <Link href="/omoss">
                <div className={styles.subLink}>Om Auxesis</div>
              </Link>
              <Link href="/omoss/produkter">
                <div className={styles.subLink}>Våra produkter</div>
              </Link>
              <Link href="/omoss/vartteam">
                <div className={styles.subLink}>Vårt Team</div>
              </Link>
              <Link href="/omoss/partners">
                <div className={styles.subLink}>Partners</div>
              </Link>
            </div>
          )}
        </div>

        {/* VÅRA BOLAG dropdown */}
        <div className={styles.dropdown}>
          <div
            className={styles.mainLink}
            onClick={() => toggleDropdown("varabolag")}
          >
            VÅRA BOLAG
          </div>
          {activeDropdown === "varabolag" && (
            <div className={styles.dropdownContent}>
              <Link href="/varabolag/auxesis">
                <div className={styles.subLink}>Auxesis Pharma Holding AB</div>
              </Link>
              <Link href="/varabolag/medtech">
                <div className={styles.subLink}>Auxesis MedTech AB</div>
              </Link>
              <Link href="/varabolag/animalcare">
                <div className={styles.subLink}>Auxesis Animal Care AB</div>
              </Link>
            </div>
          )}
        </div>

        <Link href="/nyheter">
          <div className={styles.mainLink}>NYHETER</div>
        </Link>

        {/* FÖR INVESTERARE dropdown */}
        <div className={styles.dropdown}>
          <div
            className={styles.mainLink}
            onClick={() => toggleDropdown("forinvest")}
          >
            FÖR INVESTERARE
          </div>
          {activeDropdown === "forinvest" && (
            <div className={styles.dropdownContent}>
              <Link href="/forinvest/ir-kontakt">
                <div className={styles.subLink}>IR-kontakt</div>
              </Link>
              <Link href="/forinvest/agare">
                <div className={styles.subLink}>Ägare</div>
              </Link>
              <Link href="/forinvest/styrelse">
                <div className={styles.subLink}>Styrelse</div>
              </Link>
            </div>
          )}
        </div>

        <Link href="/kontakt">
          <div className={styles.mainLink}>KONTAKT</div>
        </Link>
        <Link href="/blog">
          <div className={styles.mainLink}>BLOG</div>
        </Link>
      </div>

      <LanguageSwitcher />
    </div>
  );
}
