import styles from "../../styles/Info.module.css";

export default function RegSmart() {
  return (
    <div className={styles.details}>
      <h1 className={styles.h1div}>
        {" "}
        Ny partner – <br />
        RegSmart Life Sciences AB​
      </h1>
      <h4>2024-07-11</h4>
      <div className={styles.ptext}>
        <p>
          Vi har nu etablerat ett samarbete med RegSmart Life Sciences AB för
          att få vägledning mot aktuella sökande och godkännande processer hos
          Svenska Läkemedelsverket.{" "}
        </p>
        <p>
          RegSmart Life Science är ett regulatoriskt konsultföretag inom
          läkemedel och medicintekniska produkter som hjälper kunden att
          navigera i ett komplext och föränderligt regulatoriskt landskap. Med
          lång regulatorisk erfarenhet från ledande befattningar på en
          tillsynsmyndighet och från små och stora life science-företag
          underlättar vi kundens arbete genom att veta ”vad som ska göras, när
          och hur”. RegSmart Life Sciences tillhandahåller lämpliga råd och stöd
          i förhållande till europeiska och amerikanska regulatoriska krav,
          vilket hjälper kunden att utveckla en regulatorisk plan som en del av
          din övergripande projektstrategi.
        </p>
        <p>
          Företagets expertis är att analysera och tolka den vägledning som
          tillhandahålls och beslut som tas av tillsynsmyndigheter i EU och USA
          och hjälpa till att svara på de specifika frågorna i kundens projekt.
          RegSmart Life Sciences tillhandahåller stöd från tidig forskning under
          hela din produktlivscykel, alltid med målproduktprofilen i åtanke.
        </p>
      </div>
    </div>
  );
}
