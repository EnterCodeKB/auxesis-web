import styles from "../styles/Team.module.css";

export default function UtvecklingsTeamet() {
  const Items = [
    {
      rubrik: "Susanna Liljedahl,",
      title: "Civilingenjör, PM, anläggning ",
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
      title: "Msci Pharm, PhD ",
      description: `
      <p>Dr Gårdmark har 10 års erfarenhet från ledande roller i små och stora läkemedelsföretag främst inom regulatorisk FoU, vilket exemplifieras av utveckling och implementering av globala regulatoriska strategier, due diligence-aktiviteter och vetenskapliga rådgivningsmöten i EU och USA.</p>
      <p>Hennes huvudfokus har varit klinisk och preklinisk forskning med flera års erfarenhet från tidig läkemedelsutveckling.  Hennes vetenskapliga bakgrund är inom klinisk farmakologi och farmakometri.</p>
      <p>Bakgrund inom Läkemedelsverket</p>
 
      `,
      imageUrl: "/team/Marie Gårdmark.jpg",
    },

    {
      rubrik: "Agneta Larhed",
      title: "Msci Pharm, PhD",
      description: `
      <p>Agneta har varit verksam som forskare och chef inom både akademisk och industriell läkemedelsinnovation och produktutveckling i mer än 10 år.</p>
      <p>Hennes arbete fokuserade på läkemedelsabsorption, läkemedelsleverans och formuleringsutveckling, och täckte en rad formuleringar och doseringsformer som tabletter, geler och mikropartiklar. Dessutom har hon varit delaktig i utvecklingen av kurser och symposier och är idag styrelseledamot i den vetenskapliga sektionen Farmaceutik i Läkemedelsakademien.</p>

      <p>Bakgrund inom Läkemedelsverket</p>
      `,
      imageUrl: "/team/Agneta Larhed.jpg",
    },
  ];

  return (
    <section className={styles.team3}>
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
