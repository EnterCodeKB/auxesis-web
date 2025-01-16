import styles from "../styles/CookiePolicy.module.css";
import BackArrow from "../../components/BackArrow";

export default function CookiePolicy() {
  return (
    <div className={styles["cookie-policy-container"]}>
      <BackArrow mainLink="/" label="Hem" />

      <h1>Cookiepolicy för Auxesis Pharma Holding AB(publ)</h1>
      <p>
        Denna cookiepolicy förklarar hur vi använder cookies på vår webbplats.
        Genom att använda vår webbplats godkänner du användningen av cookies
        enligt denna policy.
      </p>

      <h2>1. Vad är cookies?</h2>
      <p>
        Cookies är små textfiler som lagras på din enhet när du besöker en
        webbplats. De hjälper webbplatsen att känna igen din enhet och förbättra
        din användarupplevelse.
      </p>

      <h2>2. Vilka typer av cookies använder vi?</h2>
      <h3>a. Nödvändiga cookies</h3>
      <p>
        Dessa cookies är avgörande för att webbplatsen ska fungera korrekt. Utan
        dessa cookies kan webbplatsen inte fungera som den ska.
      </p>

      <h3>b. Analytiska cookies</h3>
      <p>
        Dessa cookies hjälper oss att förstå hur besökare interagerar med
        webbplatsen och samla in information anonymt för att förbättra
        funktionaliteten.
      </p>

      <h3>c. Marknadsföringscookies</h3>
      <p>
        Dessa cookies används för att spåra besökare över webbplatser och visa
        relevanta annonser baserat på deras intressen.
      </p>

      <h2>3. Hur vi använder cookies</h2>
      <p>
        Vi använder cookies för att:
        <ul>
          <li>Förbättra webbplatsens prestanda.</li>
          <li>Analysera trafik och beteendemönster.</li>
          <li>Anpassa innehåll och annonser.</li>
        </ul>
      </p>

      <h2>4. Tredjepartscookies</h2>
      <p>
        Vi använder cookies från tredjepartsleverantörer som Google Analytics
        och Facebook Pixel. Dessa leverantörer kan samla in och använda data
        enligt sina egna integritetspolicyer.
      </p>

      <h2>5. Hur kan du hantera cookies?</h2>
      <p>
        Du kan hantera cookies genom inställningarna i din webbläsare. Observera
        att vissa funktioner på webbplatsen kan sluta fungera om du väljer att
        inaktivera cookies.
      </p>

      <h2>6. Ändringar i vår cookiepolicy</h2>
      <p>
        Vi kan uppdatera denna cookiepolicy för att återspegla ändringar i vår
        användning av cookies eller lagkrav. Vi rekommenderar att du regelbundet
        läser igenom denna policy.
      </p>

      <h2>7. Kontakt</h2>
      <p>
        Om du har frågor om vår cookiepolicy, vänligen kontakta oss:
        <br />
        AUXESIS PHARMA HOLDING AB
        <br />
        E-post:{" "}
        <a href="mailto:auxesis@auxesispharma.com">auxesis@auxesispharma.com</a>
        <br />
        Telefon: 08-771 43 00
      </p>
    </div>
  );
}
