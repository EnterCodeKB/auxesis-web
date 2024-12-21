"use client";

import Image from "next/image";
import styles from "../../styles/Team.module.css";

const teamMembers = [
  {
    name: "Roar Adelsten",
    title: "VD, grundare och styrelseledamot",
    description:
      "Roar Adelsten är grundaren av Auxesis Pharma Holding AB, Auxesis MedTech AB och Auxesis Animal Care AB. <br /><br />" +
      "Roar har under sin yrkeskarriär arbetat nästan 30 år inom läkemedelsindustrin som VD, Field Manager och medicinsk konsult, bland annat på Pfizer AS i Norge.<br /><br />  " +
      "Han har erfarenhet av medicinindustrin i Sverige, Norge och USA " +
      "och har arbetat med kirurgisk rekonstruktiv ortopedi, led- och benartroplastik, kirurgiska instrument med mera. ",

    image: "/team/4DF7E618-AFD1-48C9-A7D8-C06E869B29C7.jpeg",
  },
  {
    name: "Lars Larsson",
    title: "CFO och affärsrådgivare, ekonomi, finansiering och management ",
    description:
      "Lars Larsson har närmare två decenniers erfarenhet som managementkonsult och arbetar med stöd till företagsledare, vd:ar, styrelseledamöter och företagare inom affärsutveckling och ekonomi.  <br /><br />" +
      "Han har även en mångårig erfarenhet från olika typer av chefsbefattningar, främst inom IT- och telekombranschen, men har även erfarenhet från ekonomi och finans i fastighetsbranschen. <br /><br />  " +
      "Inom telekom har han bred erfarenhet som nätdriftschef på Östersunds teleområde till ansvarig global leveranschef för hela Telias CPE-verksamhet, dvs all fysisk utrustning. " +
      "Med både en BSc i Public Affairs, (fokus på offentlig verksamhet) och en MSc in Management från svenska universitet samt universitetskurser inom högre marknadsföring har Lars en kvalificerad utbildningsbakgrund.",
    image: "/team/Lars_Larsson_Linked_4985-2-300x300.jpg",
  },
  {
    name: "Rune Nordström",
    title:
      "Styrelseordförande och affärsrådgivare, bolagsutveckling, PR och IR",
    description:
      "Rune Nordström är arbetande styrelseordförande i Auxesis. Han är en driven entreprenör med lång erfarenhet från bolagsstyrning, ledning, marknadsföring, civilsamhället, politik och kommunikation.  <br /><br />" +
      "Rune är medgrundare till Thinc som är en börsnoterad koncern på Spotlight stock market. Tidigare har han haft ledande befattningar som direktör på Svenska Kommunförbundet och Landstingsförbundet (nuvarande SKR) och som informationschef på den tidigare statliga myndigheten Arbetslivsinstitutet.",
    image: "/team/Rune_web-e1688155760282.jpg",
  },
  {
    name: "Charlotta Larsson",
    title: "Styrelseledamot och affärsrådgivare, sälj och marknad ",
    description:
      "Charlotta Larsson är en internationellt erfaren strategiexpert inom marknadsföring av FMCG och OTC produkter, med över 25 års erfarenhet utomlands där hon framgångsrikt har haft ledande befattningar.  <br /><br />" +
      "Charlotta har arbetat både strategiskt och operativt och har lett team över hela världen för att driva lönsam tillväxt i multinationella konsumentvaror och OTC -företag genom globala varumärkes- och produktportföljstrategier. <br /><br />  " +
      "Vidare har hon lång erfarenhet från att bygga och driva nystartade företag som backas upp av investerare. Hon har en Master of Science in Business Administration från Handelshögskolan vid Göteborgs Universitet.",
    image: "/team/Charlotta-profilbild-1-295x300.jpg",
  },
];

export default function VartTeam() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Vårt Team</h1>
      <p className={styles.subheading}>
        Ett kvalificerat team med bred expertis för att möta framtidens
        utmaningar.
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
  );
}
