"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Card.module.css";

const cardData = [
  {
    title: "Myggbett",
    description:
      "Myggbett kan orsaka en intensiv och irriterande smärta på huden. Denna smärta uppstår ofta som en klåda eller brännande känsla. När en mygga biter, injicerar den ett litet antal salivämnen som hindrar blodets koagulering. Kroppen reagerar på dessa ämnen med en inflammatorisk respons som leder till svullnad, rodnad och klåda vid bettet.",
    image: "/mygg.jpeg",
  },
  {
    title: "Brännmaneter",
    description:
      "Brännmaneter kan orsaka intensiv smärta, som känns som brännande, stickande eller svidande. De frigör gift genom sina nässelceller, vilket kan leda till rodnad, svullnad och klåda på huden. Behandling inkluderar sköljning med havsvatten och eventuellt medicinsk vård beroende på allvarlighetsgrad.",
    image: "/maneter.jpeg",
  },
  {
    title: "Husdjur",
    description:
      "Husdjur kan uppleva smärta från insektsbett eller skador som en intensiv obehaglig känsla, som de kanske visar genom att slicka, klia eller undvika att röra det drabbade området. Till skillnad från människor har de inte specifika smärtstillande medel för hudbesvär som är säkra och effektiva.",
    image: "/hundokatt.jpeg",
  },
  {
    title: "Getingbett",
    description:
      "Getingbett kan vara betydligt mer smärtsamma än myggbett. När en geting biter, injicerar den gift genom sin gadd, vilket kan orsaka en kraftig smärta och en brännande känsla.",
    image: "/C4587CDD-9AA9-4295-AF5F-2B26D7FB291D.jpeg",
  },
  {
    title: "Små barn",
    description:
      "Små barn kan uppleva irritation och smärta från olika tillstånd tex vid barnsjukdomar eller bett, vilket kan vara obehagligt för dem. För att lindra dessa symtom behövs smärtstillande medel, men det finns för närvarande inga salvor som är helt säkra för barn.",
    image: "/flicka.jpeg",
  },
  {
    title: "Boskap",
    description:
      "Boskap kan uppleva smärta från insektsbett eller utslag som kan orsaka klåda, svullnad och obehag. Dessa djur visar ofta sin smärta genom att vifta med svansen, gnida sig mot ytor eller försöka nå det drabbade området med sina ben. Eftersom de inte kan uttrycka smärta på samma sätt som människor, kan det vara svårt att bedöma deras lidande.",
    image: "/horse.jpeg",
  },
];

export default function CardGrid() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>OLIKA SMÄRTOR</h1>
      <p>
        {" "}
        Smärta kan yttra sig på olika sätt beroende på dess orsak och
        intensitet. Den kan sträcka sig från milt obehag, såsom klåda eller
        irritation orsakad av insektsbett, till mer intensiva känslor som
        brännande, stickande eller svullnad från giftiga stick eller skador. Hos
        människor kan smärta ofta beskrivas och behandlas effektivt, men hos
        djur varierar uttrycken för smärta, vilket gör det svårare att
        diagnostisera och hantera.
      </p>
      <div className={styles.grid}>
        {cardData.map((card, index) => (
          <div
            key={index}
            className={styles.card}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {hoverIndex === index ? (
              <div className={styles.textContainer}>
                <h2 className={styles.title}>{card.title}</h2>
                <p className={styles.description}>{card.description}</p>
              </div>
            ) : (
              <Image
                src={card.image}
                alt={`${card.title}`}
                width={300}
                height={300}
                className={styles.image}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
