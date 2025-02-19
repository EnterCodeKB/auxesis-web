//app/en/components/Header.jsx

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FaBars } from "react-icons/fa";
import LanguageSwitcher from "../../components/LanguageSwitcher"; // Korrekt import
import styles from "../../styles/Header.module.css";

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
    setIsMenuOpen(false);
    if (linkHref) {
      router.push(linkHref);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const dropdowns = [
    {
      title: "WHAT IS AUXESIS",
      links: [
        { href: "/en/about", label: "About Us" },
        { href: "/en/about/ourcompany", label: "Our Companies" },
        { href: "/en/about/ourteam", label: "Team" },
        { href: "/en/about/partners", label: "Partners" },
      ],
    },
    {
      title: "FOR INVESTORS",
      links: [
        { href: "/en/investors/shareholders", label: "Shareholders" },
        {
          href: "/en/investors/board",
          label: "Board of Directors",
        },
        { href: "/en/investors/financial-reports", label: "Financial Reports" },
        {
          href: "/en/investors/ir-contact",
          label: "Investor Relations Contact",
        },
      ],
    },
    {
      title: "PRODUCTS",
      links: [
        { href: "/en/products/history", label: "History" },
        { href: "/en/products/asap", label: "ASA.P®" },
        { href: "/en/products/coxypet", label: "CoxyPet®" },
        {
          href: "/en/products/productdevelopment",
          label: "Product Development",
        },
        { href: "/en/products/patent", label: "Patents" },
      ],
    },
    {
      title: "SUSTAINABILITY",
      links: [
        {
          href: "/en/sustainability/sustainablebusiness",
          label: "Sustainable Business",
        },
        { href: "/en/sustainability/agenda", label: "Agenda 2030" },
      ],
    },
    {
      title: "PRESS",
      links: [
        { href: "/en/press/auxesisinmedia", label: "Auxesis in Media" },
        { href: "/en/press/presscontact", label: "Press Contact" },
      ],
    },
  ];

  return (
    <header className={styles.header} onClick={() => setActiveDropdown(null)}>
      <Link href="/en" className={styles.logo}>
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
            href="/en"
            className={styles.link}
            onClick={() => navigateToLink("/en")}
          >
            <div className={styles.mainLink}>HOME</div>
          </Link>
          <Link
            href="/en/news"
            className={styles.link}
            onClick={() => navigateToLink("/en/news")}
          >
            <div className={styles.mainLink}>NEWS</div>
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
            href="/en/innovation"
            className={styles.link}
            onClick={() => navigateToLink("/en/innovation")}
          >
            <div className={styles.mainLink}>INNOVATION</div>
          </Link>

          <Link
            href="/en/contact"
            className={styles.link}
            onClick={() => navigateToLink("/en/contact")}
          >
            <div className={styles.mainLink}>CONTACT</div>
          </Link>
        </nav>
      </div>
      <LanguageSwitcher />
    </header>
  );
}
