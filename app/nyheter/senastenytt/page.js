"use client";

import { useState, useMemo } from "react"; // Använd useMemo för stabil beräkning
import { newsItems, paginate } from "../../data/newsItems"; // Importera data och hjälpfunktion
import styles from "../../styles/Info.module.css";
import { useRouter } from "next/navigation";
import Button1 from "../../components/Button1";

const ITEMS_PER_PAGE = 9;

const scrollToTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

export default function Nyheter() {
  const router = useRouter();

  // State för paginering och sökning
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // Kopiera och sortera nyheterna efter datum
  const sortedNews = useMemo(
    () =>
      [...newsItems].sort(
        (a, b) => new Date(b.subtitle) - new Date(a.subtitle)
      ),
    []
  );

  // Filtrera nyheterna baserat på sökfrågan
  const filteredNews = useMemo(
    () =>
      sortedNews.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.subtitle.includes(searchQuery)
      ),
    [searchQuery, sortedNews]
  );

  // Räkna totala antal sidor
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);

  // Hämta nyheterna för aktuell sida
  const paginatedNews = useMemo(
    () => paginate(filteredNews, currentPage, ITEMS_PER_PAGE),
    [filteredNews, currentPage]
  );

  // Hantera sidbyte
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page); // Uppdatera sidan
      scrollToTop();
    }
  };

  // Hantera sökning och återställ till första sidan
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Gå alltid till första sidan vid sökning
  };

  return (
    <section>
      <h2 className={styles.title}>Alla Nyheter</h2>

      {/* Sökfält */}
      <input
        type="text"
        placeholder="Sök efter nyheter"
        value={searchQuery}
        onChange={handleSearchChange}
        className={styles.searchInput}
      />

      {/* Visa nyheterna */}
      <div className={styles.newsContainerFullPage}>
        {paginatedNews.length > 0 ? (
          paginatedNews.map((item, index) => (
            <div
              key={`${item.slug}-${index}`}
              className={styles.newsItemContainer}
            >
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
              <Button1 onClick={() => router.push(`/nyheter/${item.slug}`)}>
                Läs mer
              </Button1>
            </div>
          ))
        ) : (
          <p>Inga nyheter hittades.</p>
        )}
      </div>

      {/* Paginering */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={`page-${page}`}
                className={`${styles.pageButton} ${
                  page === currentPage ? styles.activePage : ""
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
