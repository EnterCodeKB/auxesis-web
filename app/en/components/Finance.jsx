"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Finance1.module.css";

const financeData = [
  {
    image: "/bild1-financeJpeg.jpg",
    title: "Euroclear ",
    description:
      "AUXESIS PHARMA HOLDING AB (publ) is now a registered company with Euroclear Sweden AB as its securities institution. Read more about all our goals here.",
    link: "/en/news/euroclear",
  },
  {
    image: "/finance-bild2Jpeg.jpg",
    title: "Annual General Meeting Minutes    ",
    description:
      "Minutes from the 2023 Annual General Meeting of AUXESIS PHARMA HOLDING AB (publ), organization number 559195-6486",
    link: "/en/investors/financial-reports/generalmeeting",
  },
  {
    image: "/finance-bild3Jpeg.jpg",
    title: "Auditor’s Report 2023    ",
    description:
      "Auditor’s report for 2023 for AUXESIS PHARMA HOLDING AB (publ), organization number 559195-6486.",
    link: "/revision2023",
  },
];

export default function Finance() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>FINANCIAL INFORMATION</h1>
      <p>
        Here, we provide information for partners and investors, including news
        and updates from Auxesis Pharma.
      </p>
      <div className={styles.grid}>
        {financeData.map((item, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={150}
              className={styles.image}
            />
            <div className={styles.textContainer}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.description}>{item.description}</p>
              <Link href={item.link}>
                <button className={styles.button}>Read more</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
