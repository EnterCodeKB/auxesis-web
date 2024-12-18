"use client";
import styles from "../../styles/Team.module.css";

export default function Team() {
  const Items = [
    {
      rubrik: "Roar Adelsten",
      title: "VD, grundare och styrelseledamot ",
      description: `
        <p>Roar Adelsten är grundaren av Auxesis Pharma Holding AB, Auxesis MedTech AB och Auxesis Animal Care AB. Roar har under sin yrkeskarriär arbetat nästan 30 år inom läkemedelsindustrin som VD, Field Manager och medicinsk konsult, bland annat på Pfizer AS i Norge. </p>
        <p>Han har erfarenhet av medicinindustrin i Sverige, Norge och USA och har arbetat med kirurgisk rekonstruktiv ortopedi, led- och benartroplastik, kirurgiska instrument med mera. </p>
        <p>Roar har en BS i nationalekonomi och marknadsföring från IHM Business School i Oslo, Norge. </p>
        <p>Han har också en grundutbildning i medicin och är certifierad läkemedelskonsulent från Oslo Universitet.</p>

        `,
      imageUrl: "../team/4DF7E618-AFD1-48C9-A7D8-C06E869B29C7.jpeg",
    },

    {
      rubrik: "Rune Nordström",
      title:
        "Styrelseordförande och affärsrådgivare, bolagsutveckling, PR och IR",
      description: `
      <p>Rune Nordström är arbetande styrelseordförande i Auxesis. Han är en driven entreprenör med lång erfarenhet från bolagsstyrning, ledning, marknadsföring, civilsamhället, politik och kommunikation. </p>
      <p>Rune är medgrundare till Thinc som är en börsnoterad koncern på Spotlight stock market. Tidigare har han haft ledande befattningar som direktör på Svenska Kommunförbundet och Landstingsförbundet (nuvarande SKR) och som informationschef på den tidigare statliga myndigheten Arbetslivsinstitutet.</p>
      `,
      imageUrl: "../team/Rune_web-e1688155760282.jpg",
    },
    {
      rubrik: "Charlotta Larsson",
      title: "Styrelseledamot och affärsrådgivare, sälj och marknad ",
      description: `
      <p>Charlotta Larsson är en internationellt erfaren strategiexpert inom marknadsföring av FMCG och OTC produkter, med över 25 års erfarenhet utomlands där hon framgångsrikt har haft ledande befattningar.  </p>
      <p>Charlotta har arbetat både strategiskt och operativt och har lett team över hela världen för att driva lönsam tillväxt i multinationella konsumentvaror och OTC -företag genom globala varumärkes- och produktportföljstrategier.  </p>
      <p>Vidare har hon lång erfarenhet från att bygga och driva nystartade företag som backas upp av investerare. Hon har en Master of Science in Business Administration från Handelshögskolan vid Göteborgs Universitet.</p>
      `,
      imageUrl: "../team/Charlotta-profilbild-1-295x300.jpg",
    },

    {
      rubrik: "Lars Larsson",
      title: "CFO och affärsrådgivare, ekonomi, finansiering och management ",
      description: `
      <p>Lars Larsson har närmare två decenniers erfarenhet som managementkonsult och arbetar med stöd till företagsledare, vd:ar, styrelseledamöter och företagare inom affärsutveckling och ekonomi. </p>
      <p>Han har även en mångårig erfarenhet från olika typer av chefsbefattningar, främst inom IT- och telekombranschen, men har även erfarenhet från ekonomi och finans i fastighetsbranschen. </p>
      <p>Inom telekom har han bred erfarenhet som nätdriftschef på Östersunds teleområde till ansvarig global leveranschef för hela Telias CPE-verksamhet, dvs all fysisk utrustning. Med både en BSc i Public Affairs, (fokus på offentlig verksamhet) och en MSc in Management från svenska universitet samt universitetskurser inom högre marknadsföring har Lars en kvalificerad utbildningsbakgrund.</p>
 
      `,
      imageUrl: "../team/Lars_Larsson_Linked_4985-2-300x300.jpg",
    },
    {
      rubrik: "Helena Adelsten",
      title: "Webbutvecklare/ Management Support",
      description: `
      <p>Helena Adelsten är en mångsidig och professionell med en akademisk bakgrund inom IT och ekonomi, expert inom logistik och systemutveckling.</p>
      <p>Som mjukvaruingenjör och webbutvecklare designar hon och utvecklar appar och programvaror. Det innebär att man skapar kod, testar den och implementerar den i olika system eller applikationer. </p>
      <p>Vidare arbetar hon med att lösa problem, förbättra prestanda och säkerställa att programvaran fungerar korrekt och effektivt, skapa helt nya produkter eller tjänster med nya metoder, och hon utvecklar nya algoritmer i avancerade tekniker samt förbättrar användarupplevelsen.</p>
      <p>Helena är också grundare av EnterCode Sweden KB, som bedriver verksamhet inom webbutveckling, webbproduktion och webbprogrammering med fokus på kundanpassade tjänster samt erbjuder teknisk support.</p>

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
      rubrik: "Peter Åberg",
      title:
        "Affärsrådgivare, organisationsutvecklare inom medtech och läkemedel. Ingår i ASA.P läkemedelsutvecklings teamet. ",
      description: `
      <p>Peter Åberg har mer än tjugo års erfarenhet som organisationsutvecklare och ledare. Har utvecklat framgångsrika organisationer och innehaft positioner som VD, marknads- och hållbarhetsdirektör från start-up till börsbolag inom medicinteknik, farmakologi, tillverkningsindustrin och tjänsteföretag.</p>
      <p>Inom vården har Peter varit klinisk chef för läkare och administrativ personal. Har varit VD och hållbarhetsdirektör för ett rekryteringsföretag och utsågs två år i rad till Dagens Industris Supergasell som Sveriges snabbast växande företag i alla kategorier.</p>
      <p>Peter har en Med kand med toxikolog samt genomgått IFL på Handelshögskolans executive program samt Försvarsmaktens olika ledarprogram. Dessutom utvecklar han internationella hållbarhetsstandarder, ISO, inom ledarskap, organisation, hållbarhet och är FN-representant i Sverige för hållbar miljö, kvalité och affärsutveckling. </p>
      <p>Peter är för närvarande en av ALMI:s hållbarhetsexperter.</p>
`,
      imageUrl: "../team/Peter1.png",
    },
    {
      rubrik: "Susanna Liljedahl,",
      title:
        "Civilingenjör, PM, anläggning. Ingår i ASA.P läkemedelsutvecklings teamet.",
      description: `
        <p>Över 10 års erfarenhet från AstraZenecas
        forskningsavdelning  </p>
        <p>På Zelmic är hon specialiserad på topisk leverans
        av läkemedel med in-vitro modellering,
        formuleringsutveckling, hållbarhetsstudier, hudens
        penetrationsförmåga, valideringsstudier och
        paketering av läkemedelsdoser till kund med
        tillhörande etikettsregler </p>
        `,
      imageUrl: "/team/Susanna Lilje1.jpg",
    },
    {
      rubrik: "Marie Gårdmark",
      title: "Msci Pharm, PhD, ingår i ASA.P läkemedelsutvecklings teamet. ",
      description: `
      <p>Dr Gårdmark har 10 års erfarenhet från ledande roller i små och stora läkemedelsföretag främst inom regulatorisk FoU, vilket exemplifieras av utveckling och implementering av globala regulatoriska strategier, due diligence-aktiviteter och vetenskapliga rådgivningsmöten i EU och USA.</p>
      <p>Hennes huvudfokus har varit klinisk och preklinisk forskning med flera års erfarenhet från tidig läkemedelsutveckling.  Hennes vetenskapliga bakgrund är inom klinisk farmakologi och farmakometri.</p>
      <p>Bakgrund inom Läkemedelsverket</p>
 
      `,
      imageUrl: "/team/Marie Gårdmark.jpg",
    },

    {
      rubrik: "Agneta Larhed",
      title: "Msci Pharm, PhD, ingår i ASA.P läkemedelsutvecklings teamet.",
      description: `
      <p>Agneta har varit verksam som forskare och chef inom både akademisk och industriell läkemedelsinnovation och produktutveckling i mer än 10 år.</p>
      <p>Hennes arbete fokuserade på läkemedelsabsorption, läkemedelsleverans och formuleringsutveckling, och täckte en rad formuleringar och doseringsformer som tabletter, geler och mikropartiklar. Dessutom har hon varit delaktig i utvecklingen av kurser och symposier och är idag styrelseledamot i den vetenskapliga sektionen Farmaceutik i Läkemedelsakademien.</p>

      <p>Bakgrund inom Läkemedelsverket</p>
      `,
      imageUrl: "/team/Agneta Larhed.jpg",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={styles.team}>
      <h1 className={styles.divh1}>Kvalificerat team med bred expertis</h1>
      <p className={styles.ptext}>
        Auxesis har ett kvalificerat team med en bra sammansättning av
        kompetenser för att hantera bolagets samlade uppdrag och utmaningar:
      </p>
      <img className={styles.infografik} src="/team/infografik1.png" alt="" />

      <div className={styles.bolagsstyrelse}>
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
      </div>

      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </section>
  );
}
