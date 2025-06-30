"use client";

import Image from "next/image";
import styles from "../../styles/Team.module.css";
import BackArrow from "../../components/BackArrow";

const teamMembers = [
  {
    name: "Roar Adelsten",
    title: "Grundare och styrelseledamot",
    description:
      "Roar Adelsten grundade Auxesis Pharma Holding AB, Auxesis MedTech AB och Auxesis Animal Care AB. <br /><br />" +
      "Han har nästan 30 års erfarenhet inom läkemedelsindustrin som VD, Field Manager och medicinsk konsult, bland annat på Pfizer AS i Norge. <br /><br />  " +
      "Roar har arbetat i Sverige, Norge och USA med ortopedi, kirurgiska instrument och led- samt benartroplastik.",

    image: "/team/4DF7E618-AFD1-48C9-A7D8-C06E869B29C7.jpeg",
  },

  {
    name: "Peter Åberg",
    title:
      "VD och affärsrådgivare, organisationsutvecklare inom medtech och läkemedel ",
    description:
      "Peter Åberg, del av ASA.P:s läkemedelsutvecklingsteam, har över 20 års erfarenhet som ledare och organisationsutvecklare. <br />" +
      "Han har haft roller som VD och hållbarhetsdirektör inom medicinteknik, farmakologi och tillverkningsindustrin. <br /><br />" +
      "Peter är Med kand i toxikologi, FN-representant och arbetar med internationella hållbarhetsstandarder för ledarskap, miljö och affärsutveckling.",
    image: "/team/PeterJpeg1.jpeg",
  },
  {
    name: "Magnus Larsson",
    title: "Ordförande ",
    description:
      "Magnus Larsson är entreprenör som startat flera företag och verkat i olika roller.<br />" +
      "Inom IT-branschen var han bl a en av grundarna till ett dotterbolag som världsledande inom distribution av IT produkter och drev upp försäljningen till 2,3 miljarder kr.  <br /><br /> " +
      "Sedan dess har Magnus även arbetet som koncernchef samt ordförande i både börsnoterade samt privata företag. " +
      "Parallellt under 2000-talet har Magnus haft en lång rad förtroendeuppdrag inom organisationen Svenskt Näringsliv." +
      "Magnus är ekonom från Stockholms Universitet med inriktning redovisning och finansiering.",

    image: "/team/magnus4.png",
  },
  {
    name: "Lars Larsson",
    title: "CFO och affärsrådgivare, ekonomi, finansiering och management ",
    description:
      "Lars Larsson har nästan 20 års erfarenhet som managementkonsult och arbetar med affärsutveckling och ekonomi. <br />" +
      "Han har haft chefsroller inom IT, telekom och fastighetsbranschen, bland annat som global leveranschef på Telia.  <br /><br />  " +
      "Med en BSc i Public Affairs, MSc i Management och kurser i marknadsföring har han en gedigen utbildningsbakgrund.",
    image: "/team/LarsJpeg.jpeg",
  },
  {
    name: "Rune Nordström",
    title: "Styrelsemedlem",
    description:
      "Rune Nordström är styrelsemedlem i Auxesis och en erfaren entreprenör inom bolagsstyrning, ledning, marknadsföring och kommunikation.<br /><br />" +
      "Han har haft ledande roller som direktör på SKR:s föregångare och som informationschef på Arbetslivsinstitutet.",
    image: "/team/Rune.jpeg",
  },
  {
    name: "Charlotta Larsson",
    title: "Styrelseledamot och affärsrådgivare, sälj och marknad ",
    description:
      "Charlotta Larsson är en strategiexpert inom FMCG och OTC med över 25 års internationell erfarenhet.<br /><br />" +
      "Hon har lett globala team, utvecklat varumärkesstrategier i multinationella företag och byggt nystartade investerarstödda bolag.  <br /><br />  " +
      "Charlotta har en MSc i Business Administration från Handelshögskolan i Göteborg.",
    image: "/team/CharlottaJpeg.jpeg",
  },

  {
    name: "Helena Adelsten",
    title: "Webbutvecklare/ Management Support ",
    description:
      "Helena Adelsten är mjukvaruingenjör och webbutvecklare med en akademisk bakgrund inom IT och ekonomi, samt många års erfarenhet av företagande.  <br /><br />" +
      "Hon designar och utvecklar appar, löser problem, förbättrar prestanda och utvecklar nya algoritmer. <br /><br />  " +
      "Som entreprenör fokuserar hon på webbutveckling, kundanpassade tjänster och teknisk support för att förbättra användarupplevelsen och skapa innovativa lösningar.",
    image: "/team/HelenaJpeg.jpeg",
  },
  {
    name: "Peter Hedberg",
    title: "Immateriella rättigheter, affärsjuridiska avtal & tvistlösning ",
    description:
      "Peter Hedberg är expert inom immaterialrätt, marknadsföring, affärsjuridik och tvistlösning.  <br /><br />" +
      "Han har omfattande erfarenhet av IP-strategier och överträdelseförfaranden, samt bistått klienter i olika kommersiella frågor. <br /> <br />  " +
      "Med bred kompetens är Peter en uppskattad rådgivare för svenska och internationella företag.",
    image: "/team/Peter-RambergJpeg.jpeg",
  },

  {
    name: "Susanna Liljedahl",
    title: "MSc Chem Eng och PM ",
    description:
      "Susanna ingår i ASA.P läkemedelsutvecklingsteam sedan september 2024 inom formuleringsutveckling och tillverkning av IMP. Susanna är projektledare på Zelmic.<br /><br />" +
      "Susanna har över 10 års erfarenhet som forskare och projektledare på bl a AstraZeneca med fokus på formulerings- och processutveckling av läkemedel. Susanna sitter med i ledningsgruppsteam och har drivit produkt- och processutveckling inom ett flertal bolag. ",
    image: "/team/Susanna Lilje.jpeg",
  },
  {
    name: "Agneta Larhed",
    title: "MSci Pharm och PhD",
    description:
      "Agneta är regulatorisk rådgivare åt Auxesis sedan augusti 2024 inom läkemedelskvalitet.<br /><br />" +
      "Hennes fokus är de kvalitetskrav som ställs på läkemedelssubstanser och läkemedelsprodukter inför kliniska studier och inför marknadsgodkännande.<br /><br />" +
      "Agneta har tidigare haft ledande roller inom FoU, formuleringsutveckling på företag och på regulatoriska myndigheter.",
    image: "/team/AgnetaJpeg.jpeg",
  },
  {
    name: "Marie Gårdmark",
    title: "MSci Pharm och PhD",
    description:
      "Marie är regulatorisk rådgivare åt Auxesis sedan augusti 2024 inom pre-klinik och klinik.<br />" +
      "Marie har många års erfarenhet från ledande roller på regulatorisk myndighet och inom FoU, med fokus på globala strategier, due diligence och vetenskapliga rådgivningsmöten i EU och USA. <br /><br />" +
      "Hon har arbetat med klinisk och preklinisk forskning, främst inom tidig läkemedelsutveckling.",
    image: "/team/MarieJpeg.jpeg",
  },
];

export default function VartTeam() {
  return (
    <div className={styles.container}>
      <BackArrow mainLink="/omoss" label="Om Oss" />

      <h1 className={styles.heading}>Kvalificerat team med bred expertis</h1>
      <p className={styles.subheading}>
        På Auxesis Pharma Holding AB samlar vi expertis inom flera nyckelområden
        för att driva innovation och tillväxt. Vår ledning styr strategiskt,
        forsknings- och produktionsteam utvecklar och tillverkar med hög
        kvalitet, och våra regulatoriska experter säkerställer regelefterlevnad.
        Vi skyddar varumärken juridiskt, hanterar kommunikation och
        investerarrelationer, samt driver försäljning och marknadsföring.
        Ekonomi och finansiering stärker vår långsiktiga stabilitet. Tillsammans
        formar vi framtidens läkemedelsutveckling.
      </p>
      {/* Infografik Bild */}

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
  );
}
