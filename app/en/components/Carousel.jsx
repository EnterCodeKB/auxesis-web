// Carousel.jsx
import React, { useState } from "react";
import styles from "../../styles/Carousel.module.css";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.control} onClick={prevSlide}>
        &#9664; {/* Previous arrow */}
      </button>
      <div className={styles.slide}>
        <h3 className={styles.newsTitle}>{items[currentIndex].title}</h3>
        <p className={styles.subtitle}>{items[currentIndex].subtitle}</p>
        <div
          dangerouslySetInnerHTML={{ __html: items[currentIndex].description }}
        />
      </div>
      <button className={styles.control} onClick={nextSlide}>
        &#9654; {/* Next arrow */}
      </button>
    </div>
  );
};

export default Carousel;
