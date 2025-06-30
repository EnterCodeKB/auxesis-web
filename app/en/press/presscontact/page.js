import React from "react";
import styles from "./presscontact.module.css";

const PressKontakt = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Press Contact</h1>
      <p className={styles.intro}>
        Welcome to our press contact page. Here you will find information for
        journalists, media, and other stakeholders who wish to get in touch with
        us regarding press inquiries and company news.
      </p>

      {/* Kontaktuppgifter */}
      <div className={styles.contactBox}>
        <h2 className={styles.subHeading}>Press Contact</h2>
        <p className={styles.ptext}>
          <strong>Name: </strong>&nbsp; Peter Åberg
        </p>
        <p className={styles.ptext}>
          <strong>Email:</strong>{" "}
          <a href="mailto:peter.aberg@auxesispharma.se" className={styles.link}>
            peter.aberg@auxesispharma.se
          </a>
        </p>
        <p className={styles.ptext}>
          <strong>Mobile:</strong>{" "}
          <a href="tel:+46706815050" className={styles.link}>
            +46 (0)70 681 50 50
          </a>
        </p>
      </div>

      {/* Pressmeddelanden */}
      <div className={styles.section}>
        <h2 className={styles.subHeading}>Latest Press Releases</h2>
        <p className={styles.ptext}>
          For our latest press releases, visit our <br />
          <a href="/en/news" className={styles.link}>
            News Page
          </a>
          .
        </p>
      </div>

      {/* Ladda ner pressmaterial 
      <div className={styles.section}>
        <h2 className={styles.subHeading}>Pressmaterial</h2>
        <p>
          Ladda ner högupplösta bilder, logotyper och företagsbeskrivningar i
          vårt{" "}
          <a href="#" className={styles.link}>
            presskit
          </a>
          .
        </p>
      </div>

      {/* Sociala medier 
      <div className={styles.section}>
        <h2 className={styles.subHeading}>Följ oss</h2>
        <p>
          Följ oss på{" "}
          <a href="#" className={styles.link}>
            LinkedIn
          </a>{" "}
          och{" "}
          <a href="#" className={styles.link}>
            Twitter
          </a>{" "}
          för de senaste uppdateringarna.
        </p>
      </div>*/}
    </div>
  );
};

export default PressKontakt;
