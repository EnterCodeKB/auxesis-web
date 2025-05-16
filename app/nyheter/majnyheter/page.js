"use client";

import { useRouter } from "next/navigation";
import styles from "./index.module.css";

export default function Produktion() {
  const router = useRouter();

  const handleInfoClick = () => {
    router.push(
      "https://www.op.se/2024-09-21/raddade-ofk-nu-har-lakemedelsforetaget-hittat-lokal/"
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.img1}
          src="/Nyheter/börsen.jpeg"
          alt="Auxesis väg till börsen"
        />
      </div>
      <h1 className={styles.title}>Nyhetsbrev – maj 2025</h1>
      <h4 className={styles.date}>2025-05-13</h4>
      <h2 className={styles.subtitle}>
        Våren har svept in över landet och sommaren står nu för dörren. <br />{" "}
        <br />
      </h2>
      <p className={styles.text}>
        Auxesis Pharma har under det senaste året fokuserat på
        läkemedelsutvecklingens viktigaste prioriteringar, vilket bland annat
        inkluderar löslighet, hudpenetration och läkemedlets stabilitet över
        tid. Vi närmar oss nu en stabil formulering som är redo för vidare
        tester och ansökan om godkännande hos Läkemedelsverket.
      </p>
      <p className={styles.text}>
        Under året har vi förstärkt utvecklingsarbetet ytterligare genom att
        knyta till oss några av Sveriges främsta laboratorier och kemister inom
        topikal smärtlindring.
      </p>
      <p className={styles.text}>
        Parallellt inleder vi nu arbetet med att utvärdera förutsättningarna för
        en framtida produktionsanläggning i Östersund. Under hösten startar vi
        en projektstudie tillsammans med konsultbolaget AFRY, med målet att ta
        fram den bästa lösningen för en tillverkningsstruktur som uppfyller
        såväl Auxesis Pharmas som myndigheternas krav på funktionalitet och
        prestanda. För att säkerställa kvalitet och leveransförmåga kommer vi
        uteslutande att arbeta med svenska maskinleverantörer.
        <br /> <br />
        Patentprocessen fortlöper enligt plan. I takt med att vi närmar oss ett
        färdigt och registrerat patent öppnas även möjligheter för att ansöka om
        nya patent.
        <br /> <br />
        Vi utvärderar kontinuerligt nya möjligheter inom läkemedelsutveckling
        och patentskydd, bland annat inom brännskadevård där vi ser stor
        potential att minska patienters smärtlidande.
      </p>
      <p className={styles.text}>
        Vårt läkemedel ASA.P lindrar smärta vid lättare brännskador,
        getingstick, kontakt med brännmaneter med mera. För mer avancerad
        smärtlindring saknas idag effektiva topikala läkemedel. Auxesis Pharma
        har identifierat detta behov och ser en betydande marknad för
        receptbelagda produkter vid svårare bränn- och frätskador. Vi har inlett
        indikationsstudier tillsammans med ledande svenska och internationella
        forskare och kliniker inom området.
        <br /> <br />
        Vi bedömer nu att tiden är mogen att inleda förberedelserna inför en
        börsintroduktion (IPO). Arbetet inleds under tidig höst i samarbete med
        revisionsbyrån Edlund & Partners i Östersund. De kommer att bistå oss
        med att säkerställa att Auxesis Pharma redan i ett tidigt skede
        uppfyller de administrativa kraven enligt det regelverk som gäller inför
        en börsnotering.
        <br /> <br />
        Den exakta tidpunkten kommer att bero på marknadsförutsättningar,
        regulatoriska processer och bolagets fortsatta utveckling. Våra
        aktieägare kommer att informeras löpande i takt med att processen
        fortskrider. <br /> <br /> Vi hoppas få se dig på vår årsstämma den 17
        juni kl. 15.00 (kallelsen kommer inom kort). <br /> <br /> <br />
        Vi vill avsluta med att önska er en trevlig och avkopplande sommar!
      </p>

      <div className={styles.imageContainer}>
        <img
          className={styles.img2}
          src="/Nyheter/labben.jpeg"
          alt="Forskning och utveckling"
        />
      </div>
    </div>
  );
}
