//app/data/newsItems.js

export const newsItems = [
  {
    title: " Auxesis Pharma har ansökt om internationellt patent ",
    subtitle: "2024/11/29",
    description: `
        <p></p>
          `,
    imageUrl: "/patent/D4DB271D-DC40-4CAE-A2F2-E55F9A89A57C.jpeg",

    slug: "internationelltpatent",
    isLatest: true, // Märkt som senaste
  },

  {
    title: "Auxesis MedTech AB har en produktionsanläggning",
    subtitle: "2024/09/21",
    description: `
        <p></p>
          `,
    imageUrl: "/Nyheter/entrelokal.jpeg",

    slug: "produktion",
    isLatest: true, // Märkt som senaste
  },

  {
    title: "Varumärket ASA.P godkänns i USA​",
    subtitle: "2024/08/20",
    description: `
          <p></p>
          `,
    imageUrl: "/Nyheter/ASA.P - USA reg.79372694 (1)_Sida_2/1.png",
    slug: "usabrand",
    isLatest: true, // Märkt som senaste
  },

  {
    title: "Ny partner - AFRY​",
    subtitle: "2024/07/11",
    description: `
          <p></p>
          `,
    imageUrl: "/partners/afrybygg.avif",
    slug: "afry",
    isLatest: true, // Märkt som senaste
  },
  {
    title: "Ny partner – RegSmart Life Sciences AB",
    subtitle: "2024/07/11",
    description: `
          <p></p>`,
    imageUrl: "/partners/reg.jpeg",
    slug: "regsmart",
    isLatest: true, // Märkt som senaste
  },
  {
    title: "Ny partner Zelmic AB",
    subtitle: "2024/07/10",
    description: `
          <p></p>
          `,
    imageUrl: "/partners/zelmic.png",
    slug: "nypartnerzelmic",
    isLatest: true, // Märkt som senaste
  },
  {
    title: "Auxesis MedTech AB är nu registrerad",
    subtitle: "2024/05/23",
    description: `
          <p></p>
          `,
    imageUrl: "/maskiner.jpeg",
    slug: "medtechreg",
    isLatest: true, // Märkt som senaste
  },
  {
    title: "Viktig aktionärinformation ",
    subtitle: "2024/05/24",
    description: `
          <p></p>
          `,
    imageUrl: "",
    slug: "avstamningsbolag",
    isLatest: true,
  },
  {
    title: "AUXESIS Kallelse till årsstämma",
    subtitle: "2024/06/18",
    description: `
          <p></p>
          `,
    imageUrl: "",
    slug: "kallelse2024",
    isLatest: true,
  },
  {
    title: "Värdering AUXESIS",
    subtitle: "2024/03/01",
    description: `
          <p> </p>
          `,
    imageUrl: "/Loganstext.png",
    slug: "vardering",
    isLatest: true, // Ej senaste
  },
  {
    title: "Ny SME status från EMA beviljad",
    subtitle: "2024/01/23",
    description: `
          <p></p>
        `,
    imageUrl: "/Nyheter/EMA_Logo_standard.jpg",
    slug: "smestatus",
    isLatest: true, // Ej senaste
  },
  {
    title: "ÖFK-sponsor ett steg närmare fabrik i Östersund",
    subtitle: "2023/12/15",
    description: `
          <p></p>
          `,
    imageUrl: "/Nyheter/Ostersunds_FK_logo.svg_.png",
    slug: "ofksponsor",
    isLatest: true,
  },
  {
    title: "Patentansökan är nu officiellt registrerad!",
    subtitle: "2023/12/01",
    description: `
          <p></p>
          `,
    imageUrl: "/Loganstext.png",
    slug: "patentasokanregistrerad",
    isLatest: true,
  },

  {
    title: "Euroclear Sweden AB​",
    subtitle: "2023/08/15",
    description: `
          <p></p>
          `,
    imageUrl: "/Loganstext.png",
    slug: "euroclear",
    isLatest: true, // Ej senaste
  },
  //{
  // title: "Östersund​",
  // subtitle: "2023/08/11",
  // description: `
  //     <p></p>
  //     `,
  //imageUrl: "/Loganstext.png",
  // slug: "#",
  // isLatest: true, // Ej senaste
  //},
  {
    title: "Värdering AUXESIS 03/2023​",
    subtitle: "2023/03/01",
    description: `
          <p></p>
         
          `,
    imageUrl: "/Loganstext.png",
    slug: "vardering2023",
    isLatest: true, // Ej senaste
  },
  /*{
    title: "Nyheter Euroclear Sverige​",
    subtitle: "2022/05/12",
    description: `
          <p></p>
          <p></p>
          `,
    imageUrl: "/Loganstext.png",
    slug: "#",
    isLatest: true, // Ej senaste
  },*/
  {
    title: "Publikt Aktiebolag​",
    subtitle: "2022/09/21",
    description: `
          <p></p>
          
          `,
    imageUrl: "/Loganstext.png",
    slug: "publiktaktiebolag",
    isLatest: true,
  },
];

// Hjälpfunktion för paginering
export const paginate = (items, page, itemsPerPage) => {
  const startIndex = (page - 1) * itemsPerPage;
  return items.slice(startIndex, startIndex + itemsPerPage);
};

// Filtrera senaste nyheter
export const latestNews = newsItems
  .filter((item) => item.isLatest)
  .map(({ title, subtitle }) => ({ title, subtitle }));
