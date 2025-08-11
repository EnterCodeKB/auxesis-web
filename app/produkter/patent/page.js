"use client";

import BackArrow from "../../components/BackArrow";
import React from "react";
import styles from "./index.module.css";

export default function Patent() {
  const values = [
    {
      id: 1,
      title: "Fas 1",
      points: [
        "Svensk patentansökan till PRV (Local filing) – månad 0.",
        "Internationell patentansökan (PCT filing) – månad 12.",
        "Internationell sökrapport + skriftligt utlåtande – månad 16.",
        "Publicering av patentansökan (International Publication) – månad 18.",
      ],
    },
    {
      id: 2,
      title: "Fas 2",
      points: [
        "Begäran om förberedande patentbarhetsprövning – månad 22.",
        "Preliminär bedömning av patentbarheten – månad 28.",
        "Fullföljande i utvalda länder (National Phase) – månad 30.",
      ],
    },
  ];

  const milestones = [
    { month: 0, text: "✅ Local filing application " },
    { month: 12, text: "PCT filing ✅" },
    { month: 16, text: "✅ International search report" },
    { month: 18, text: "International Publication ✅" },
    { month: 22, text: "Demand for International Preliminary Examination" },
    { month: 28, text: "Preliminary Examination and Patentability Report" },
    { month: 30, text: "National Phase…" },
  ];
  return (
    <>
      <div className={styles.aboutWrapper}>
        {/* Sektion 1: Intro */}
        <section className={styles.section} aria-labelledby="our-story-heading">
          <div className={styles.container}>
            <div className={styles.split}>
              <div>
                <h2 id="our-story-heading" className={styles.h2}>
                  Patent söks i flera länder
                </h2>
                <p className={styles.lead}>
                  Auxesis Pharma lämnade den 29 november 2023 in en svensk
                  patentansökan till Patent- och registreringsverket (PRV) för
                  uppfinningen ASA.P®. Då påbörjades patentprocessen enligt
                  internationella regler och rutiner. Processen omfattar
                  översiktligt sju steg i två faser:
                </p>
              </div>
              <div className={styles.imageWrap}>
                <img
                  className={styles.image}
                  src="/patent/patentpending.jpg"
                  alt="Patent"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sektion 2: Faser */}
        <section
          className={`${styles.section} ${styles.muted}`}
          aria-labelledby="values-heading"
        >
          <div className={styles.container}>
            <h2 id="values-heading" className={`${styles.h2} ${styles.center}`}>
              Patentprocessen
            </h2>

            <div className={styles.cardGrid}>
              {values.map((value) => (
                <div key={value.id} className={styles.card}>
                  <h3 className={styles.h3}>{value.title}</h3>
                  <ul className={styles.list}>
                    {value.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sektion 3: Tidslinje */}
        <section className={styles.section} aria-labelledby="history-heading">
          <div className={styles.container}>
            <h2
              id="history-heading"
              className={`${styles.h2} ${styles.center}`}
            >
              Vår historia
            </h2>

            <div className={styles.timeline}>
              <div className={styles.timelineLine} aria-hidden="true" />
              <div className={styles.timelineItems}>
                {milestones.map((m, index) => (
                  <div
                    key={m.month}
                    className={`${styles.timelineRow} ${
                      index % 2 === 0 ? styles.rowReverse : ""
                    }`}
                  >
                    <div className={styles.side} />
                    <div className={styles.dotWrap}>
                      <span className={styles.dot} />
                    </div>
                    <div className={`${styles.side} ${styles.sideContent}`}>
                      <span className={styles.badge}>Månad {m.month}</span>
                      <p className={styles.timelineText}>{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
