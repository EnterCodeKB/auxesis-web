"use client";

import styles from "../../styles/ProduktCoxypet.module.css";

export default function Coxypet() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className={styles.sectionC}>
        <div className={styles.contentSection}>
          <div className={styles.textBlock}>
            <h2>Naturligt och innovativt preparat för djur - CoxyPet®</h2>
            <p>
              Det finns globalt mer än 1,5 miljoner nötkreatur, 960 miljoner
              grisar, 600 miljoner hästar, 900 miljoner hundar, 600 miljoner
              katter.
              <br />
              Användning av Acetylsalicylsyra oralt eller genom injektion inom
              veterinärmedicin avråds starkt i många länder och är förbjuden i
              vissa, däribland USA och Storbritannien.
            </p>
            <p>
              Boskapsdjur, inklusive kor och grisar, behandlas regelbundet med
              antibiotika i förebyggande syfte vilket leder till betydande
              förluster av mjölk- och köttproduktion under behandlingen.
            </p>
          </div>
          <img
            className={styles.image1}
            src="/produkter/theo2.png"
            alt="Hund Theo"
          />
        </div>

        <div className={styles.contentSection}>
          <img
            className={styles.image}
            src="/produkter/coxypet.png"
            alt="Coxypet"
          />
          <div className={styles.textBlock}>
            <h2>Reducerar användningen av antibiotika</h2>
            <p>
              CoxyPet® erbjuder naturliga och innovativa lösningar för
              medicinering av djur. Hudsmärtan kan behandlas med CoxyPet®, dels
              för att ta bort smärtan och minska inflammationen, dels för att
              förbättra djurhållningen.
            </p>
            <p>
              Användningen av CoxyPet® med lokal applicering kan reducera
              beroendet av antibiotika och andra läkemedel och därmed bidra till
              minskad resistens mot antibiotika samt minskning av klimat- och
              miljöpåverkan.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.textBlock3}>
            <h2>Stor potential med flera fördelar</h2>
            <p>
              CoxyPet® bygger på banbrytande forskning inom veterinärmedicin och
              innehåller flera substanser med botande effekt. Det unika med
              CoxyPet® är att djurhållaren själv kan applicera preparatet utan
              risk för överdosering, vilket gör det både säkert och effektivt.
            </p>
            <p>
              Denna innovation representerar ett betydande framsteg inom modern
              djurhållning och öppnar nya möjligheter för att förbättra
              djurhälsan på ett hållbart sätt.
            </p>
          </div>
          <img
            className={styles.image}
            src="/kosan2024.png"
            alt="Ko på ängen"
          />
        </div>
      </section>

      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </>
  );
}
