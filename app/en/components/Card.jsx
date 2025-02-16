"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Card.module.css";

const cardData = [
  {
    title: "Mosquitos",
    description:
      "Mosquito bites can cause intense and irritating pain on the skin, often experienced as itching or a burning sensation. When a mosquito bites, it injects a small amount of saliva containing anticoagulant substances to prevent blood clotting. The body reacts to these substances with an inflammatory response, leading to swelling, redness, and itching at the bite site.",
    image: "/mygg.jpeg",
  },
  {
    title: "Jellyfish",
    description:
      "Jellyfish can cause intense pain, often described as burning, stinging, or tingling. They release venom through their nematocysts, which can lead to redness, swelling, and itching on the skin. Treatment includes rinsing the affected area with seawater and, if necessary, seeking medical care depending on the severity of the reaction.",
    image: "/maneter.jpeg",
  },
  {
    title: "Pets",
    description:
      "Pets can experience pain from insect bites or injuries as an intense and unpleasant sensation, which they may express by licking, scratching, or avoiding contact with the affected area. Unlike humans, they do not have access to specific pain relievers for skin conditions that are both safe and effective.",
    image: "/hundokatt.jpeg",
  },
  {
    title: "Wasp",
    description:
      "Wasp stings can be significantly more painful than mosquito bites. When a wasp stings, it injects venom through its stinger, causing intense pain and a burning sensation.",
    image: "/C4587CDD-9AA9-4295-AF5F-2B26D7FB291D.jpeg",
  },
  {
    title: "Children",
    description:
      "Children can experience irritation and pain from various conditions, such as childhood illnesses or insect bites, which can be distressing for them. To relieve these symptoms, pain relief is needed, but currently, there are no topical treatments that are completely safe for children.",
    image: "/flicka.jpeg",
  },
  {
    title: "Livestock",
    description:
      "Livestock can experience pain from insect bites or rashes, leading to itching, swelling, and discomfort. These animals often express their pain by swishing their tails, rubbing against surfaces, or attempting to reach the affected area with their legs. Since they cannot communicate pain in the same way as humans, assessing their level of discomfort can be challenging.",
    image: "/horse.jpeg",
  },
];

export default function CardGrid() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>DIFFERENT TYPES OF PAIN</h1>
      <p>
        {" "}
        Pain can manifest in different ways depending on its cause and
        intensity. It can range from mild discomfort, such as itching or
        irritation from insect bites, to more intense sensations like burning,
        stinging, or swelling caused by venomous stings or injuries. In humans,
        pain can often be described and treated effectively, whereas in animals,
        the expressions of pain vary, making diagnosis and management more
        challenging.
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
