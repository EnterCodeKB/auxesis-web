import styles from "../usabrand/index.module.css";

export default function Usabrand() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Varumärket ASA.P godkännande från USA​</h1>
      <h4 className={styles.date}>2024-08-20</h4>
      <p className={styles.text}>
        Auxesis Pharma Holding AB har fått godkännande från USA för att använda
        varumärket ASA.P för en rad medicinska och veterinärprodukter.
        Godkännandet omfattar produkter som biologiska och kemiska preparat för
        smärtlindring, läkemedel för både människor och djur, samt olika
        medicinska produkter som kylsprayer, massage-geler och medicinerade
        schampon. Produkterna är avsedda för behandling av smärta, infektioner,
        sårvård och hudåkommor såsom solbränna och eksem. Varumärket ASA.P
        täcker därmed ett brett spektrum av både medicinska och
        veterinärmedicinska användningsområden. Godkännande är nr 27 av dom 32
        länder vi har ansökt skydd för. Vi har även ansökt nya länder i
        Sydamerika och Afrika denna hösten.
      </p>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="/Nyheter/ASA.P - USA reg.79372694 (1)_Sida_2/1.png"
          alt="ASA.P - USA reg.79372694 (1)_Sida_1"
        />
        <img
          className={styles.image}
          src="/Nyheter/ASA.P - USA reg.79372694 (1)_Sida_2/2.png"
          alt="ASA.P - USA reg.79372694 (1)_Sida_2"
        />
      </div>
    </div>
  );
}
