import styles from "../../../styles/Forinvest.module.css";
import Link from "next/link";

export default function Styrelse() {
  return (
    <>
      <div className={styles.styrelse}>
        <h1 className={styles.h1}>Väl sammansatt styrelse och ledning </h1>

        <p className={styles.ptext}>
          Auxesis Pharma har en väl sammansatt styrelse och ledning som
          representerar olika kompetenser. Här finns en presentation av{" "}
          <Link href="/omoss/vartteam"> Vårt team.</Link>
        </p>

        <h2 className={styles.h2}>Auxesis Pharma ledningsgrupp</h2>

        <ul className={styles.ulList}>
          <li>Roar Adelsten, VD </li>
          <li>Charlotta Larsson, sälj och marknad</li>
          <li>Lars Larsson, ekonomi och finans</li>
          <li>Peter Åberg, organisationsutveckling och hållbarhet</li>
          <li>
            Rune Nordström, arbetande styrelseordförande, affärsrådgivning, PR,
            HR och IR
          </li>
        </ul>

        <h2 className={styles.h2}>Auxesis Pharma styrelse</h2>

        <ul className={styles.ulList}>
          <li>Roar Adelsten, VD och styrelseledamot</li>
          <li>Rune Nordström, styrelseordförande</li>
          <li>Charlotta Larsson, styrelseledamot</li>
          <li>Moustapha Hassan, styrelseledamot</li>
        </ul>

        {/*  <div>
          <img className={styles.world} src="/world.jpeg" alt="world" />
        </div>*/}
      </div>
    </>
  );
}
