"use client";
import styles from "./index.module.css";

export default function Publikt() {
  return (
    <div className={styles.details}>
      <h1 className={styles.h1div}>
        AUXESIS PHARMA HOLDING AB (publ) Becomes a Public Limited Company
      </h1>
      <h4>2022-09-21</h4>
      <div className={styles.ptext}>
        <p>
          AUXESIS PHARMA HOLDING AB (publ) has now been officially registered
          with the Swedish Companies Registration Office (Bolagsverket) as a
          public limited company with a share capital of 500,000 SEK. <br />
          This status change grants the company the right to offer shares,
          subscription rights, and other securities to the public, opening up
          new opportunities for future expansion and investment.
        </p>
        <br />
        <p>
          As a public limited company, AUXESIS PHARMA takes another step forward
          in its growth journey, further strengthening its commitment to
          delivering value to both shareholders and the market. The new status
          reflects the company’s long-term vision of transparency and
          accessibility in the capital market.
        </p>
        <br />
        <p>
          We look forward to sharing this exciting journey with our shareholders
          and welcome new investors who wish to be part of our development.
        </p>
      </div>
    </div>
  );
}
