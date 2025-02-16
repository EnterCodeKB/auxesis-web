"use client";
import styles from "./index.module.css";

export default function Euroclear() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Euroclear</h1>
      <h4 className={styles.date}>2023-08-18</h4>
      <p className={styles.text}>
        AUXESIS PHARMA HOLDING AB (publ) is now a registered company with
        Euroclear Sweden AB as its securities institution. This marks the final
        phase, according to the Swedish Companies Act (ABL), on the path toward
        a stock market listing. The next step is to select the Corporate Finance
        group we will collaborate with to achieve this goal.
      </p>
      <p className={styles.text}>
        We are now in the process of registering the company’s shareholders in
        the Euroclear system. As a client of Euroclear Sweden, Auxesis Pharma
        becomes part of the core of the Swedish financial market. Once the
        company’s shares are registered with Euroclear, the shareholder register
        is digitized and transferred to their system. In addition to being a
        prerequisite for potential future stock market listing, this transition
        offers several advantages.
      </p>
      <p className={styles.text}>
        A registered company (avstämningsbolag) is a limited company whose
        articles of association require that its shares be registered in a
        securities register with a central securities depository. Companies
        typically choose to become a registered company as a step toward being
        listed on a marketplace, such as the stock exchange. <br />
        <a
          className={styles.link}
          href="https://www.euroclear.com/sweden/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.euroclear.com/sweden/
        </a>
      </p>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="/Nyheter/euroclear-logo.png"
          alt="Euroclear"
        />
      </div>
    </div>
  );
}
