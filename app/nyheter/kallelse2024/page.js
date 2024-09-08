import styles from "../../styles/Info.module.css";

export default function Kallelse2024() {
  return (
    <div className={styles.details}>
      <h1> AUXESIS Kallelse till årsstämma​</h1>
      <h4>22024-06-18</h4>
      <p>
        Aktieägarna i AUXESIS PHARMA HOLDING AB (publ) med organisationsnummer
        559195-6486 kallas härmed till årsstämma  den 18:e juni 2024 kl.
        15.00 hos Ramberg Advokater på Jakobsbergsgatan 13 i Stockholm. 
      </p>
      <div className={styles.articlesimage}>
        <img
          className={styles.image1}
          src="/Nyheter/240618 AUXESIS Kallelse till årsstämma_Sida_1.png"
          alt="Kallelse"
        />
        <img
          className={styles.image2}
          src="/Nyheter/240618 AUXESIS Kallelse till årsstämma_Sida_2.png"
          alt="Kallelse2"
        />
      </div>
    </div>
  );
}
