"use client";
import styles from "../../../styles/Asap.module.css";
import BackArrow from "../../components/BackArrow";
import HeroProduct from "../../components/HeroSectionProduct";

export default function AsaP() {
  return (
    <>
      <HeroProduct />
      <section className={styles.sectionA}>
        <BackArrow mainLink="/produkter/historik" label="Produkter" />

        <h2>EN Receptfritt preparat för människa - ASA.P® </h2>

        <div className={styles.container1}>
          <div className={styles.textcontainer}>
            <p className={styles.ptext}>
              Det finns idag ingen känd OTC-produkt (receptfritt läkemedel) på
              marknaden som snabbt tar bort smärta och irritation på huden. De
              produkter som för närvarande finns tillgängliga ger lindrande och
              svalkande effekt under en kort period och appliceringen måste
              upprepas regelbundet. <br /> <br />
              Preparatet ASA.P® är ett receptfritt läkemedel för humant bruk för
              behandling av smärta och irritation på huden orsakad av
              insektsbett, maneter, brännässlor och andra allergiframkallande
              växter, mindre brännskador, solbränna, utslag och eksem.
            </p>
          </div>
          <div>
            <img
              className={styles.imgirritation}
              src="/produkter/B5FC1967-6242-4F3A-9F8D-2B48204D2492.jpeg"
              alt="klias i myggbett"
            />
          </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.textcontainer}>
            <h2 className={styles.divh2}>
              Blockerar smärtan tills kroppen läkt sig själv
            </h2>
            <p className={styles.ptext}>
              ASA.P® är den första receptfria konsumentprodukten som snabbt tar
              bort smärta och irritation på huden:
            </p>
            <br />
            <ul className={styles.ulList}>
              <li>Snabb effekt, smärtan borta inom några minuter.</li>
              <br />
              <li>En applicering räcker.</li>
              <br />
              <li>
                Blockerar smärtan med snabb effekt tills kroppen har läkt sig
                själv.
              </li>
              <br />
              <li>Antiinflammatorisk.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
