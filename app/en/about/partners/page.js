"use client";

import styles from "./index.module.css";
import Link from "next/link";
import BackArrow from "../../components/BackArrow";

export default function Partners() {
  const partnersData = [
    {
      name: "RAMBERG Advokater",
      link: "https://ramberglaw.se/",
      image: "/partners/ram_law_logoJpeg.jpg",
      description:
        "Ramberg Advokater in Stockholm is a full-service law firm with expertise in multiple legal areas. Ramberg provides legal support to Auxesis, assisting with business law, trademark matters, and all types of regulatory issues related to law worldwide.",
    },
    {
      name: "IQVIA och Svensk Läkemedelsstatistik",
      link: "https://www.iqvia.com/locations/nordics",
      image: "/partners/sl.jpeg",
      description:
        "IQVIA and Svensk Läkemedelsstatistik provide accurate and comprehensive analyses of the pharmaceutical industry in Sweden and globally. Through in-depth analyses and tailored consulting services, Auxesis gains valuable insights for decision-making.",
    },
    {
      name: "Granath Reklam AB",
      link: "https://granathreklam.se/",
      image: "/partners/granath.png",
      description:
        "Granath supports Auxesis with communication, advertising, and branding ahead of the launch of ASA.P®. As a full-service agency, Granath creates distinctive communication that effectively and successfully reaches target audiences.",
    },
    {
      name: "RegSmart Life Science AB",
      link: "https://regsmart.se/",
      image: "/partners/reg.jpeg",
      description:
        "RegSmart Life Science AB supports Auxesis with regulatory matters related to the commercialization of ASA.P®. They navigate a complex and ever-evolving regulatory landscape.",
    },
    {
      name: "Zelmic AB",
      link: "https://zelmic.se/",
      image: "/partners/zelmic.png",
      description:
        "Zelmic develops topical and transdermal drug formulations and supports Auxesis in its formulations. They are an experienced, privately owned CRO and CDMO.",
    },
    {
      name: "AFRY",
      link: "https://afry.com/sv",
      image: "/partners/Afry.jpeg",
      description:
        "AFRY assists Auxesis in planning and developing a sustainable production model. They support Auxesis with medical research, regulatory compliance with the Swedish Medical Products Agency, and the establishment of the manufacturing facility in Östersund.",
    },
    {
      name: "EIP",
      link: "https://eip.com/global/",
      image: "/partners/eip_logo_black.svg",
      description:
        "Auxesis collaborates with EIP on patents for ASA.P® and other upcoming patent applications. EIP has extensive international expertise in drafting strong patent applications worldwide.",
    },
    {
      name: "Edlund & Partners",
      link: "https://edlundpartners.se/",
      image: "/partners/edlundJpeg.jpg",
      description:
        "Auxesis has appointed Edlund & Partners as its auditing firm. Edlund & Partners possesses the expertise and experience to assist companies with stock market listings.",
    },
  ];

  return (
    <section className={styles.partnersSection}>
      <BackArrow />
      <h1 className={styles.title}>Reputable Partners</h1>
      <p className={styles.description}>
        Auxesis is in its startup phase, where experienced and specialized
        partners are essential for swiftly launching operations. Our partners
        span a wide range of industries and expertise.
      </p>

      <div className={styles.partnersGrid}>
        {partnersData.map((partner, index) => (
          <div key={index} className={styles.partnerCard}>
            <Link href={partner.link}>
              <img
                src={partner.image}
                alt={partner.name}
                className={styles.partnerImage}
              />
            </Link>
            <div className={styles.partnerContent}>
              <h3 className={styles.partnerTitle}>{partner.name}</h3>
              <p className={styles.partnerDescription}>{partner.description}</p>
              <Link href={partner.link}>
                <button className={styles.partnerButton}>
                  More about {partner.name}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
