import styles from "../../styles/Info.module.css";

export default function Publikt() {
  return (
    <div className={styles.details}>
      <h1 className={styles.h1div}>
        {" "}
        AUXESIS PHARMA HOLDING AB (publ) blir publikt aktiebolag ​
      </h1>
      <h4>2022-09-21</h4>
      <div className={styles.ptext}>
        {/*MIN TEXT */}
        {/*DEN GAMLA TEXTEN:  AUXESIS PHARMA HOLDING AB (publ) är nu registrerat i Bolagsverket som ett publikt aktiebolag med aktiekapital på 500.000:-.
Ett publikt aktiebolag har rätt att sprida aktier, teckningsrätter och andra värdepapper till allmänheten. */}
        <p>
          AUXESIS PHARMA HOLDING AB (publ) har nu officiellt registrerats hos
          Bolagsverket som ett publikt aktiebolag med ett aktiekapital om 500
          000 kronor. Denna statusförändring innebär att bolaget nu har rätt att
          erbjuda aktier, teckningsrätter och andra värdepapper till
          allmänheten, vilket öppnar upp nya möjligheter för framtida expansion
          och investeringar.
        </p>
        <p>
          Som publikt aktiebolag tar AUXESIS PHARMA ytterligare ett steg i sin
          tillväxtresa och fortsätter att stärka sitt engagemang för att
          leverera värde till både aktieägare och marknaden. Den nya statusen
          reflekterar bolagets långsiktiga vision om transparens och
          tillgänglighet på kapitalmarknaden.
        </p>
        <p>
          Vi ser fram emot att dela denna spännande resa med våra aktieägare och
          välkomnar nya investerare som vill bli en del av vår utveckling.
        </p>
      </div>
    </div>
  );
}
