"use client";
import styles from "../../styles/Info.module.css";

export default function IntPatent() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.h1intpatent}>
          Auxesis Pharma har ansökt om <br />
          internationellt patent – <br /> ett steg mot global framgång
        </h1>
        <p>
          Auxesis Pharma har nu officiellt ansökt om ett internationellt patent,
          vilket markerar ett viktigt steg i företagets tillväxtresa.
          Patentprocessen har inletts enligt internationella regler och rutiner
          och är ett strategiskt initiativ för att stärka bolagets immateriella
          skydd på den globala marknaden.
        </p>
        <p>
          Att få ett internationellt patent beviljat skulle vara ett betydande
          erkännande av vår innovationskraft och kvaliteten på vår teknologi.
          Detta stärker vår position som en ledande aktör inom branschen och ger
          oss en tydlig konkurrensfördel i ett snabbt växande globalt landskap.
        </p>

        <p>
          "Vi är stolta över att driva innovation och skapa lösningar som gör
          skillnad. Detta patent är inte bara en milstolpe för Auxesis Pharma
          utan också en plattform för att fortsätta leverera värde till våra
          kunder och partners världen över," säger VD Roar Adelsten.
        </p>
        <p>
          Vi ser fram emot att bygga vidare på detta framgångsrika resultat och
          förstärka vår närvaro på den internationella marknaden.
        </p>
        <br />
        <a
          href="/patent/International Patent Application No. PCT_EP2024_084182.pdf"
          download="International Patent Application No. PCT_EP2024_084182.pdf"
          className={styles.downloadButton}
        >
          Ladda ner här
        </a>
      </section>

      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </>
  );
}
