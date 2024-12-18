import styles from "../usabrand/index.module.css";

export default function Usabrand() {
  return (
    <div className={styles.details}>
      <h1 className={styles.h1div}>Varumärket ASA.P godkännande från USA​</h1>
      <h4>2024-08-20</h4>
      <p className={styles.ptext}>
        Auxesis Pharma Holding AB har fått godkännande från USA för att använda
        varumärket ASA.P för en rad medicinska och veterinärprodukter.
        Godkännandet omfattar produkter som biologiska och kemiska preparat för
        smärtlindring, läkemedel för både människor och djur, samt olika
        medicinska produkter som kylsprayer, massage-geler och medicinerade
        schampon. Produkterna är avsedda för behandling av smärta, infektioner,
        sårvård och hudåkommor som solbränna och eksem där varumärket ASA.P
        täcker därmed ett brett spektrum av medicinska och veterinärmedicinska
        användningsområden. Detta godkännande är nr 27 av dom 32 länder vi har
        ansökt skydd för. Vi har även ansökt nya länder i Syd America och Afrika
        denna hösten.
      </p>
      <div className={styles.articlesimage1}>
        <img
          className={styles.asap1}
          src="/Nyheter/ASA.P - USA reg.79372694 (1)_Sida_2/1.png"
          alt="ASA.P - USA reg.79372694 (1)_Sida_1"
        />
        <img
          className={styles.asap2}
          src="/Nyheter/ASA.P - USA reg.79372694 (1)_Sida_2/2.png"
          alt="ASA.P - USA reg.79372694 (1)_Sida_2"
        />
      </div>
    </div>
  );
}
