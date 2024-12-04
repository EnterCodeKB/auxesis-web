// Spotlights.jsx
import React from "react";
import Carousel from "./Carousel";
import styles from "../styles/Spotlights.module.css";
import { latestNews } from "../nyheter/senastenytt/page";

const Spotlights = () => {
  return (
    <div className={styles.spotlights}>
      <h2>Nyheter</h2>
      <Carousel items={latestNews} />
      <button
        className={styles.readMoreButton}
        onClick={() =>
          (window.location.href = "/nyheter/senastenyheter/page.js")
        }
      >
        Läs mer
      </button>
    </div>
  );
};

export default Spotlights;
