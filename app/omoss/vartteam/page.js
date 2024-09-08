"use client";
import { useEffect } from "react";
import styles from "../../styles/Team.module.css";

export default function Team() {
  const Items = [
    {
      rubrik: "Roar Adelsten",
      title:
        "VD och grundare, Marknadsekonom och utbildad inom Farmakologi vid UiO Norge",
      description: `
        <p>Roar Adelsten är den visionära grundaren av Auxesis, Auxesis MedTech AB och Auxesis Animal Care AB. Han har ägnat de senaste 26 åren åt läkemedel och utveckling av sina bolag.</p>
        <p>Han har under sin yrkeskarriär arbetat nästan 30 år inom läkemedelsindustrin som VD, Field Manager och medicinsk konsult, bland annat på Pfizer AS i Norge. Hans erfarenhet inom medicinindustrin omfattar företag i Sverige, Norge och USA.</p>
        <p>Roars erfarenhet omfattar kirurgisk rekonstruktiv ortopedi, led- och benartroplastik, kirurgiska instrument med mera. Roar har en BS i nationalekonomi och marknadsföring från IHM Business School i Oslo, Norge. Han har också en grundutbildning i medicin och är certifierad läkemedelskonsulent från Oslo Universitet.</p>
      `,
      imageUrl: "../team/4DF7E618-AFD1-48C9-A7D8-C06E869B29C7.jpeg",
    },
    {
      rubrik: "Moustapha Hassan",
      title:
        "Föreståndare för prekliniska laboratoriet, Karolinska Universitetssjukhuset, Huddinge, Sverige",
      description: `
        <p>Professor i transplantationsforskning vid Karolinska Institutet och Director of the Preclinical Laboratory i 20 år.</p>
        <p>Han har en hög kompetens inom cellbiologi och medicinsk forskning. Moustapha har lång erfarenhet inom experimentell hematologi och som Senior forskare vid institutionen för klinisk farmakologi, Karolinska Universitetssjukhuset. Postdoktor/forskare vid Karolinska Sjukhusapotek. Gästprofessor i Pharmacotherapy vid Göteborgs universitet.</p>
      `,
      imageUrl: "../team/mou23.jpg",
    },
    {
      rubrik: "Ying Zhao",
      title: "Forskare / Post Doc., Karolinska Institutet, Huddinge, Sverige",
      description: `
        <p>Ying är forskare och seniorforskare vid Karolinska Universitetssjukhuset, Prekliniska Laboratoriet, Preklinisk Imaging Facility.</p>
        <p>Hon erbjuder praktisk och teoretisk vetenskaplig support i multimodala avbildningsexperiment och prekliniska studier. </p>
        <p>Forskningsintressen: molekylär avbildning, molekylär terapi, experimentell onkologi, transplantation av stamceller, personlig medicin.</p>
      `,
      imageUrl: "../team/zhao1.jpg",
    },
    {
      rubrik: "Lars Larsson",
      title: "Affärsrådgivare, CFO",
      description: `
      <p>Lars har lång erfarenhet som managementkonsult och arbetar med stöd till företagsledare, vd:ar, styrelseledamöter och företagare inom affärsutveckling och ekonomi.</p>
      <p>Lars har en bred erfarenhet från chefsbefattningar, främst inom IT- och telekombranschen och innehar både en BSc i Public Affairs och en MSc in Management från svenska universitet. I utbildningen ingår universitetskurser inom högre marknadsföring.</p>
        `,
      imageUrl: "../team/Lars_Larsson_Linked_4985-2-300x300.jpg",
    },
    {
      rubrik: "Rune Nordström",
      title:
        "Strategisk kommunikation, Branding, Public Affairs och Affärsrådgivare",
      description: `
      <p>Rune Nordström är arbetande styrelseordförande i Auxesis. Rune är en driven entreprenör med lång erfarenhet från bolagsstyrning, ledning, marknadsföring, civilsamhället, politik, kommunikation. </p>
      <p>Hans tjugo år som konsult har involverat ett brett och varierat engagemang inom ledning, verksamhetsstyrning och strategi, påverkansarbete, varumärkesrådgivning, krishantering och kriskommunikation.</p>
      <p>Tidigare kunder inkluderar privata företag, organisationer och aktörer från den offentliga sektorn.Rune har tidigare haft långsiktiga ledande befattningar som direktör på Svenska Kommunförbundet och Landstingsförbundet (nuvarande SKR) och som informationschef på den tidigare statliga myndigheten Arbetslivsinstitutet.</p>
      `,
      imageUrl: "../team/Rune_web-e1688155760282.jpg",
    },
    {
      rubrik: "Charlotta Larsson",
      title: "Styrelseledamot",
      description: `
      <p>Charlotta är en internationellt erfaren FMCG & OTC medicinmarknadsförings- och strategiexpert med över 25 års erfarenhet utomlands där hon framgångsrikt har haft ledande befattningar.  </p>
      <p>Hon har arbetat både strategiskt och operativt och har lett team över hela världen för att driva lönsam tillväxt i multinationella konsumentvaror och OTC / RX-företag genom globala varumärkes- och produktportföljstrategier. </p>
      <p>Charlotta har stor erfarenhet från att bygga och driva nystartade företag som backas upp av investerare. </p>
      `,
      imageUrl: "../team/Charlotta-profilbild-1-295x300.jpg",
    },
    {
      rubrik: "Helena Adelsten",
      title: "Webbutvecklare/ Management Support",
      description: `
      <p>Helena Adelsten är en mångsidig och professionell med en akademisk bakgrund inom IT och ekonomi, expert inom logistik och systemutveckling.</p>
      <p>Som mjukvaruingenjör och webbutvecklare designar hon och utvecklar appar och programvaror. Det innebär att man skapar kod, testar den och implementerar den i olika system eller applikationer. </p>
      <p>Helena arbetar med att lösa problem, förbättra prestanda och säkerställa att programvaran fungerar korrekt och effektivt, skapa helt nya produkter eller tjänster med nya metoder. Utveckla nya algoritmer och implementera de i avancerade tekniken samt förbättra användarupplevelsen.</p>
      `,
      imageUrl: "../team/A095535F-73B4-48B8-AB4C-2E9498AB43A2.png",
    },
    {
      rubrik: "Peter Hedberg",
      title: "Immateriella rättigheter, affärsjuridiska avtal & tvistlösning",
      description: `
<p>Peter Hedberg är specialiserad inom verksamhetsområdena Immaterialrätt, Marknadsföring, Affärsjuridik och Tvistlösning. Peter är rådgivare till svenska och internationella företag och har stor erfarenhet av överträdelseförfaranden och strategisk IP-rådgivning. Peter har biträtt klienter i flera fall inom immaterialrättsområdet, liksom andra kommersiella områden.</p>      
<p>Peter är rådgivare till svenska och internationella företag och har stor erfarenhet av överträdelseförfaranden och strategisk IP-rådgivning. Peter har biträtt klienter i flera fall inom immaterialrättsområdet, liksom andra kommersiella områden.</p>
<p>Peter har biträtt klienter i flera fall inom immaterialrättsområdet, liksom andra kommersiella områden.</p>
`,
      imageUrl: "../team/Peter-Ramberg600_web.jpg",
    },
    {
      rubrik: "Bobby Arash",
      title: "Advokat Regulatory Compliance",
      description: `
      <p>Bobby Arash är främst verksam inom Regulatory Compliance, miljörätt, EU-rätt samt finansiering och värdepappersrätt och arbetar huvudsakligen med legala och regulatoriska frågor som berör Life Science, medicinteknik och teknikföretag. </p>      
      <p>Bobby har över 15 års erfarenhet från arbete inom privat och offentlig sektor i EU, USA, Kanada och Sverige. Han bistår såväl av privata som offentliga aktörer i legala och regulatoriska frågor som avser säkerhet, miljö och hälsa, samt hantering av de kommersiella och operativa risker som uppstår i samband med regelefterlevnad inom Life Science, teknik- och miljösektorn. </p>
      <p>Han arbetar även med riskkapitalinvesteringar och regulatoriska frågor för ovan nämnda industrisektorer. </p>
      `,
      imageUrl: "../team/bobby-arash-1024x1024.jpg",
    },
    {
      rubrik: "Peter Åberg",
      title: "Organisationsutvecklare ",
      description: `
      <p>Peter har mer än tjugo års erfarenhet som organisationsutvecklare och ledare. Har utvecklat framgångsrika organisationer och ledarskap och innehaft positioner som VD, Marknads- och Hållbarhetsdirektör från start-up till börsbolag inom medicinteknik, farmakologi, tillverkningsindustrin, privata skolor och tjänsteföretag.  </p>
      <p>Inom offentlig verksamhet har Peter utvecklat organisationer inom regioner, kommuner och statliga avdelningar som förvaltnings- och verksamhetschef. </p>
      <p>Inom vården som klinisk chef för läkare och administrativ personal. Har senast varit vd och hållbarhetsdirektör för ett rekryteringsföretag och utsågs två år i rad till Dagens Industris Supergasell som Sveriges snabbast växande företag i alla kategorier. </p>
      <p>Peter utvecklar även internationella hållbarhetsstandarder, ISO, inom ledarskap, organisation, hållbarhet och är FN-representant i Sverige för hållbar miljö, kvalité och affärsutveckling. </p>
      <p>Utbildning:</p>
      <p>Peter har en Med kand med toxikolog samt genomgått IFL på Handelshögskolans executive program samt Försvarsmaktens olika ledarprogram</p>
`,
      imageUrl: "../team/1FE0C436-29BB-4B18-BAC0-A9D1704F0F6F.jpeg",
    },
    {
      rubrik: "Annika Möllström",
      title: "Redaktör/ Media",
      description: `
      <p>Annika har lång erfarenhet av strategisk och operativ kommunikation, PR och pressfrågor för kunder inom privat sektor, myndighet och ideell sektor. </p>
      <p>Annika är en rutinerad konsult med bred utbildning som med lätthet arbetar med olika kanaler.</p>
`,
      imageUrl: "../team/Annika.png",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.team}>
      <h2 className={styles.huvudtitle}>Vårt Team</h2>
      <div className={styles.ContainerFullPage}>
        {Items.map((item, index) => (
          <div key={index} className={styles.Item}>
            <a href={item.Url} target="_blank" rel="noopener noreferrer">
              <img
                src={item.imageUrl}
                alt={item.title}
                className={styles.image}
              />
            </a>
            <div className={styles.content}>
              <h3 className={styles.rubrik}>{item.rubrik}</h3>
              <h5 className={styles.title}>{item.title}</h5>
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </div>
  );
}
