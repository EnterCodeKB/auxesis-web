"use client";

import Image from "next/image";
import styles from "../../../styles/Team.module.css";
import BackArrow from "../../components/BackArrow";
import HeroTeam from "../../components/HeroOurTeam";

const teamMembers = [
  {
    name: "Roar Adelsten",
    title: "Founder and Board Member",
    description:
      "Roar Adelsten founded Auxesis Pharma Holding AB, MedTech AB, and Animal Care AB.      <br /><br />" +
      "He has nearly 30 years of experience in the pharmaceutical industry, having held roles as CEO, Field Manager, and Medical Consultant, including at Pfizer AS in Norway.<br /><br />  " +
      "Roar has worked in Sweden, Norway, and the United States in the fields of orthopedics, surgical instruments, and joint and bone arthroplasty.",

    image: "/team/4DF7E618-AFD1-48C9-A7D8-C06E869B29C7.jpeg",
  },

  {
    name: "Peter Åberg",
    title:
      "CEO and Business Advisor, Organizational Developer in MedTech and Pharmaceuticals      ",
    description:
      "Peter Åberg, a member of ASA.P's pharmaceutical development team, has over 20 years of experience as a leader and organizational developer. <br />" +
      "He has held roles as CEO and Sustainability Director in the medical technology, pharmacology, and manufacturing industries.<br /><br />" +
      "Peter holds a Medical Candidate degree in Toxicology, serves as a UN representative, and works with international sustainability standards for leadership, environmental management, and business development.",
    image: "/team/PeterJpeg1.jpeg",
  },
  {
    name: "Lars Larsson",
    title: "CFO and Business Advisor, Finance, Funding, and Management ",
    description:
      "Lars Larsson has nearly 20 years of experience as a management consultant, specializing in business development and finance.<br />" +
      "He has held executive roles in the IT, telecommunications, and real estate sectors, including serving as Global Delivery Manager at Telia. <br /><br />  " +
      "With a BSc in Public Affairs, an MSc in Management, and additional coursework in marketing, he has a solid educational background.",
    image: "/team/LarsJpeg.jpeg",
  },
  {
    name: "Rune Nordström",
    title: "Styrelseordförande och PR och IR",
    description:
      "Rune Nordström is the Executive Chairman of Auxesis and an experienced entrepreneur in corporate governance, management, marketing, and communications.      <br /><br />" +
      "He has held senior leadership roles as a Director at the predecessor of SKR and as Head of Communications at the Swedish National Institute for Working Life.",
    image: "/team/Rune.jpeg",
  },
  {
    name: "Charlotta Larsson",
    title: "Board Member and Business Advisor, Sales and Marketing    ",
    description:
      "Charlotta Larsson is a strategy expert in FMCG and OTC with over 25 years of international experience.<br /><br />" +
      "She has led global teams, developed brand strategies for multinational companies, and built investor-backed startups. <br /><br />  " +
      "Charlotta holds an MSc in Business Administration from the School of Business, Economics, and Law at the University of Gothenburg.",
    image: "/team/CharlottaJpeg.jpeg",
  },

  {
    name: "Helena Adelsten",
    title: "Webbutvecklare/ Management Support ",
    description:
      "Helena Adelsten is a software engineer and web developer with an academic background in IT and economics.<br /><br />" +
      "She designs and develops applications, solves complex problems, optimizes performance, and creates new algorithms.<br /><br />  " +
      "As an entrepreneur, she specializes in web development, customized services, and technical support, focusing on enhancing user experience and delivering innovative solutions.",
    image: "/team/HelenaJpeg.jpeg",
  },
  {
    name: "Peter Hedberg",
    title:
      "Intellectual Property, Business Legal Agreements & Dispute Resolution    ",
    description:
      "Peter Hedberg is an expert in intellectual property, marketing, business law, and dispute resolution.      <br /><br />" +
      "He has extensive experience in IP strategies and infringement procedures, as well as assisting clients with various commercial matters.      <br /> <br />  " +
      "With broad expertise, Peter is a highly regarded advisor to both Swedish and international companies.      ",
    image: "/team/Peter-RambergJpeg.jpeg",
  },

  {
    name: "Susanna Liljedahl",
    title: "MSc Chemical Engineering and Project Management    ",
    description:
      "Susanna has been part of the ASA.P pharmaceutical development team since September 2024, specializing in formulation development and IMP manufacturing. She is also a project manager at Zelmic.      <br /><br />" +
      "With over 10 years of experience as a researcher and project manager, including at AstraZeneca, Susanna has focused on formulation and process development for pharmaceuticals. She is a member of executive management teams and has led product and process development across multiple companies. ",
    image: "/team/Susanna Lilje.jpeg",
  },
  {
    name: "Agneta Larhed",
    title: "MSc Pharm and PhD    ",
    description:
      "Agneta has been a regulatory advisor to Auxesis since August 2024, specializing in pharmaceutical quality.<br /><br />" +
      "Her focus is on the quality requirements for drug substances and pharmaceutical products in preparation for clinical trials and market approval.<br /><br />" +
      "Agneta has previously held senior roles in R&D, formulation development at pharmaceutical companies, and regulatory authorities.",
    image: "/team/AgnetaJpeg.jpeg",
  },
  {
    name: "Marie Gårdmark",
    title: "MSc Pharm and PhD    ",
    description:
      "Marie has been a regulatory advisor to Auxesis since August 2024, specializing in preclinical and clinical development.<br />" +
      "She has many years of experience in senior roles at regulatory agencies and within R&D, with a focus on global strategies, due diligence, and scientific advisory meetings in the EU and the US.      <br /><br />" +
      "Marie has worked extensively in clinical and preclinical research, primarily in early-stage drug development.",
    image: "/team/MarieJpeg.jpeg",
  },
];

export default function VartTeam() {
  return (
    <>
      <div className={styles.container}>
        <BackArrow mainLink="/en/about" label="About Us" />

        <h1 className={styles.heading}>
          A Qualified Team with Broad Expertise
        </h1>
        <p className={styles.subheading}>
          At Auxesis Pharma Holding AB, we bring together expertise across key
          areas to drive innovation and growth. Our leadership provides
          strategic direction, while our research and production teams develop
          and manufacture high-quality solutions. Regulatory experts ensure
          compliance, legal specialists protect our trademarks, and our
          communication and investor relations teams build strong connections.
          Sales and marketing drive market reach, while finance secures
          long-term stability. Together, we shape the future of pharmaceutical
          development.
        </p>

        <div className={styles.grid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.card}>
              <Image
                src={member.image}
                alt={`${member.name}'s picture`}
                width={150}
                height={150}
                className={styles.image}
              />
              <h2 className={styles.name}>{member.name}</h2>
              <h3 className={styles.title}>{member.title}</h3>
              <p
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: member.description }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
