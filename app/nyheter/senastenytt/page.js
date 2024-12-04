"use client";
import { newsItems } from "../../data/newsItems"; // Importera data korrekt
import styles from "../../styles/Info.module.css";
import { useRouter } from "next/navigation";
import Button1 from "../../components/Button1";

const scrollToTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

// React-komponenten för sidan
export default function Nyheter() {
  const router = useRouter();

  const handleInfoClick = (slug) => {
    router.push(`/nyheter/${slug}`);
  };

  // Kontrollera att data existerar
  if (!newsItems || newsItems.length === 0) {
    return <p>Inga nyheter tillgängliga just nu.</p>;
  }

  return (
    <section>
      <h2 className={styles.title}>Alla Nyheter</h2>
      <div className={styles.spotlights}>
        <div className={styles.newsContainerFullPage}>
          {newsItems.map((item) => (
            <div key={item.slug} className={styles.newsItemContainer}>
              <div className={styles.newsItem}>
                <div className={styles.content}>
                  <h3 className={styles.newsTitle}>{item.title}</h3>
                  <h4 className={styles.date}>{item.subtitle}</h4>
                  <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </div>
              <Button1
                onClick={() => handleInfoClick(item.slug)} // Passera onClick-funktionen
              >
                Läs mer
              </Button1>
            </div>
          ))}
        </div>

        <div className={styles.scrollToTop} onClick={scrollToTop}>
          ⬆️
        </div>
      </div>
    </section>
  );
}
