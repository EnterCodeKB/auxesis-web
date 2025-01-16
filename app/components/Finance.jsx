"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Finance1.module.css";

const financeData = [
  {
    image: "/bild1-financeJpeg.jpg",
    title: "Euroclear ",
    description:
      "AUXESIS PHARMA HOLDING AB (publ) är nu avstämningsbolag och igång med Euroclear Sweden AB som värdepappersinstitut. Läs här mer om alla våra mål",
    link: "/nyheter/euroclear",
  },
  {
    image: "/finance-bild2Jpeg.jpg",
    title: "Protokoll Årsstämman",
    description:
      "Protokoll från Årsstämman 2023 för AUXESIS PHARMA HOLDING AB (publ) med organisationsnummer 559195-6486.",
    link: "/forinvest/finansrapport/bolagsstamma",
  },
  {
    image: "/finance-bild3Jpeg.jpg",
    title: "Revisionsberättelse 2023",
    description:
      "Revisionsberättelse 2023 för AUXESIS PHARMA HOLDING AB (publ) med organisationsnummer 559195-6486.",
    link: "/revision2023",
  },
];

export default function Finance() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>FINANSIELL INFORMATION</h1>
      <p>
        Här presenterar vi information för partners och investerare med nyheter
        och uppdateringar från Auxesis Pharma.
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
                <button className={styles.button}>Läs mer</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
