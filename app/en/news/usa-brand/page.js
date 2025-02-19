import styles from "./index.module.css";

export default function Usabrand() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ASA.P Trademark Approved in the U.S. ​</h1>
      <h4 className={styles.date}>2024-08-20</h4>
      <p className={styles.text}>
        Auxesis Pharma Holding AB has received U.S. approval to use the ASA.P
        trademark for a range of medical and veterinary products. The approval
        covers products including biological and chemical preparations for pain
        relief, medications for both humans and animals, and various medical
        products such as cooling sprays, massage gels, and medicated shampoos.
        <br /> <br />
        These products are designed for the treatment of pain, infections, wound
        care, and skin conditions, including sunburn and eczema. The ASA.P
        trademark now encompasses a wide range of medical and veterinary
        applications. <br />
        <br />
        This approval is number 27 out of the 32 countries where protection has
        been applied for. Additionally, new trademark applications have been
        submitted this fall in South America and Africa.
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
