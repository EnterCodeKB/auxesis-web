"use client";
import styles from "../styles/Info.module.css";
import { useRouter } from "next/navigation";

const newsItems = [
  {
    title: "Årsredovisning 2023​",
    subtitle: "2024/08/30",
    description: `
    <p>Godkänd Årsredovisning 2023-12-31 finns tillgänglig här</p>
    <p>Vänligen klicka på länken för att ladda ner rapporten.</p>
      `,
    imageUrl: "/Loganstext.png",
    slug: "arsredovisning2023",
  },
  {
    title: "Varumärket ASA.P godkännande från USA​",
    subtitle: "2024/08/20",
    description: "",
    imageUrl: "/Nyheter/ASA.P - USA reg.79372694 (1)_Sida_1.png",
    slug: "usabrand",
  },
  {
    title: "Ny partner- AFRY​",
    subtitle: "2024/07/11",
    description: `
      <p>Auxesis Pharma har påbörjat ett samarbete med AFRY som är ett globalt ingenjörs- och konsultföretag. Samarbetet omfattas av olika projekt delar inför framtagandet av våra kommande produkter. </p>
      `,
    imageUrl: "/partners/afry.jpeg",
    slug: "afry",
  },
  {
    title: "Ny partner – RegSmart Life Sciences AB",
    subtitle: "2024/07/11",
    description: `
      <p>Vi har nu etablerat ett samarbete med RegSmart Life Sciences AB för att få vägledning mot aktuella sökande och godkännande processer hos Svenska Läkemedelsverket. </p>
      <p>RegSmart Life Science är ett regulatoriskt konsultföretag inom läkemedel och medicintekniska produkter som hjälper kunden att navigera i ett komplext och föränderligt regulatoriskt landskap. Med lång regulatorisk erfarenhet från ledande befattningar på en tillsynsmyndighet och från små och stora life science-företag underlättar vi kundens arbete genom att veta ”vad som ska göras, när och hur”. RegSmart Life Sciences tillhandahåller lämpliga råd och stöd i förhållande till europeiska och amerikanska regulatoriska krav, vilket hjälper kunden att utveckla en regulatorisk plan som en del av din övergripande projektstrategi.</p>
      <p>Företagets expertis är att analysera och tolka den vägledning som tillhandahålls och beslut som tas av tillsynsmyndigheter i EU och USA och hjälpa till att svara på de specifika frågorna i kundens projekt. RegSmart Life Sciences tillhandahåller stöd från tidig forskning under hela din produktlivscykel, alltid med målproduktprofilen i åtanke.</p>
      <p>https://regsmart.se/</p>`,
    imageUrl: "/partners/reg.jpeg",
    slug: "#",
  },
  {
    title: "Ny partner – Zelmic AB",
    subtitle: "2024/07/10",
    description: `
      <p>Zelmic är en erfaren, privatägd CRO (Contract Research Organisation) och CDMO (Contract Development and Manufacturing Organisation) som helt fokuserar på utvecklingen av aktuella och transdermala farmaceutiska formuleringar. Zelmic är belägna i Lund, Sverige, ett av Europas främsta vetenskapscentrum och hem till många life science-företag, MAX IV-laboratoriet och FN:s nylanserade UNOPS Global Innovation Centre. Detta gör Zelmics dedikerade team och specialiserade laboratorium perfekt beläget för att hjälpa kunderna att lyckas.</p>
      <p>Zelmics experter är välutbildade inom aktuell och transdermal leverans och högkvalificerade inom formuleringsutveckling, analytisk kemi och hantering av immateriella rättigheter, allt i syfte att stärka kundens FoU-kapacitet och minimera kundens risk.</p>
      <p>https://zelmic.se/</p>`,
    imageUrl: "/partners/zelmic.png",
    slug: "#",
  },
  {
    title: "Auxesis MedTech AB",
    subtitle: "2024-05-23",
    description: `
      <p>Auxesis MedTech AB blev registrerat 2024-05-23 och ägs av Auxesis Pharma Holding AB. Auxesis MedTech AB ska etablera fabriken i Östersund, utveckla produktionsmetoder och försäljning till alla apotek i Sverige, Danmark och Finland.</p>
      `,
    imageUrl: "/maskiner.jpeg",
    slug: "#",
  },
  {
    title: "AUXESIS Kallelse till årsstämma",
    subtitle: "2024/06/18",
    description: `
      <p>Aktieägarna i AUXESIS PHARMA HOLDING AB (publ) med organisationsnummer 559195-6486 kallas härmed till årsstämma 
      den 18:e juni 2024 kl. 15.00 hos Ramberg Advokater på Jakobsbergsgatan 13 i Stockholm. </p>
      `,
    imageUrl: "/Loganstext.png",
    slug: "kallelse2024",
  },
  {
    title: "Värdering AUXESIS",
    subtitle: "2024/03/01",
    description: `
      <p>Fintegrity AB - Scenario One Pager värdering av aktierna i AUXESIS PHARMA HOLDING AB (publ) inför lansering av bolagets smärtstillande produkt ASA.P® finns nu tillgänglig.</p>
      `,
    imageUrl: "/Loganstext.png",
    slug: "vardering",
  },
  {
    title: "Ny SME status från EMA beviljad",
    subtitle: "2024/01/23",
    description: `
      <p>Auxesis Pharma Holding AB har den 2024-01-23 fått sin ansökan godkänd och erhållit SME status som ett ”Micro/Linked” bolag från Europeiska läkemedelsmyndigheten (EMA). En beviljad SME status från EMA betyder att bolaget får lättare tillgång till regulatorisk, finansiell och administrativ assistans från EMA inom utveckling av företagets produkter under alla steg.</p>
    `,
    imageUrl: "/Nyheter/EMA_Logo_standard.jpg",
    slug: "smestatus",
  },
  {
    title: "ÖFK-sponsor ett steg närmare fabrik i Östersund",
    subtitle: "2023/12/15",
    description: `
      <p>I augusti presenterade ÖFK nyheten att klubben hade fått en donation i form av 110 000 aktier i företaget AUXESIS PHARMA HOLDING AB (publ). Aktierna uppskattades till ett värde av 6 miljoner kronor.</p>
      `,
    imageUrl: "/Nyheter/Ostersunds_FK_logo.svg_.png",
    slug: "ofksponsor",
  },
  {
    title: "Patentansökan är nu officiellt registrerad!",
    subtitle: "2023/12/01",
    description: `
      <p>Vi är glada att meddela att AUXESIS PHARMA HOLDING AB (publ) 
      har framgångsrikt lämnat in ansökan för sitt allra första patent med ASA.P - formuleringen. </p>
      <p>Ett stort tack till EIP-Patent Office för det enastående arbete som har lagts ned i denna process!
      Denna milstolpe är ett bevis på vårt dedikerade team och deras hårda arbete. 
      Vi ser fram emot framtida framgångar och är tacksamma för det stöd vi har fått på vägen.
      Tack igen till alla inblandade för att göra denna resa möjlig och spännande!</p>
      `,
    imageUrl: "/Loganstext.png",
    slug: "#",
  },
  {
    title: "Produktionsplats​",
    subtitle: "2023/10/04",
    description: `
      <p>AUXESIS PHARMA HOLDING AB (publ) fortsätter sin ”resa” med att under fredag 2023-10-27 besöka Näringslivskontoret inom Östersunds kommun. Dessutom deltar Region Jämtland/Härjedalen. Syftet med besöket är att påbörja den operativa planeringen med etablering av en produktionsenhet inom Östersunds kommun.</p>
      `,
    imageUrl: "/Loganstext.png",
    slug: "#",
  },
  {
    title: "Euroclear Sweden AB​",
    subtitle: "2023/08/15",
    description: `
      <p>AUXESIS PHARMA HOLDING AB (publ) är nu avstämningsbolag och igång med Euroclear Sweden AB som värdepappersinstitut. Detta är sista fasen, enligt ABL, på vägen mot börsnotering och nu ska vi välja vilken Corporate Finance grupp vi kommer att samarbeta med, för att ta oss dit.</p>
      `,
    imageUrl: "/Loganstext.png",
    slug: "euroclear",
  },
  {
    title: "Östersund​",
    subtitle: "2023/08/11",
    description: `
      <p>AUXESIS PHARMA AB (publ) är i etableringsfasen av läkemedelstillverkning i Östersund, Sverige.
      I september 2023 kommer bolaget att lämna in en ansökan om patent till Patent- och registreringsverket. När det är klart riktas planerna mot Östersund.</p>
      <p>– Vi vill bygga en fabrik där uppe. Vi börjar planera fabriken när forskargruppen på Karolinska i Stockholm är klara med sitt jobb. Vi vill också stödja fotbollen och vill lära känna kommunen där vi ska etablera oss, säger Roar Adelsten.</p>
      `,
    imageUrl: "/Loganstext.png",
    slug: "#",
  },
  {
    title: "Värdering AUXESIS 03/2023​",
    subtitle: "2023/03/01",
    description: `
      <p>Scenario värdering av aktierna i AUXESIS PHARMA HOLDING AB (publ) inför lansering av bolagets smärtstillande produkt ASA.P® finns nu tillgänglig.</p>
      <p>Tryck på "Läs mer" för att ladda ner</p>
      `,
    imageUrl: "/Loganstext.png",
    slug: "vardering2023",
  },
  {
    title: "Nyheter Euroclear Sverige​",
    subtitle: "2022/05/12",
    description: `
      <p>AUXESIS PHARMA HOLDING AB (publ) jobbar nu med att registrera företagets aktionärer i Euroclear systemet. Som kund hos Euroclear Sweden blir Auxesis Pharma en del av navet i den svenska finansmarknaden. När bolagets aktier är registrerade hos Euroclear digitaliseras aktieboken och flyttas över till deras system. Förutom att det är en förutsättning om Auxesis Pharma vill börsnoteras i framtiden, innebär det också flera fördelar. Ett avstämningsbolag är ett aktiebolag vars bolagsordning innehåller villkor om att bolagets aktier ska vara registrerade i ett avstämningsregister hos en värdepapperscentral. Anledningen till att ett bolag väljer att bli ett avstämningsbolag är ofta att bolaget önskar införas på en marknadsplats såsom börsmarknaden. </p>
      <p></p>
      `,
    imageUrl: "/Loganstext.png",
    slug: "#",
  },
  {
    title: "Publikt Aktiebolag​",
    subtitle: "2022/09/21",
    description: `
      <p>AUXESIS PHARMA HOLDING AB (publ) är nu registrerat i Bolagsverket som ett publikt aktiebolag med aktiekapital på 500.000:-.
      Ett publikt aktiebolag har rätt att sprida aktier, teckningsrätter och andra värdepapper till allmänheten. </p>
      <p></p>
      `,
    imageUrl: "/Loganstext.png",
    slug: "#",
  },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
export default function Nyheter() {
  const router = useRouter();

  const handleInfoClick = (slug) => {
    router.push(`/nyheter/${slug}`);
  };

  return (
    <div className={styles.spotlights}>
      <h2 className={styles.title}>Alla Nyheter</h2>
      <div className={styles.newsContainerFullPage}>
        {newsItems.map((item) => (
          <div key={item.slug} className={styles.newsItem}>
            <img
              src={item.imageUrl}
              alt={item.title}
              className={styles.image}
            />
            <div className={styles.content}>
              <h3 className={styles.newsTitle}>{item.title}</h3>
              <h4 className={styles.date}>{item.subtitle}</h4>
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
            <button
              className={styles.infoButton}
              onClick={() => handleInfoClick(item.slug)}
            >
              Läs mer
            </button>
          </div>
        ))}
      </div>
      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </div>
  );
}
