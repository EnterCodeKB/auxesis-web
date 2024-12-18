"use client";

export default function Auxesis() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.auxesis}>
        <div>
          <h2 className={styles.h2}>Auxesis Pharma Holding AB</h2>
          <div className={styles.ptext}>
            Auxesis Pharma Holding AB är moderbolag och äger rättigheterna till
            patent inom specifika medicinska forskningsområden.{" "}
            <p>
              {" "}
              Auxesis äger två dotterbolag: Auxesis MedTech AB och Auxesis
              Animal Care AB.
            </p>{" "}
            <p>
              {" "}
              Vår forskning utvecklar flera preparat som snabbt blockerar
              smärtsignalen till hjärnan och tar bort smärta på huden.
              Preparaten behandlar inte bara den tillfälliga smärtan utan också
              hudsymtomen. Ett exempel är olika former av herpesvirus som
              orsakar hudproblem. Man kan alltså behandla och bli av med
              irritation, smärta och de synliga utslagen på huden, även om
              viruset finns kvar i kroppen.
            </p>
            <p>
              Effekten kommer inom några minuter och i dag finns det inget
              motsvarande läkemedel på den medicinska marknaden. Innovationen
              kan också vara användbar för husdjur och boskap, även om vissa
              receptanpassningar per djurart krävs. Kosmetika- och
              hudvårdsindustrin är ytterligare en målgrupp.
            </p>
          </div>
          <h3 className={styles.h3}>Stark potential för unik produkt</h3>
          <p className={styles.ptext}>
            Enligt projektplanen kommer produkterna för människor att vara redo
            för marknadsintroduktion i Norden under 2026 och därefter i resten
            av världen.{" "}
            <p>
              Enligt våra bedömningar kan ett eller flera preparat för djur
              finnas tillgängliga på marknaden 2027.
            </p>
          </p>
        </div>
      </div>
      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </>
  );
}
