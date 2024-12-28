"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
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

  return (
    <header className={styles.header}>
      {/* Logotyp */}
      <Link href="/" className={styles.logo}>
        <MyImage
          src="/Finance/278149D3-C96F-4CEE-BC16-3D7AB9E4DABE.png"
          alt="Logo"
          width={70}
          height={70}
          className={styles.logo}
        />
      </Link>
      <div className={styles.headersh1div}>
        {" "}
        <h2 className={styles.headersh1}>AUXESIS PHARMA HOLDING AB(publ)</h2>
      </div>
      {/* Hamburger Button */}
      <button className={styles.hamburgerBtn} onClick={toggleMenu}>
        <FaBars size={40} className={styles.hamburgerIcon} />
      </button>

      {/* Sliding Menu */}
      <div
        className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className={styles.closeBtn} onClick={closeMenu}>
          &times;
        </button>

        <nav className={styles.nav}>
          {/* Main Links */}
          <Link href="/" className={styles.link} onClick={closeMenu}>
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
                <Link href="/omoss" className={styles.link} onClick={closeMenu}>
                  <div className={styles.subLink}>Unika produkter</div>
                </Link>
                <Link
                  href="/omoss/varabolag"
                  className={styles.link}
                  onClick={closeMenu}
                >
                  <div className={styles.subLink}>Våra bolag</div>
                </Link>
                <Link
                  href="/omoss/vartteam"
                  className={styles.link}
                  onClick={closeMenu}
                >
                  <div className={styles.subLink}>Team</div>
                </Link>
                <Link
                  href="/omoss/partners"
                  className={styles.link}
                  onClick={closeMenu}
                >
                  <div className={styles.subLink}>Partners</div>
                </Link>
              </div>
            )}
          </div>

          {/* Dropdown: FÖR INVESTERARE */}
          <div className={styles.dropdown}>
            <div
              className={styles.mainLink}
              onClick={() => toggleDropdown("forinvest")}
            >
              FÖR INVESTERARE
            </div>
            {activeDropdown === "forinvest" && (
              <div className={styles.dropdownContent}>
                <Link
                  href="/forinvest/agare"
                  className={styles.link}
                  onClick={closeMenu}
                >
                  <div className={styles.subLink}>Ägare</div>
                </Link>
                <Link
                  href="/forinvest/styrelse"
                  className={styles.link}
                  onClick={closeMenu}
                >
                  <div className={styles.subLink}>Styrelse och ledning</div>
                </Link>
                <Link
                  href="/forinvest/vision"
                  className={styles.link}
                  onClick={closeMenu}
                >
                  <div className={styles.subLink}>Affärsidé och vision</div>
                </Link>
                <Link
                  href="/forinvest/finansrapport"
                  className={styles.link}
                  onClick={closeMenu}
                >
                  <div className={styles.subLink}>Finansiella rapporter</div>
                </Link>
                <Link
                  href="/forinvest/ir-kontakt"
                  className={styles.link}
                  onClick={closeMenu}
                >
                  <div className={styles.subLink}>IR-kontakt</div>
                </Link>
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
                <Link
                  href="/produkter/historik"
                  className={styles.link}
                  onClick={closeMenu}
                >
                  <div className={styles.subLink}>Historik</div>
                </Link>
                <Link
                  href="/produkter/asap"
                  className={styles.link}
                  onClick={closeMenu}
                >
                  <div className={styles.subLink}>ASA.P®️</div>
                </Link>
                <Link
                  href="/produkter/coxypet"
                  className={styles.link}
                  onClick={closeMenu}
                >
                  <div className={styles.subLink}>CoxyPet®️</div>
                </Link>
                <Link
                  href="/produkter/produktutveckling"
                  className={styles.link}
                  onClick={closeMenu}
                >
                  <div className={styles.subLink}>Produktutveckling</div>
                </Link>
                <Link
                  href="/produkter/patent"
                  className={styles.link}
                  onClick={closeMenu}
                >
                  <div className={styles.subLink}>Patent</div>
                </Link>
              </div>
            )}
          </div>

          {/* Innovation */}
          <Link href="/innovation" className={styles.link} onClick={closeMenu}>
            <div className={styles.mainLink}>INNOVATION</div>
          </Link>

          {/* Dropdown: NYHETER */}
          <div className={styles.dropdown}>
            <div
              className={styles.mainLink}
              onClick={() => toggleDropdown("nyheter")}
            >
              NYHETER
            </div>
            {activeDropdown === "nyheter" && (
              <div className={styles.dropdownContent}>
                <Link
                  href="/nyheter/senastenytt"
                  className={styles.link}
                  onClick={closeMenu}
                >
                  <div className={styles.subLink}>Senaste nytt</div>
                </Link>
              </div>
            )}
          </div>

          {/* Dropdown: HÅLLBARHET */}
          <div className={styles.dropdown}>
            <div
              className={styles.mainLink}
              onClick={() => toggleDropdown("hallbarhet")}
            >
              HÅLLBARHET
            </div>
            {activeDropdown === "hallbarhet" && (
              <div className={styles.dropdownContent}>
                <Link
                  href="/hallbarhet/hallbaraaffarer"
                  className={styles.link}
                  onClick={closeMenu}
                >
                  <div className={styles.subLink}>Hållbara affärer</div>
                </Link>
                <Link
                  href="/hallbarhet/agenda"
                  className={styles.link}
                  onClick={closeMenu}
                >
                  <div className={styles.subLink}>Agenda 2030</div>
                </Link>
              </div>
            )}
          </div>

          {/* Kontakt */}
          <Link href="/kontakt" className={styles.link} onClick={closeMenu}>
            <div className={styles.mainLink}>KONTAKT</div>
          </Link>

          {/* Dropdown: PRESS */}
          <div className={styles.dropdown}>
            <div
              className={styles.mainLink}
              onClick={() => toggleDropdown("press")}
            >
              PRESS
            </div>
            {activeDropdown === "press" && (
              <div className={styles.dropdownContent}>
                <Link
                  href="/press/auxesisimedia"
                  className={styles.link}
                  onClick={closeMenu}
                >
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
