"useEffect";
import React from "react";
import CardEn from "./cardEn";
import HeroEn from "./heroSectionEn";
import MiddleEn from "./middleSectionEn";
import BlogEn from "./blog-en";
import styles from "../styles/Page.module.css";
import LanguageSwitcher from "./LanguageSwitcher";

export default function EnglishPage() {
  return (
    <>
      <div className={styles.div}>
        <h1>Welcome to the English Page!</h1>
        <HeroEn />
        <CardEn />
        <MiddleEn />
        <BlogEn />
      </div>
    </>
  );
}
