"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FaBars } from "react-icons/fa";
import styles from "../styles/Header.module.css";

const DropdownMenu = ({
  title,
  links,
  isActive,
  toggleDropdown,
  navigateToLink,
  currentPath,
}) => {
  return (
    <div className={styles.dropdown}>
      <div
        className={`${styles.mainLink} ${isActive ? styles.active : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          toggleDropdown(title);
        }}
      >
        {title}
        <span className={`${styles.arrow} ${isActive ? styles.rotate : ""}`}>
          ▼
        </span>
      </div>
      {isActive && (
        <div
          className={styles.dropdownContent}
          onClick={(e) => e.stopPropagation()}
        >
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`${styles.link} ${
                currentPath === link.href ? styles.active : ""
              }`}
              onClick={() => navigateToLink(link.href)}
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

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const navigateToLink = (linkHref) => {
    setIsMenuOpen(false); // Stäng huvudmenyn
    if (linkHref) {
      router.push(linkHref); // Navigera till vald länk
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
        { href: "/produkter/asap", label: "ASA.P®" },
        { href: "/produkter/coxypet", label: "CoxyPet®" },
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
    {
      title: "PRESS",
      links: [
        { href: "/press/auxesisimedia", label: "Auxesis i media" },
        { href: "/press/presskontakt", label: "Presskontakt" },
      ],
    },
  ];

  return (
    <header className={styles.header} onClick={() => setActiveDropdown(null)}>
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
      <button
        className={styles.hamburgerBtn}
        onClick={(e) => {
          e.stopPropagation();
          toggleMenu();
        }}
      >
        <FaBars size={40} className={styles.hamburgerIcon} />
      </button>

      <div
        className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={closeMenu}>
          &times;
        </button>
        <nav className={styles.nav} onClick={(e) => e.stopPropagation()}>
          <Link
            href="/"
            className={styles.link}
            onClick={() => navigateToLink("/")}
          >
            <div className={styles.mainLink}>HEM</div>
          </Link>
          <Link
            href="/nyheter"
            className={styles.link}
            onClick={() => navigateToLink("/nyheter")}
          >
            <div className={styles.mainLink}>NYHETER</div>
          </Link>

          {dropdowns.map((dropdown, index) => (
            <DropdownMenu
              key={index}
              title={dropdown.title}
              links={dropdown.links}
              isActive={activeDropdown === dropdown.title}
              toggleDropdown={toggleDropdown}
              navigateToLink={navigateToLink}
              currentPath={pathname}
            />
          ))}

          <Link
            href="/innovation"
            className={styles.link}
            onClick={() => navigateToLink("/innovation")}
          >
            <div className={styles.mainLink}>INNOVATION</div>
          </Link>

          <Link
            href="/kontakt"
            className={styles.link}
            onClick={() => navigateToLink("/kontakt")}
          >
            <div className={styles.mainLink}>KONTAKT</div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
