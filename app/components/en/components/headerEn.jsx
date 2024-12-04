"use client";

import React, { useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <Link href="/">
        <img
          src="/278149D3-C96F-4CEE-BC16-3D7AB9E4DABE.png"
          alt="Loggan"
          className={styles.logo}
        />
      </Link>

      {/* Hamburger Button */}
      <button className={styles.hamburgerBtn} onClick={toggleMenu}>
        <img
          src="/hamburgare.png"
          alt="Hamburger Menu"
          className={styles.hamburgerIcon}
        />
      </button>

      {/* Sliding Menu */}
      <div
        className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={closeMenu}>
          &times;
        </button>

        {/* Language Switcher */}
        <div className={styles.languageContainer}>
          <LanguageSwitcher />
        </div>

        <nav className={styles.nav}>
          <Link href="/" onClick={closeMenu}>
            <div className={styles.mainLink}>HOME</div>
          </Link>

          {/* Dropdown: OM OSS */}
          <div className={styles.dropdown}>
            <div
              className={styles.mainLink}
              onClick={() => toggleDropdown("omoss")}
            >
              ABOUT US
            </div>
            {activeDropdown === "omoss" && (
              <div className={styles.dropdownContent}>
                <Link href="/omoss" onClick={closeMenu}>
                  <div className={styles.subLink}>A Game-Changer </div>
                </Link>
                <Link href="/omoss/varabolag" onClick={closeMenu}>
                  <div className={styles.subLink}>Group Structure </div>
                </Link>
                <Link href="/omoss/vartteam" onClick={closeMenu}>
                  <div className={styles.subLink}>Our Team </div>
                </Link>
                <Link href="/omoss/partners" onClick={closeMenu}>
                  <div className={styles.subLink}>Partners</div>
                </Link>

                {/* Sub-dropdown: För investorer */}
                <div className={styles.subDropdown}>
                  <div className={styles.subLink}>Investor Relations </div>
                  <div className={styles.subDropdownContent}>
                    <Link href="/omoss/investorer/agare" onClick={closeMenu}>
                      <div className={styles.subSubLink}>Owners </div>
                    </Link>
                    <Link href="/omoss/investorer/styrelse" onClick={closeMenu}>
                      <div className={styles.subSubLink}>
                        Board And Management Team
                      </div>
                    </Link>
                    <Link href="/omoss/investorer/vision" onClick={closeMenu}>
                      <div className={styles.subSubLink}>
                        Business Idea And Vision
                      </div>
                    </Link>
                    <Link
                      href="/omoss/investorer/ir-kontakt"
                      onClick={closeMenu}
                    >
                      <div className={styles.subSubLink}>IR Contact </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Dropdown: PRODUKTER */}
          <div className={styles.dropdown}>
            <div
              className={styles.mainLink}
              onClick={() => toggleDropdown("produkter")}
            >
              OUR PRODUCTS
            </div>
            {activeDropdown === "produkter" && (
              <div className={styles.dropdownContent}>
                <Link href="/produkter/historik" onClick={closeMenu}>
                  <div className={styles.subLink}>History</div>
                </Link>
                <Link href="/produkter/asap" onClick={closeMenu}>
                  <div className={styles.subLink}>ASA.P®️</div>
                </Link>
                <Link href="/produkter/coxypet" onClick={closeMenu}>
                  <div className={styles.subLink}>CoxyPet®️</div>
                </Link>
                <Link href="/produkter/produktutveckling" onClick={closeMenu}>
                  <div className={styles.subLink}>Product Development </div>
                </Link>
                <Link href="/produkter/patent" onClick={closeMenu}>
                  <div className={styles.subLink}>Patent</div>
                </Link>
              </div>
            )}
          </div>
          {/* NYHETER dropdown */}
          <div className={styles.dropdown}>
            <div
              className={styles.mainLink}
              onClick={() => toggleDropdown("nyheter")}
            >
              NEWS
            </div>
            {activeDropdown === "nyheter" && (
              <div className={styles.dropdownContent}>
                <Link href="/nyheter/senastenytt" onClick={closeMenu}>
                  <div className={styles.subLink}>Latest News </div>
                </Link>
                <Link href="/produkter/nyhetsbrev" onClick={closeMenu}>
                  <div className={styles.subLink}>Archives</div>
                </Link>
              </div>
            )}
          </div>

          <Link href="/hallbarhet" onClick={closeMenu}>
            <div className={styles.mainLink}></div>
          </Link>
          {/* HÅLLBARHET dropdown */}
          <div className={styles.dropdown}>
            <div
              className={styles.mainLink}
              onClick={() => toggleDropdown("hallbarhet")}
            >
              SUSTAINABILITY
            </div>
            {activeDropdown === "hallbarhet" && (
              <div className={styles.dropdownContent}>
                <Link href="/hallbarhet/hallbaraaffarer" onClick={closeMenu}>
                  <div className={styles.subLink}>Sustainable Business </div>
                </Link>
                <Link href="/hallbarhet/agenda" onClick={closeMenu}>
                  <div className={styles.subLink}>Agenda 2030</div>
                </Link>
              </div>
            )}
          </div>
          <Link href="/innovation" onClick={closeMenu}>
            <div className={styles.mainLink}>INNOVATION</div>
          </Link>

          {/* Kontakt */}
          <Link href="/kontakt" onClick={closeMenu}>
            <div className={styles.mainLink}>CONTACT</div>
          </Link>

          {/* PRESS dropdown */}
          <div className={styles.dropdown}>
            <div
              className={styles.mainLink}
              onClick={() => toggleDropdown("press")}
            >
              PRESS
            </div>
            {activeDropdown === "press" && (
              <div className={styles.dropdownContent}>
                <Link href="/press/pressrum" onClick={closeMenu}>
                  <div className={styles.subLink}>Newsroom </div>
                </Link>

                <Link href="/press/auxesisimedia" onClick={closeMenu}>
                  <div className={styles.subLink}>Media Coverage </div>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
