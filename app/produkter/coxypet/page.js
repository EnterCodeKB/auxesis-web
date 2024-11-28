"use client";

import styles from "../../styles/Produkter.module.css";

export default function Coxypet() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className={styles.sectionC}>
        <div className={styles.bildsectionhgr}>
          <div>
            <h2>Naturligt och innovativt preparat för djur - CoxyPet® </h2>
            <p className={styles.ptext}>
              Det finns globalt mer än 1,5 miljoner nötkreatur, 960 miljoner
              grisar, 600 miljoner hästar, 900 miljoner hundar, 600 miljoner
              katter.
              <br />
              Användning av Acetylsalicylsyra oralt eller genom injektion inom
              veterinärmedicin avråds starkt i många länder och är förbjuden i
              vissa, däribland USA och Storbritannien.
              <br />I stället används antibiotika, hydrokortison och andra
              läkemedel både i förebyggande syfte vid risk för infektion och vid
              behandling av pågående smärta.{" "}
            </p>
            <p>
              Boskapsdjur, inklusive kor och grisar, behandlas regelbundet med
              antibiotika i förebyggande syfte vilket leder till betydande
              förluster av mjölk- och köttproduktion under behandlingen.
            </p>
          </div>
          <div>
            <img
              className={styles.dogimg}
              src="/produkter/theo2.png"
              alt="Hund Theo"
            />
          </div>
        </div>
        <div className={styles.produktsection}>
          <div className={styles.container1}>
            <div>
              <img
                className={styles.coxypet}
                src="/produkter/coxypet.png"
                alt="Coxypet"
              />
            </div>
          </div>
          <div>
            <h2>Reducerar användningen av antibiotika </h2>
            <p className={styles.ptext}>
              CoxyPet® erbjuder naturliga och innovativa lösningar för
              medicinering av djur. Hudsmärtan kan behandlas med CoxyPet®, dels
              för att ta bort smärtan och minska inflammationen, dels för att
              förbättra djurhållningen.
              <br />
              Användningen av CoxyPet® med lokal applicering kan reducera
              beroendet av antibiotika och andra läkemedel och därmed bidra till
              minskad resistens mot antibiotika samt minskning av klimat- och
              miljöpåverkan.
            </p>
          </div>
        </div>
        <div className={styles.bildsectionhgr}>
          <div>
            <h2>Stor potential med flera fördelar</h2>
            <p className={styles.ptext}>
              CoxyPet® bygger på banbrytande forskning inom veterinärmedicin och
              innehåller flera substanser med  botande effekt. Det unika med
              CoxyPet® är att djurhållaren själv kan applicera preparatet utan
              risk för överdosering, vilket gör det både säkert och effektivt.
              Denna innovation representerar ett betydande framsteg inom modern
              djurhållning och öppnar nya möjligheter för att förbättra
              djurhälsan på ett hållbart sätt.
            </p>
          </div>
          <div>
            <img className={styles.koimg} src="/produkter/kosan.png" alt="" />
          </div>
        </div>

        <div className={styles.textcontainer2}>
          <p>
            Marknadspotentialen är stark eftersom preparatet innebär flera
            fördelar:
          </p>
        </div>

        <ul className={styles.ulList}>
          <li>
            Djurägare kan använda preparatet utan att kontakta en veterinär.
          </li>
          <li>Preparatet kan användas på flera djurarter.</li>
          <li>Preparatet hjälper mot många olika åkommor.</li>
          <li>
            Preparatet kan bidra till att minska användandet av antibiotika och
            minska problemen <br /> med antibiotikaresistens.
          </li>
        </ul>
        <br />
        <p className={styles.ptext}>
          Både husdjursmarknaden och företag inom köttproduktion är aktuella
          kunder för CoxyPet®. <br /> Preparatet kan även användas för att
          förebygga infektioner vid olika massingrepp på produktionsdjur, som
          till exempel vid avhorning på kor.
        </p>

        {/* <img
          className={styles.imgprodukt}
          src="/produkter/asap-swab.jpg"
          alt="ASA.P produkt"
        />*/}
      </section>
      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </>
  );
}
