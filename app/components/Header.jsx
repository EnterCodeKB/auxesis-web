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
        onClick={(e) => e.stopPropagation()} // Förhindrar att klick på menyn stänger allt
      >
        {/* Close Button */}
        <button className={styles.closeBtn} onClick={closeMenu}>
          &times; {/* Kryssikonen */}
        </button>

        {/* Language Switcher 
        <div className={styles.languageContainer}>
          <LanguageSwitcher />
        </div>
*/}
        <nav className={styles.nav}>
          <Link href="/" onClick={closeMenu}>
            <div className={styles.mainLink}>HEM</div>
          </Link>

          {/* Dropdown: OM OSS */}
          <div className={styles.dropdown}>
            <div
              className={styles.mainLink}
              onClick={() => toggleDropdown("omoss")}
            >
              OM OSS
            </div>
            {activeDropdown === "omoss" && (
              <div className={styles.dropdownContent}>
                <Link href="/omoss" onClick={closeMenu}>
                  <div className={styles.subLink}>Unika produkter</div>
                </Link>
                <Link href="/omoss/varabolag" onClick={closeMenu}>
                  <div className={styles.subLink}>Våra bolag</div>
                </Link>
                <Link href="/omoss/vartteam" onClick={closeMenu}>
                  <div className={styles.subLink}>Team</div>
                </Link>
                <Link href="/omoss/partners" onClick={closeMenu}>
                  <div className={styles.subLink}>Partners</div>
                </Link>

                {/* Sub-dropdown: 
                <div className={styles.subDropdown}>
                  <div className={styles.subLink}>För investorer</div>
                  <div className={styles.subDropdownContent}>
                    <Link href="/omoss/investorer/agare" onClick={closeMenu}>
                      <div className={styles.subSubLink}>Ägare</div>
                    </Link>
                    <Link href="/omoss/investorer/styrelse" onClick={closeMenu}>
                      <div className={styles.subSubLink}>
                        Styrelse och ledning
                      </div>
                    </Link>
                    <Link href="/omoss/investorer/vision" onClick={closeMenu}>
                      <div className={styles.subSubLink}>
                        Affärsidé och vision
                      </div>
                    </Link>
                    <Link
                      href="/omoss/investorer/ir-kontakt"
                      onClick={closeMenu}
                    >
                      <div className={styles.subSubLink}>IR-kontakt</div>
                    </Link>
                  </div>
                </div>*/}
              </div>
            )}
          </div>

          {/* Dropdown: För investorer */}
          <div className={styles.dropdown}>
            <div
              className={styles.mainLink}
              onClick={() => toggleDropdown("forinvest")}
            >
              FÖR INVESTERARE
            </div>
            {activeDropdown === "forinvest" && (
              <div className={styles.dropdownContent}>
                <Link href="/forinvest/agare" onClick={closeMenu}>
                  <div className={styles.subLink}>Ägare</div>
                </Link>
                <Link href="/forinvest/styrelse" onClick={closeMenu}>
                  <div className={styles.subLink}>Styrelse och ledning</div>
                </Link>
                <Link href="/forinvest/vision" onClick={closeMenu}>
                  <div className={styles.subLink}>Affärsidé och vision</div>
                </Link>
                <Link href="/forinvest/finansrapport" onClick={closeMenu}>
                  <div className={styles.subLink}>Finansiella rapporter</div>
                </Link>
                <Link href="/forinvest/ir-kontakt" onClick={closeMenu}>
                  <div className={styles.subLink}>IR-kontakt</div>
                </Link>

                {/* Sub-dropdown: För investorer */}
                <div className={styles.subDropdown}>
                  <div className={styles.subLink}> </div>
                  <div className={styles.subDropdownContent}>
                    <Link href="/omoss/investorer/agare" onClick={closeMenu}>
                      <div className={styles.subSubLink}>Ägare</div>
                    </Link>
                    <Link href="/omoss/investorer/styrelse" onClick={closeMenu}>
                      <div className={styles.subSubLink}>
                        Styrelse och ledning
                      </div>
                    </Link>
                    <Link href="/omoss/investorer/vision" onClick={closeMenu}>
                      <div className={styles.subSubLink}>
                        Affärsidé och vision
                      </div>
                    </Link>
                    <Link
                      href="/omoss/investorer/ir-kontakt"
                      onClick={closeMenu}
                    >
                      <div className={styles.subSubLink}>IR-kontakt</div>
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
              PRODUKTER
            </div>
            {activeDropdown === "produkter" && (
              <div className={styles.dropdownContent}>
                <Link href="/produkter/historik" onClick={closeMenu}>
                  <div className={styles.subLink}>Historik</div>
                </Link>
                <Link href="/produkter/asap" onClick={closeMenu}>
                  <div className={styles.subLink}>ASA.P®️</div>
                </Link>
                <Link href="/produkter/coxypet" onClick={closeMenu}>
                  <div className={styles.subLink}>CoxyPet®️</div>
                </Link>
                <Link href="/produkter/produktutveckling" onClick={closeMenu}>
                  <div className={styles.subLink}>Produktutveckling</div>
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
              NYHETER
            </div>
            {activeDropdown === "nyheter" && (
              <div className={styles.dropdownContent}>
                <Link href="/nyheter/senastenytt" onClick={closeMenu}>
                  <div className={styles.subLink}>Senaste nytt</div>
                </Link>
              </div>
            )}
          </div>

          {/* HÅLLBARHET dropdown 
          <Link href="/hallbarhet" onClick={closeMenu}>
            <div className={styles.mainLink}></div>
          </Link>*/}

          <div className={styles.dropdown}>
            <div
              className={styles.mainLink}
              onClick={() => toggleDropdown("hallbarhet")}
            >
              HÅLLBARHET
            </div>
            {activeDropdown === "hallbarhet" && (
              <div className={styles.dropdownContent}>
                <Link href="/hallbarhet/hallbaraaffarer" onClick={closeMenu}>
                  <div className={styles.subLink}>Hållbara affärer</div>
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
            <div className={styles.mainLink}>KONTAKT</div>
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
                {/*  <Link href="/press/pressrum" onClick={closeMenu}>
                  <div className={styles.subLink}>Pressrum </div>
                </Link>
*/}
                <Link href="/press/auxesisimedia" onClick={closeMenu}>
                  <div className={styles.subLink}>Auxesis i media</div>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
