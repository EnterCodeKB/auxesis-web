"use client";

export default function AnimalCare() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className={styles.animalcare}>
        <h2 className={styles.h2}>Auxesis Animal Care AB</h2>
        <p className={styles.ptext}>
          Auxesis Animal Care AB utvecklar produkter för djurvårdsmarknaden med
          fokus på hund, katt och boskapsindustri. Bland både djurägare och
          veterinärer finns det efterfrågan och marknad för en produkt som
          hanterar smärta på djurens hud. Därför kommer vi att styra vår
          forskning och utveckling i nästa steg mot kategorin
          veterinärmedicinska läkemedel.{" "}
          <p>
            Produkten CoxyPet® är ett preparat som består av flera botande
            substanser. En tydlig fördel är att djurhållaren själv kan applicera
            preparatet, djurhållaren behöver inte oroa sig för överdosering.
            Allt detta innebär en mindre revolution inom djurhållning.
          </p>
        </p>
        <h3 className={styles.h3}>Stor potential med flera fördelar</h3>
        <p className={styles.ptext}>
          Marknadspotentialen är stark eftersom preparatet innebär flera
          fördelar: <br />• Ägare kan använda preparatet utan att kontakta en
          veterinär. <br />• Preparatet kan användas på flera djurarter. <br />•
          Preparatet hjälper mot många olika åkommor. <br />• Preparatet kan
          bidra till att minska användandet av antibiotika och minska problemen
          med antibiotikaresistens.{" "}
        </p>
        <p className={styles.ptext}>
          Både husdjursmarknaden och företag inom köttproduktion är aktuella
          kunder för CoxyPet®. Preparatet kan även användas för att förebygga
          infektioner vid olika massingrepp på produktionsdjur, som till exempel
          vid avhorning på kor.
        </p>
        <img
          className={styles.imgcoxypet}
          src="/produkter/coxypet_tube.jpg"
          alt=""
        />
      </div>
      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </>
  );
}
