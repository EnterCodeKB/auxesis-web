import React from "react";
import styles from "../../styles/Innovation.module.css";

const Innovation = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section1}>
        <h1 className={styles.divh1}>
          Continuous Development and Lasting Change
        </h1>
        <p className={styles.ptext}>
          Innovation is more than just a word to us—it is the core of everything
          we do. Auxesis was founded with a passionate vision: to create
          something groundbreaking that can improve people's lives. Driven by
          this vision, we embarked on a research journey filled with
          perseverance, creativity, and an unwavering belief that the impossible
          could become possible. <br /> <br />
          After years of intensive work and thousands of experiments, we
          achieved what was once only a dream: stabilizing acetylsalicylic acid
          in liquid form and making it possible to apply directly to the skin.
          This breakthrough marked the beginning of something truly significant.
        </p>
      </div>
      <div className={styles.section2}>
        <h2 className={styles.divh2}>
          A Culture That Fosters Innovation and Sustainability
        </h2>
        <p className={styles.ptext}>
          Our discovery laid the foundation for a new enterprise with ambitions
          that extend far beyond Sweden’s borders.
          <br /> At Auxesis, we cultivate an environment where innovation is not
          just encouraged—it thrives. Ideas are born and shaped in a
          collaborative atmosphere with openness at its core, ensuring that
          every voice is heard. <br /> <br />
          Our culture of innovation is deeply intertwined with our
          sustainability strategy. To us, a truly great innovation is also a
          force for good. We strive to ensure that every breakthrough we achieve
          contributes positively to people, animals, and our planet. After all,
          we believe that a sustainable future is the best investment for us
          all.
        </p>
      </div>
    </section>
  );
};

export default Innovation;
