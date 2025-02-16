// Spotlights.jsx
import React from "react";
import Carousel from "./Carousel";
import styles from "../../styles/Spotlights.module.css";
import { latestNews } from "../en/latestNews";

const Spotlights = () => {
  return (
    <div className={styles.spotlights}>
      <h2>News</h2>
      <Carousel items={latestNews} />
      <button
        className={styles.readMoreButton}
        onClick={() => (window.location.href = "/en/nyheter/page.js")}
      >
        Read more{" "}
      </button>
    </div>
  );
};

export default Spotlights;
