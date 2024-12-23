"use client";
import styles from "./avstamning.module.css";

export default function AvstamningsBolag() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className={styles.avstamningsbolag}>
        <div className={styles.whiteboard}>
          <h2>
            Viktig information till alla aktieägare i <br />
            AUXESIS PHARMA HOLDING AB (publ)
          </h2>
          <p className={styles.ptext}>
            Bolaget är nu i full gång med att bli avstämningsbolag, vilket
            innebär ytterligare ett steg mot börsetablering. Att bli
            avstämningsbolag innebär att alla aktieägare måste införskaffa så
            kallade aktiedepåer och det hos institutioner som erbjuder sådant.
            Banker är till exempel ett sådant alternativ. Det är i dessa depåer
            som registrering av aktieinnehavet i Bolaget kommer att ske.
          </p>
          <p className={styles.ptext}>
            Bolaget beräknar ha genomfört avstämningsbolagsprocessen innan juni
            (2023) månads utgång, men det kräver också att en hel del
            aktiviteter sker enligt plan. En av dessa aktiviteter är att samla
            upp alla Bolagets aktieägares depåer. Där behöver vi din hjälp.
          </p>
          <p className={styles.ptext}>
            Vi vet att flera redan har etablerade aktiedepåer, men också att
            många inte har det. För att vara helt säkra på att Bolaget har
            uppdaterade och korrekta uppgifter vill vi att ALLA som är
            aktieägare i Bolaget senast den 5:e maj 2023 meddelar oss det
            aktiedepånummer och institut du vill få aktierna i Bolaget
            elektroniskt distribuerade till. OBS! inte ISK-konto, endast
            depåkonto gäller
          </p>
          <p className={styles.ptext}>
            Det gör du enklast genom att skicka ett mail till oss på
            info@auxesis.se. Ange i mailet ditt person och/eller
            organisationsnummer (för företag), samt det institut din depå finns
            hos samt dess nummer/ identitet. Gärna även namn på bankkontakt.
          </p>
          <p className={styles.ptext}>
            Har du ingen aktiedepå kan du själv ordna det via internet. Bolaget
            använder sig av Avanza Bank som emissionsinstitut och hos Avanza
            bank kan du själv, via nätet, öppna en sådan aktiedepå.
            https://www.avanza.se/start.
          </p>
          <p className={styles.ptext}>
            OBS! Om du får två e-mail eller fler beror det på att du sannolikt
            har flera aktieposter. Då behöver du i så fall bara svara på ett,
            såvida du inte har fördelat ditt innehav på olika bolag och dig som
            privatperson. Då måste vi ha info om respektive depå.
          </p>
        </div>
      </section>

      <div className={styles.scrollToTop} onClick={scrollToTop}>
        ⬆️
      </div>
    </>
  );
}
