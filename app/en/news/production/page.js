"use client";

import { useRouter } from "next/navigation";
import styles from "./index.module.css";

export default function Produktion() {
  const router = useRouter();

  const handleInfoClick = () => {
    router.push(
      "https://www.op.se/2024-09-21/raddade-ofk-nu-har-lakemedelsforetaget-hittat-lokal/"
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.img1}
          src="/Nyheter/ostersund_web-scaled.jpg"
          alt="Östersund"
        />
      </div>
      <h1 className={styles.title}>
        Auxesis MedTech AB Signs Agreement for a New Production Facility in
        Östersund
      </h1>
      <h4 className={styles.date}>2024-09-21</h4>
      <h2 className={styles.subtitle}>
        On September 17, 2024, Auxesis MedTech AB visited Östersund to sign the
        contract for the facility that will become the company’s new production
        plant.
      </h2>
      <p className={styles.text}>
        "The coming year will be spent getting everything in place so that we
        can then start production," says CEO Roar Adelsten to the newspaper
        Östersunds-Posten. The factory premises, covering approximately 600
        square meters, will be adapted to meet Auxesis' requirements for
        pharmaceutical production. The landlord is Persson Invest Fastigheter in
        Östersund.
      </p>
      <h2 className={styles.subtitle}>Many Job Opportunities</h2>
      <p className={styles.text}>
        Östersunds-Posten reports that Auxesis is planning a two-shift
        production with 12-14 employees per shift, aiming to produce 27,000
        products per day once operations are in full swing. The newspaper
        highlights the significant job opportunities this will bring to
        Östersund Municipality. Auxesis CFO Lars Larsson comments: "Yes, the
        machine production will require supervision. Additionally, we will need
        logistics services since we will have a warehouse here. There will also
        be a laboratory where the liquids for the machines will be prepared,"
        says Larsson.
      </p>
      <h2 className={styles.subtitle}>
        Strong Engagement for the New Establishment
      </h2>
      <p className={styles.text}>
        Having a production facility and laboratory outside Stockholm comes with
        clear advantages, according to CEO Roar Adelsten, who looks forward to
        the pioneering spirit and strong engagement surrounding the new Life
        Science company in Östersund.
      </p>
      <button className={styles.infoButton} onClick={handleInfoClick}>
        Read more on ÖP
      </button>
      <div className={styles.imageContainer}>
        <img
          className={styles.img2}
          src="/Nyheter/entrelokal.jpeg"
          alt="Östersunds Auxesis MedTech AB lokal"
        />
      </div>
    </div>
  );
}
