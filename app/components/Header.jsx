"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation"; // Från next/navigation
import { FaBars } from "react-icons/fa";
import styles from "../styles/Header.module.css";

const DropdownMenu = ({
  title,
  links,
  isActive,
  toggleDropdown,
  closeMenu,
  currentPath,
}) => {
  return (
    <div className={styles.dropdown}>
      <div
        className={`${styles.mainLink} ${isActive ? styles.active : ""}`}
        onClick={() => toggleDropdown(title)}
      >
        {title}
        <span className={`${styles.arrow} ${isActive ? styles.rotate : ""}`}>
          ▼
        </span>
      </div>
      {isActive && (
        <div className={styles.dropdownContent}>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`${styles.link} ${
                currentPath === link.href ? styles.active : ""
              }`}
              onClick={() => closeMenu(link.href)}
            >
              <div className={styles.subLink}>
                <span className={styles.productText}>{link.label}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (menu) =>
    setActiveDropdown(activeDropdown === menu ? null : menu);

  const closeMenu = (linkHref) => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    if (linkHref) {
      router.push(linkHref); // Navigera till vald länk
    }
  };

  const dropdowns = [
    {
      title: "VAD ÄR AUXESIS",
      links: [
        { href: "/omoss", label: "Om oss" },
        { href: "/omoss/varabolag", label: "Våra bolag" },
        { href: "/omoss/vartteam", label: "Team" },
        { href: "/omoss/partners", label: "Partners" },
      ],
    },
    {
      title: "FÖR INVESTERARE",
      links: [
        { href: "/forinvest/agare", label: "Ägare" },
        { href: "/forinvest/styrelse", label: "Styrelse och ledning" },
        { href: "/forinvest/finansrapport", label: "Finansiella rapporter" },
        { href: "/forinvest/ir-kontakt", label: "IR-kontakt" },
      ],
    },
    {
      title: "PRODUKTER",
      links: [
        { href: "/produkter/historik", label: "Historik" },
        { href: "/produkter/asap", label: "ASA.P\u00AE" }, // Unicode för ®
        { href: "/produkter/coxypet", label: "CoxyPet\u00AE" }, // Unicode för ®

        { href: "/produkter/produktutveckling", label: "Produktutveckling" },
        { href: "/produkter/patent", label: "Patent" },
      ],
    },
    {
      title: "HÅLLBARHET",
      links: [
        { href: "/hallbarhet/hallbaraaffarer", label: "Hållbara affärer" },
        { href: "/hallbarhet/agenda", label: "Agenda 2030" },
      ],
    },
  ];

  return (
    <header className={styles.header}>
      {/* Logotyp */}
      <Link href="/" className={styles.logo}>
        <Image
          src="/Finance/278149D3-C96F-4CEE-BC16-3D7AB9E4DABE.png"
          alt="Logo"
          width={70}
          height={70}
          className={styles.logo}
        />
      </Link>
      <div className={styles.headersh1div}>
        <h2 className={styles.headersh1}></h2>
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
        <button className={styles.closeBtn} onClick={() => closeMenu()}>
          &times;
        </button>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link} onClick={() => closeMenu("/")}>
            <div className={styles.mainLink}>HEM</div>
          </Link>

          {dropdowns.map((dropdown, index) => (
            <DropdownMenu
              key={index}
              title={dropdown.title}
              links={dropdown.links}
              isActive={activeDropdown === dropdown.title}
              toggleDropdown={toggleDropdown}
              closeMenu={closeMenu}
              currentPath={pathname}
            />
          ))}

          <Link
            href="/innovation"
            className={styles.link}
            onClick={() => closeMenu("/innovation")}
          >
            <div className={styles.mainLink}>INNOVATION</div>
          </Link>

          <Link
            href="/nyheter"
            className={styles.link}
            onClick={() => closeMenu("/nyheter")}
          >
            <div className={styles.mainLink}>NYHETER</div>
          </Link>

          <Link
            href="/press"
            className={styles.link}
            onClick={() => closeMenu("/press")}
          >
            <div className={styles.mainLink}>PRESS</div>
          </Link>

          <Link
            href="/kontakt"
            className={styles.link}
            onClick={() => closeMenu("/kontakt")}
          >
            <div className={styles.mainLink}>KONTAKT</div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
