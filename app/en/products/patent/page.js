"use client";

import React from "react";
import styles from "../../../styles/Patent.module.css";
import BackArrow from "../../components/BackArrow";

export default function Patent() {
  const values = [
    {
      id: 1,
      title: "Phase 1",
      points: [
        "Swedish Patent Application (Local Filing Application) – Month 0.",
        "International Patent Application (PCT Filing Application) – Month 12.",
        "Internationell sökrapport (International search report) med skriftligt utlåtande – månad 16.",
        "Publication of the Patent Application (International Publication) – Month 18",
      ],
    },
    {
      id: 2,
      title: "Phase 2",
      points: [
        "Request for Preliminary Patentability Examination (Demand for International Preliminary Examination) – Month 22.",
        "Preliminary Examination and Patentability Report – Month 28.",
        "Finalization of National Patent Applications (National Phase) – Month 30.",
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
        <BackArrow />

        {/* Sektion 1: Intro */}
        <section className={styles.section} aria-labelledby="our-story-heading">
          <div className={styles.container}>
            <div className={styles.split}>
              <div>
                <h2 id="our-story-heading" className={styles.h2}>
                  Patent Applications in Multiple Countries{" "}
                </h2>
                <p className={styles.lead}>
                  On November 29, 2023, Auxesis Pharma submitted a Swedish
                  patent application for ASA.P® to the Swedish Patent and
                  Registration Office (PRV), initiating the patent process in
                  accordance with international regulations and procedures.{" "}
                  <br /> <br /> The process consists of seven key steps across
                  two phases:
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
              The patent process
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
              Timeline
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
                      <span className={styles.badge}>Month {m.month}</span>
                      <p className={styles.timelineText}>{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className={styles.patentsection}>
        <p className={styles.ptext}>
          The first 30 months of the patent process are dedicated to developing
          a strong application with the best possible prospects for future
          registration and patent approvals in selected countries.
        </p>
      </section>
    </>
  );
}
