"use client";
import styles from "./index.module.css";

export default function IntPatent() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className={styles.intpatent}>
        <h1 className={styles.h1intpatent}>
          Auxesis Pharma Applies for
          <br />
          International Patent – <br /> A Step Toward Global Success
        </h1>
        <p className={styles.ptext}>
          Auxesis Pharma has now officially applied for an international patent,
          marking a significant milestone in the company's growth journey. The
          patent process has been initiated in accordance with international
          regulations and procedures, representing a strategic move to
          strengthen the company’s intellectual property protection in the
          global market.
        </p>
        <p className={styles.ptext}>
          Obtaining an international patent would be a major recognition of our
          innovative capabilities and the quality of our technology. This
          strengthens our position as an industry leader and provides a clear
          competitive advantage in a rapidly expanding global landscape.
        </p>
        <p className={styles.ptext}>
          "We are proud to drive innovation and create solutions that make a
          difference. This patent is not only a milestone for Auxesis Pharma but
          also a platform for continuing to deliver value to our customers and
          partners worldwide," says CEO Roar Adelsten.
        </p>
        <p className={styles.ptext}>
          We look forward to building on this achievement and further expanding
          our presence in the international market.
        </p>
        <div className={styles.button}>
          <a
            href="/patent/International Patent Application No. PCT_EP2024_084182.pdf"
            target="International Patent Application No. PCT_EP2024_084182.pdf"
            rel="noopener noreferrer"
            className={styles.downloadButton}
          >
            Download Here
          </a>
        </div>
      </section>
    </>
  );
}
