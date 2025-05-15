"use client";

import { useRouter } from "next/navigation";
import styles from "./index.module.css";

export default function Produktion() {
  const router = useRouter();

  const handleInfoClick = () => {
    router.push(
      "https://www.op.se/2024-09-21/raddade-ofk-nu-har-lakemedelsforetaget-hittat-lokal/"
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.img1}
          src="/Nyheter/börsen.jpeg"
          alt="Auxesis väg till börsen"
        />
      </div>
      <h1 className={styles.title}>Newsletter – Spring 2025</h1>
      <h4 className={styles.date}>2025-05-13</h4>
      <h2 className={styles.subtitle}>
        Spring has arrived across the country, and summer is just around the
        corner.
      </h2>
      <p className={styles.text}>
        Over the past year, Auxesis Pharma has concentrated on the key
        priorities in pharmaceutical development, including solubility, skin
        penetration, and long-term product stability. We are now approaching a
        stable formulation ready for further testing and regulatory submission
        to the Swedish Medical Products Agency.
      </p>
      <p className={styles.text}>
        To strengthen our development efforts, we have partnered with some of
        Sweden’s leading laboratories and chemists specializing in topical pain
        relief.
      </p>
      <p className={styles.text}>
        In parallel, we are initiating an evaluation of the prerequisites for
        establishing a future production facility in Östersund. This autumn, we
        will launch a project study in collaboration with the consulting firm
        AFRY, with the aim of identifying the optimal manufacturing solution
        that meets both Auxesis Pharma’s standards and regulatory requirements
        for functionality and performance. To ensure quality and delivery
        reliability, we will work exclusively with Swedish equipment suppliers.
        <p></p>
        The patent process is progressing according to plan. As we move closer
        to a finalized and registered patent, we also see opportunities to apply
        for additional patents.
        <p></p>
        We are continuously exploring new opportunities in pharmaceutical
        development and patent protection, including in the field of burn care,
        where we see significant potential to reduce patient suffering. Our
        product, ASA.P, provides pain relief for minor burns, wasp stings,
        jellyfish stings, and more. Currently, there is a lack of effective
        topical treatments for more severe pain. Auxesis Pharma has identified
        this need and sees strong market potential for prescription products
        targeting serious burns and corrosive injuries. We have initiated
        indication studies in collaboration with leading Swedish and
        international researchers and clinicians in the field.
      </p>
      <p className={styles.text}>
        We now believe the time is right to begin preparations for an initial
        public offering (IPO). This work will commence in early autumn in
        partnership with the audit firm Edlund & Partners in Östersund, who will
        support us in ensuring that Auxesis Pharma meets the administrative
        requirements set forth for a public listing from the outset.
        <p></p>
        The exact timing of the IPO will depend on market conditions, regulatory
        progress, and the company’s continued development. Our shareholders will
        be kept informed as the process advances.
        <p></p>
        We hope to see you at our Annual General Meeting on June 17 at 15:00
        (official notice will follow shortly).
        <p></p> <p></p>We would like to conclude by wishing you a pleasant and
        relaxing summer.
      </p>

      <div className={styles.imageContainer}>
        <img
          className={styles.img2}
          src="/Nyheter/labben.jpeg"
          alt="Forskning och utveckling"
        />
      </div>
    </div>
  );
}
