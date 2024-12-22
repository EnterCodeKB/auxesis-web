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
    image: "/team/LarsJpeg.jpeg",
  },
  {
    name: "Rune Nordström",
    title:
      "Styrelseordförande och affärsrådgivare, bolagsutveckling, PR och IR",
    description:
      "Rune Nordström är arbetande styrelseordförande i Auxesis. Han är en driven entreprenör med lång erfarenhet från bolagsstyrning, ledning, marknadsföring, civilsamhället, politik och kommunikation.  <br /><br />" +
      "Rune är medgrundare till Thinc som är en börsnoterad koncern på Spotlight stock market. Tidigare har han haft ledande befattningar som direktör på Svenska Kommunförbundet och Landstingsförbundet (nuvarande SKR) och som informationschef på den tidigare statliga myndigheten Arbetslivsinstitutet.",
    image: "/team/Rune.jpeg",
  },
  {
    name: "Charlotta Larsson",
    title: "Styrelseledamot och affärsrådgivare, sälj och marknad ",
    description:
      "Charlotta Larsson är en internationellt erfaren strategiexpert inom marknadsföring av FMCG och OTC produkter, med över 25 års erfarenhet utomlands där hon framgångsrikt har haft ledande befattningar.  <br /><br />" +
      "Charlotta har arbetat både strategiskt och operativt och har lett team över hela världen för att driva lönsam tillväxt i multinationella konsumentvaror och OTC -företag genom globala varumärkes- och produktportföljstrategier. <br /><br />  " +
      "Vidare har hon lång erfarenhet från att bygga och driva nystartade företag som backas upp av investerare. Hon har en Master of Science in Business Administration från Handelshögskolan vid Göteborgs Universitet.",
    image: "/team/CharlottaJpeg.jpeg",
  },

  {
    name: "Helena Adelsten",
    title: "Webbutvecklare/ Management Support ",
    description:
      "Helena Adelsten är en mångsidig och professionell med en akademisk bakgrund inom IT och ekonomi, expert inom logistik och systemutveckling.  <br /><br />" +
      "Som mjukvaruingenjör och webbutvecklare designar hon och utvecklar appar och programvaror. Det innebär att man skapar kod, testar den och implementerar den i olika system eller applikationer.  <br /><br />  " +
      "Vidare arbetar hon med att lösa problem, förbättra prestanda och säkerställa att programvaran fungerar korrekt och effektivt, skapa helt nya produkter eller tjänster med nya metoder, och hon utvecklar nya algoritmer i avancerade tekniker samt förbättrar användarupplevelsen." +
      "Helena är också grundare av EnterCode Sweden KB, som bedriver verksamhet inom webbutveckling, webbproduktion och webbprogrammering med fokus på kundanpassade tjänster samt erbjuder teknisk support.",
    image: "/team/HelenaJpeg.jpeg",
  },
  {
    name: "Peter Hedberg",
    title: "Immateriella rättigheter, affärsjuridiska avtal & tvistlösning ",
    description:
      "Peter Hedberg är specialiserad inom immaterialrätt, marknadsföring, affärsjuridik och tvistlösning. Som rådgivare till svenska och internationella företag har han omfattande erfarenhet av överträdelseförfaranden och strategisk IP-rådgivning.  <br /><br />" +
      "Han har även bistått klienter i en rad fall inom immaterialrätt och andra kommersiella områden. <br />  " +
      "Peters breda kompetens gör honom till en uppskattad rådgivare i både svenska och internationella sammanhang. ",
    image: "/team/Peter-RambergJpeg.jpeg",
  },
  {
    name: "Peter Åberg",
    title:
      "Affärsrådgivare, organisationsutvecklare inom medtech och läkemedel. Ingår i ASA.P läkemedelsutvecklings teamet.  ",
    description:
      "Peter Åberg har mer än tjugo års erfarenhet som organisationsutvecklare och ledare. Har utvecklat framgångsrika organisationer och innehaft positioner som VD, marknads- och hållbarhetsdirektör från start-up till börsbolag inom medicinteknik, farmakologi, tillverkningsindustrin och tjänsteföretag.  <br /><br />" +
      "Inom vården har Peter varit klinisk chef för läkare och administrativ personal. Har varit VD och hållbarhetsdirektör för ett rekryteringsföretag och utsågs två år i rad till Dagens Industris Supergasell som Sveriges snabbast växande företag i alla kategorier.<br /><br />  " +
      "Peter har en Med kand med toxikolog samt genomgått IFL på Handelshögskolans executive program samt Försvarsmaktens olika ledarprogram.  " +
      "Dessutom utvecklar han internationella hållbarhetsstandarder, ISO, inom ledarskap, organisation, hållbarhet och är FN-representant i Sverige för hållbar miljö, kvalité och affärsutveckling. ",
    image: "/team/PeterJpeg1.jpeg",
  },
  {
    name: "Susanna Liljedahl",
    title:
      "Civilingenjör, PM, anläggning. Ingår i ASA.P läkemedelsutvecklings teamet ",
    description:
      "Över 10 års erfarenhet från AstraZenecas forskningsavdelning  <br /><br />" +
      "På Zelmic är hon specialiserad på topisk leverans av läkemedel med in-vitro modellering, formuleringsutveckling, hållbarhetsstudier, hudens penetrationsförmåga, valideringsstudier och paketering av läkemedelsdoser till kund med tillhörande etikettsregler ",
    image: "/team/Susanna Lilje.jpeg",
  },
  {
    name: "Agneta Larhed",
    title: "Msci Pharm, PhD, ingår i ASA.P läkemedelsutvecklings teamet",
    description:
      "Agneta har varit verksam som forskare och chef inom både akademisk och industriell läkemedelsinnovation och produktutveckling i mer än 10 år. <br /><br />" +
      "Hennes arbete fokuserade på läkemedelsabsorption, läkemedelsleverans och formuleringsutveckling, och täckte en rad formuleringar och doseringsformer som tabletter, geler och mikropartiklar. <br /><br />  " +
      "Dessutom har hon varit delaktig i utvecklingen av kurser och symposier och är idag styrelseledamot i den vetenskapliga sektionen Farmaceutik i Läkemedelsakademien.",
    image: "/team/AgnetaJpeg.jpeg",
  },
  {
    name: "Marie Gårdmark",
    title: "Msci Pharm, PhD, ingår i ASA.P läkemedelsutvecklings teamet",
    description:
      "Dr Gårdmark har 10 års erfarenhet från ledande roller i små och stora läkemedelsföretag främst inom regulatorisk FoU, vilket exemplifieras av utveckling och implementering av globala regulatoriska strategier, due diligence-aktiviteter och vetenskapliga rådgivningsmöten i EU och USA. <br /><br />" +
      "Hennes huvudfokus har varit klinisk och preklinisk forskning med flera års erfarenhet från tidig läkemedelsutveckling.  Hennes vetenskapliga bakgrund är inom klinisk farmakologi och farmakometri.</<br /><br />  " +
      "Bakgrund inom Läkemedelsverket",
    image: "/team/MarieJpeg.jpeg",
  },
];

export default function VartTeam() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Kvalificerat team med bred expertis</h1>
      <p className={styles.subheading}>
        Auxesis har ett kvalificerat team med en bra sammansättning av
        kompetenser för att hantera bolagets samlade uppdrag och utmaningar:
      </p>
      {/* Infografik Bild */}
      <div className={styles.infografikContainer}>
        <Image
          src="/team/infografik1.png"
          alt="Infografik"
          width={800}
          height={400}
          className={styles.infografik}
        />
      </div>
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
