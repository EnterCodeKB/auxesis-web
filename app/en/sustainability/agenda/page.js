import React from "react";
import styles from "./index.module.css";
import BackArrow from "../../components/BackArrow";
import HeroAgenda from "../../components/HeroSectionAgenda";

const Agenda = () => {
  return (
    <>
      <HeroAgenda />
      <section className={styles.agenda}>
        <BackArrow />
        <h1>Responsibility and Transparency Are Key</h1>

        <div className={styles.section11}>
          <p className={styles.ptext}>
            Auxesis upholds a transparent approach, ensuring that the company's
            impact on society and the environment is clearly communicated.
            Furthermore, social responsibility is fully integrated into our core
            operations. For us, social and environmental factors are an
            essential part of our business strategy, rather than isolated
            initiatives.
          </p>
          <p className={styles.ptext}>
            The foundation of Auxesis' comprehensive sustainability efforts lies
            in our core values: innovation, reliability, and care. These values
            are embedded in everything we do and are reflected in our
            sustainability work in a clear, thoughtful, and systematic manner.
          </p>
        </div>
        <div className={styles.section22}>
          {" "}
          <h2>ISO Certification in the Near Future</h2>
          <p className={styles.ptext}>
            In 2025, Auxesis Pharma will begin the process of obtaining ISO
            14001 (Environmental Management) and ISO 9001 (Quality Management)
            certification. This reinforces our systematic sustainability efforts
            and ensures compliance with upcoming EU sustainability regulations.
          </p>
          <p className={styles.ptext}>
            In addition to ISO certification, our operations are guided by
            circular economy principles, our core values, and the UN Agenda 2030
            goals.
          </p>
        </div>
        <div className={styles.section3}>
          {" "}
          <h2>Circular Flows Drive Production</h2>
          <p className={styles.ptext}>
            When Auxesis begins production, we will operate within a circular
            economy framework to:
          </p>
          <ul>
            <li className={styles.divli}>Minimize material consumption</li>
            <li className={styles.divli}>
              Increase the use of recycled materials
            </li>
            <li className={styles.divli}>
              Maximize waste recovery and recycling
            </li>
            <li className={styles.divli}>
              Develop measurable indicators for continuous improvement
            </li>
          </ul>
        </div>
        <div className={styles.section4}>
          {" "}
          <h2>Agenda 2030 as the Foundation</h2>
          <p className={styles.ptext}>
            Agenda 2030 includes seven key areas that directly influence
            Auxesis' operations:
          </p>
          <ul>
            <li className={styles.divli}>
              Organizational Governance – We uphold ethical and transparent
              leadership that fosters social responsibility.
            </li>
            <li className={styles.divli}>
              Human Rights – We respect fundamental rights for all individuals,
              regardless of context.
            </li>
            <li className={styles.divli}>
              Working Conditions – We prioritize fair and safe working
              environments, inclusion, and non-discrimination.
            </li>
            <li className={styles.divli}>
              Environment – In pharmaceutical manufacturing, we emphasize
              sustainable practices to protect the environment.
            </li>
            <li className={styles.divli}>
              Business Ethics – We adhere to a clear and well-structured ethical
              framework, including anti-corruption measures and responsible
              marketing.
            </li>
            <li className={styles.divli}>
              Consumer Issues – We focus on product and service safety,
              accessibility, and quality.
            </li>
            <li className={styles.divli}>
              Community Engagement & Development – We contribute to social and
              economic development and actively participate in various
              non-profit initiatives.
            </li>
          </ul>
        </div>
        <div>
          <img className={styles.chema} src="/agenda/chema6.png" alt="Agenda" />
        </div>
      </section>
    </>
  );
};

export default Agenda;
