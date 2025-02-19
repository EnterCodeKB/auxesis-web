"use client";
import styles from "./registeredcompany.module.css";

export default function AvstamningsBolag() {
  return (
    <>
      <section className={styles.avstamningsbolag}>
        <div className={styles.whiteboard}>
          <h2>
            Important Information for All Shareholders of AUXESIS PHARMA HOLDING
            AB (publ)
          </h2>
          <p className={styles.ptext}>
            The company is now in the process of becoming a registered
            securities company, marking another step towards a stock market
            listing. Becoming a registered securities company requires all
            shareholders to acquire a securities account (depå) through an
            institution that offers such services. Banks are one option for
            this. These accounts will be used for the registration of
            shareholdings in the company.
          </p>
          <p className={styles.ptext}>
            The company expects to complete the registration process by the end
            of June 2023. However, this requires that several key activities
            proceed as planned. One of these activities is gathering all
            shareholders' securities account details, and we need your help with
            this.
          </p>
          <p className={styles.ptext}>
            We understand that some shareholders already have securities
            accounts, while others may not. To ensure that the company has
            accurate and up-to-date records, we request that ALL shareholders
            provide their securities account number and the institution where
            they wish to have their shares electronically registered no later
            than May 5, 2023. Please note that ISK accounts are not valid—only
            standard securities accounts are applicable.
          </p>
          <p className={styles.ptext}>
            You can easily submit this information by emailing us at
            info@auxesis.se. <br /> Please include in your email:{" "}
            <li>
              Your personal or organizational registration number (for
              companies)
            </li>{" "}
            <li>
              {" "}
              The institution where your securities account is held and its
              account number/ID
            </li>
            <li>Preferably, the name of your bank contact</li>
          </p>
          <p className={styles.ptext}>
            If you do not yet have a securities account, you can open one
            online. The company uses Avanza Bank as its issuing institution, and
            you can open a securities account with Avanza Bank online at
            https://www.avanza.se/start.
          </p>
          <p className={styles.ptext}>
            <span className={styles.importanttext}>Important: </span> If you
            receive multiple emails, it is likely because you hold multiple
            shareholdings. In this case, you only need to respond once, unless
            your holdings are distributed across different companies or between
            a company and your private account. In such cases, we need
            information for each respective securities account.
          </p>
        </div>
      </section>
    </>
  );
}
