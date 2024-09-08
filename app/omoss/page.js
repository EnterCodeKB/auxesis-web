import styles from "../styles/Omoss.module.css";

export default function About() {
  return (
    <>
      <div className={styles.info}>
        <h2>Om Auxesis Pharma Holding AB</h2>
        <p>
          Auxesis Pharma är ett publikt aktiebolag som fokuserar på utveckling
          av läkemedel för människor och djur inom kategorin ”smärta och
          irritation på hud”. Vår vision är: Att omdefiniera kategorin smärta
          och irritation på huden genom vetenskap. I dagsläget finns inte något
          receptfritt läkemedel (OTC) som snabbt blockerar smärtsignalen och tar
          bort smärta och irritation på hud. De produkter som finns i dag är
          enbart tillfälligt lindrande. Dessutom krävs upprepade behandlingar då
          smärtan snabbt återkommer.
        </p>
        <h2>Patentansökan pågår</h2>
        <p>
          Auxesis Pharma har kommit långt i forskningen. Bolaget lämnade i
          november 2023 in den första patentansökan till PRV. Forskningsteamet
          förbereder nu för kliniska tester på människor för det som ska bli den
          första receptfria produkten på världsmarknaden (ASA.P®) för att
          blockera smärtsignalen vid smärta på hud. Auxesis Pharma har inlett
          samarbete med väletablerade företag som hjälper oss att ta produkten
          till marknaden. Några av dessa är AFRY, RegSmart Life Science, Ramberg
          Advokater, Granath Reklam med flera.
        </p>
        <div>
          <img className={styles.imgmicroskop} src="/microskop.png" alt="" />
        </div>
        <div className={styles.effekt}>
          <h2>Produkt med snabb effekt</h2>
          <p>
            Auxesis Pharma tar nu fram den första receptfria konsumentprodukten
            som snabbt blockerar smärtsignalen till hjärnan och tar bort smärta
            och irritation på hud – ASA.P®. Produkten har snabb verkan och
            blockerar smärtsignalen inom fyra till sex minuter vid applicering
            på huden. Effekten är långsiktig och smärtan kommer inte tillbaka.
            ASA.P® är också antiinflammatorisk.
          </p>
        </div>
      </div>
    </>
  );
}
