import React from "react";
import styles from "../../styles/Innovation.module.css";

const Innovation = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section1}>
        <h1 className={styles.divh1}>
          EN Ständig utveckling och bestående förändring
        </h1>
        <p className={styles.ptext}>
          Innovation är mer än bara ett ord för oss – det är kärnan i allt vi
          gör. Auxesis grundades med en passionerad vision: att skapa något
          banbrytande som kan förbättra människors liv. Med den visionen som
          drivkraft inledde vi en forskningsresa fylld av uthållighet,
          kreativitet och en aldrig sinande tro på att det omöjliga kunde bli
          möjligt. <br /> <br />
          Efter flera års intensivt arbete och tusentals experiment uppnådde vi
          det som tidigare bara varit en dröm: att stabilisera acetylsalicylsyra
          i flytande form och göra det möjligt att applicera den direkt på
          huden. Detta genombrott blev början på något stort.
        </p>
      </div>
      <div className={styles.section2}>
        <h2 className={styles.divh2}>
          En kultur som främjar innovation och hållbarhet
        </h2>
        <p className={styles.ptext}>
          Vår upptäckt lade grunden för en ny koncern med ambitioner som
          sträcker sig långt bortom Sveriges gränser.
          <br /> På Auxesis skapar vi en miljö där innovation inte bara
          uppmuntras – den blomstrar. Här föds och formas idéer i en atmosfär av
          samarbete och högt i tak, där varje röst får höras. <br /> <br />
          Vår innovationskultur är tätt sammanflätad med vår
          hållbarhetsstrategi. För oss är en riktigt god innovation också en god
          handling. Vi strävar efter att varje framsteg vi gör ska bidra
          positivt till människor, djur och vår planet. För i slutändan vet vi
          att en hållbar framtid är den bästa investeringen för oss alla.
        </p>
      </div>
    </section>
  );
};

export default Innovation;
