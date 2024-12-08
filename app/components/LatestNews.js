"use client";
import styles from "../styles/LatestNews.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LatestNews = ({ newsItems }) => {
  // Mottar newsItems som prop
  const router = useRouter();

  // Filtrera ut de senaste nyheterna
  const latestNews = newsItems.filter((item) => item.isLatest).slice(0, 3); // Begränsa till tre senaste

  const handleReadMore = (slug) => {
    router.push(`/nyheter/${slug}`);
  };

  return (
    <section className={styles.latestNewsSection}>
      <div className={styles.whiteboard}>
        <h2 className={styles.title}>Senaste Nyheter</h2>
        <div className={styles.newsContainer}>
          {latestNews.map((item) => (
            <div key={item.slug} className={styles.newsCard}>
              <img
                src={item.imageUrl || "/Nyheter/entrelokal.jpeg"} // Fallback om bild saknas
                alt={item.title}
                className={styles.newsImage}
              />
              <h3 className={styles.newsTitle}>{item.title}</h3>
              <h4 className={styles.newsSubtitle}>{item.subtitle}</h4>
              <button
                className={styles.readMoreButton}
                onClick={() => handleReadMore(item.slug)}
              >
                Läs mer
              </button>
            </div>
          ))}
        </div>
        <div className={styles.nwesblockButton}>
          <Link href="/nyheter/senastenytt">
            <button className={styles.nwesblockreadmore}>Fler nyheter</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
