import styles from "../styles/Team.module.css";

export default function UtvecklingsTeamet() {
  const Items = [
    {
      rubrik: "Peter Åberg",
      title:
        "Affärsrådgivare, organisationsutvecklare inom medtech och läkemedel  ",
      description: `
        <p>Peter Åberg har mer än tjugo års erfarenhet som organisationsutvecklare och ledare. Har utvecklat framgångsrika organisationer och innehaft positioner som VD, marknads- och hållbarhetsdirektör från start-up till börsbolag inom medicinteknik, farmakologi, tillverkningsindustrin och tjänsteföretag.</p>
        <p>Inom vården har Peter varit klinisk chef för läkare och administrativ personal. Har varit VD och hållbarhetsdirektör för ett rekryteringsföretag och utsågs två år i rad till Dagens Industris Supergasell som Sveriges snabbast växande företag i alla kategorier.</p>
        <p>Peter har en Med kand med toxikolog samt genomgått IFL på Handelshögskolans executive program samt Försvarsmaktens olika ledarprogram. Dessutom utvecklar han internationella hållbarhetsstandarder, ISO, inom ledarskap, organisation, hållbarhet och är FN-representant i Sverige för hållbar miljö, kvalité och affärsutveckling. </p>
        <p>Peter är för närvarande en av ALMI:s hållbarhetsexperter.</p>
  `,
      imageUrl: "/team/Peter1.png",
    },
    {
      rubrik: "Susanna Liljedahl,",
      title: "Civilingenjör, PM, anläggning ",
      description: `
        <p>- Över 10 års erfarenhet från AstraZenecas
        forskningsavdelning  </p>
        <p>- På Zelmic är hon specialiserad på topisk leverans
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
      title: "Msci Pharm, PhD ",
      description: `
      <p>- Regulatorisk FoU; utveckling och
      implementering av globala regulatoriska
      strategier</p>
      <p>- Bakgrund inom Läkemedelsverket</p>
 
      `,
      imageUrl: "/team/Marie Gårdmark.jpg",
    },

    {
      rubrik: "Agneta Larhed",
      title: "Msci Pharm, PhD",
      description: `
      <p>- Varit verksam som forskare och chef inom
      både akademisk och industriell
      läkemedelsinnovation</p>
      <p>- Bakgrund inom Läkemedelsverket</p>
      `,
      imageUrl: "/team/Agneta Larhed.jpg",
    },
  ];

  return (
    <section className={styles.team}>
      <h2 className={styles.presentation}>
        TEAMET BAKOM ASA.P LÄKEMEDELSUTVECKLING
      </h2>

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
    </section>
  );
}
