"use client";
import styles from "../../../styles/Nyanstalld.module.css";

export default function NyOrdf() {
  return (
    <div className={styles.details}>
      <h1>
        New Chairman of the Board at <br /> Auxesis Pharma Holding AB (publ)
      </h1>
      <h4>2025-06-17</h4>
      <p className={styles.ptext}>
        We are pleased to announce that Magnus Larsson assumed the role of
        Chairman of the Board at Auxesis Pharma Holding AB (publ) on June 17,
        2025. Magnus holds a degree in Economics from Stockholm University with
        a specialization in accounting and finance. He has built a long and
        distinguished career as an entrepreneur, business leader, and
        strategist, holding senior positions in the IT industry since the 1980s.
      </p>
      <p className={styles.ptext}>
        Magnus has founded several companies, served as Group CEO and Chairman
        in both publicly listed and privately held corporations, and worked as a
        consultant in financial management. He has also been deeply engaged with
        the Confederation of Swedish Enterprise, where he has held numerous
        trusted positions.
      </p>
      <p className={styles.ptext}>
        With his extensive experience and strong business acumen, Magnus
        strengthens the Auxesis Board and will play a key role in the company’s
        continued growth and development.
      </p>
      <h4>
        <strong>Welcome aboard, Magnus!</strong>
      </h4>

      <div className={styles.articlesimage1}>
        <img
          className={styles.image1}
          src="/team/magnus2.png"
          alt="Magnus Larsson"
        />
      </div>
    </div>
  );
}
