"use client";
import styles from "./index.module.css";

export default function Patent() {
  return (
    <div className={styles.details}>
      <h1 className={styles.h1div}>
        The Patent Application is Now Officially Registered!
      </h1>
      <h4>2024-07-11</h4>
      <div className={styles.ptext}>
        <p>
          We are delighted to announce that AUXESIS PHARMA HOLDING AB (publ) has
          successfully submitted its first-ever patent application for the ASA.P
          formulation
        </p>
        <br />
        <p>
          A huge thank you to EIP-Patent Office for the outstanding work put
          into this process! <br /> This milestone is a testament to our
          dedicated team and their hard work.
        </p>
        <br />
        <p>
          We look forward to future successes and are grateful for the support
          we have received along the way. Thank you once again to everyone
          involved for making this journey possible and exciting!
        </p>
      </div>
    </div>
  );
}
