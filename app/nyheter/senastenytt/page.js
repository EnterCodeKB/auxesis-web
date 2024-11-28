"use client";
import styles from "../../styles/Info.module.css";
import { useRouter } from "next/navigation";

const newsItems = [
  {
    title: "Auxesis MedTech AB ",
    subtitle: "2024/09/21",
    description: `
    <p>Den 17 september 2024 besökte Auxesis Östersund för att skriva på kontraktet...</p>
      `,
    slug: "produktion",
    isLatest: true, // Märkt som senaste
  },
  {
    title: "Årsredovisning 2023​",
    subtitle: "2024/08/30",
    description: `
    <p>Godkänd årsredovisning 2023-12-31 finns tillgänglig här. Klicka på länken för att ladda ner rapporten...</p>
      `,
    imageUrl: "/Loganstext.png",
    slug: "arsredovisning2023",
    isLatest: true, // Märkt som senaste
  },
  {
    title: "Varumärket ASA.P godkänns i USA​",
    subtitle: "2024/08/20",
    description:
      "Auxesis Pharma Holding AB har fått godkännande från USA för att använda varumärket ASA.P för en rad medicinska och veterinärprodukter...",
    imageUrl: "/Nyheter/ASA.P - USA reg.79372694 (1)_Sida_1.png",
    slug: "usabrand",
    isLatest: true, // Märkt som senaste
  },
  {
    title: "Ny partner - AFRY​",
    subtitle: "2024/07/11",
    description: `
      <p>Auxesis Pharma har påbörjat ett samarbete med AFRY som är ett globalt ingenjörs- och konsultföretag. Samarbetet omfattas av olika...</p>
      `,
    imageUrl: "/partners/afry.jpeg",
    slug: "afry",
    isLatest: true, // Märkt som senaste
  },
  {
    title: "Ny partner – RegSmart Life Sciences AB",
    subtitle: "2024/07/11",
    description: `
      <p>Påbörjat samarbete med RegSmart Life Sciences AB för aktuella sökande och godkännande processer hos Svenska Läkemedelsverket... </p>`,
    imageUrl: "/partners/reg.jpeg",
    slug: "#",
    isLatest: true, // Märkt som senaste
  },
  {
    title: "Ny partner – Zelmic AB",
    subtitle: "2024/07/10",
    description: `
      <p>Zelmic är en erfaren, privatägd CRO (Contract Research Organisation) och CDMO (Contract Development and Manufacturing Organisation)...</p>
      `,
    imageUrl: "/partners/zelmic.png",
    slug: "#",
    isLatest: true, // Märkt som senaste
  },
  {
    title: "Auxesis MedTech AB",
    subtitle: "2024-05-23",
    description: `
      <p>Auxesis MedTech AB blev registrerat 2024-05-23 och ägs av Auxesis Pharma Holding AB. Auxesis MedTech AB ska etablera fabriken i Östersund...</p>
      `,
    imageUrl: "/maskiner.jpeg",
    slug: "#",
    isLatest: true, // Märkt som senaste
  },
  {
    title: "AUXESIS Kallelse till årsstämma",
    subtitle: "2024/06/18",
    description: `
      <p>Aktieägarna i AUXESIS PHARMA HOLDING AB (publ) med organisationsnummer 559195-6486 kallas härmed till...</p>
      `,
    imageUrl: "/Loganstext.png",
    slug: "kallelse2024",
    isLatest: false, // Ej senaste
  },
  {
    title: "Värdering AUXESIS",
    subtitle: "2024/03/01",
    description: `
      <p>Fintegrity AB - Scenario One Pager värdering av aktierna i AUXESIS PHARMA HOLDING AB (publ)... </p>
      `,
    imageUrl: "/Loganstext.png",
    slug: "vardering",
    isLatest: false, // Ej senaste
  },
  {
    title: "Ny SME status från EMA beviljad",
    subtitle: "2024/01/23",
    description: `
      <p>Auxesis Pharma Holding AB har den 2024-01-23 fått sin ansökan godkänd och erhållit SME status... </p>
    `,
    imageUrl: "/Nyheter/EMA_Logo_standard.jpg",
    slug: "smestatus",
    isLatest: false, // Ej senaste
  },
  {
    title: "ÖFK-sponsor ett steg närmare fabrik i Östersund",
    subtitle: "2023/12/15",
    description: `
      <p>I augusti presenterade ÖFK nyheten att klubben hade fått en donation...</p>
      `,
    imageUrl: "/Nyheter/Ostersunds_FK_logo.svg_.png",
    slug: "ofksponsor",
    isLatest: false, // Ej senaste
  },
  {
    title: "Patentansökan är nu officiellt registrerad!",
    subtitle: "2023/12/01",
    description: `
      <p>Vi är glada att meddela att AUXESIS PHARMA HOLDING AB (publ) 
      har framgångsrikt lämnat in ansökan... </p>
      `,
    imageUrl: "/Loganstext.png",
    slug: "#",
    isLatest: false, // Ej senaste
  },
  {
    title: "Produktionsplats​",
    subtitle: "2023/10/04",
    description: `
      <p>AUXESIS PHARMA HOLDING AB (publ) fortsätter sin ”resa” med att under fredag 2023-10-27 besöka Näringslivskontoret inom Östersunds kommun... </p>
      `,
    imageUrl: "/Loganstext.png",
    slug: "#",
    isLatest: false, // Ej senaste
  },
  {
    title: "Euroclear Sweden AB​",
    subtitle: "2023/08/15",
    description: `
      <p>AUXESIS PHARMA HOLDING AB (publ) jobbar nu med att registrera företagets aktionärer i Euroclear systemet... </p>
      `,
    imageUrl: "/Loganstext.png",
    slug: "euroclear",
    isLatest: false, // Ej senaste
  },
  {
    title: "Östersund​",
    subtitle: "2023/08/11",
    description: `
      <p>AUXESIS PHARMA AB (publ) är i etableringsfasen av läkemedelstillverkning i Östersund, Sverige...</p>
      `,
    imageUrl: "/Loganstext.png",
    slug: "#",
    isLatest: false, // Ej senaste
  },
  {
    title: "Värdering AUXESIS 03/2023​",
    subtitle: "2023/03/01",
    description: `
      <p>Scenario värdering av aktierna i AUXESIS PHARMA HOLDING AB (publ) inför lansering av bolagets smärtstillande produkt ASA.P® finns nu tillgänglig.</p>
     
      `,
    imageUrl: "/Loganstext.png",
    slug: "vardering2023",
    isLatest: false, // Ej senaste
  },
  {
    title: "Nyheter Euroclear Sverige​",
    subtitle: "2022/05/12",
    description: `
      <p>AUXESIS PHARMA HOLDING AB (publ) jobbar nu med att registrera företagets aktionärer i Euroclear systemet... </p>
      <p></p>
      `,
    imageUrl: "/Loganstext.png",
    slug: "#",
    isLatest: false, // Ej senaste
  },
  {
    title: "Publikt Aktiebolag​",
    subtitle: "2022/09/21",
    description: `
      <p>AUXESIS PHARMA HOLDING AB (publ) är nu registrerat i Bolagsverket som ett publikt aktiebolag med aktiekapital på 500.000:-...
      
      `,
    imageUrl: "/Loganstext.png",
    slug: "#",
    isLatest: false, // Ej senaste
  },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const latestNews = newsItems
  .filter((item) => item.isLatest) // Filtrera för att få de senaste nyheterna
  .map(({ title, subtitle }) => ({ title, subtitle }));
export default function Nyheter() {
  const router = useRouter();

  const handleInfoClick = (slug) => {
    router.push(`/nyheter/${slug}`);
  };

  return (
    <div>
      <h2 className={styles.title}>Alla Nyheter</h2>
      <div className={styles.spotlights}>
        <div className={styles.newsContainerFullPage}>
          {newsItems.map((item) => (
            <div key={item.slug} className={styles.newsItemContainer}>
              <div className={styles.newsItem}>
                <div className={styles.content}>
                  <h3 className={styles.newsTitle}>{item.title}</h3>
                  <h4 className={styles.date}>{item.subtitle}</h4>
                  <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
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
    </div>
  );
}
