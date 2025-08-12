"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { newsItems, paginate } from "../../en/data/newsItems";
import styles from "./index.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import Button1 from "../components/Button1";
import BackArrow from "../components/BackArrow";

const ITEMS_PER_PAGE = 9;

function NyheterContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialPage = parseInt(searchParams.get("page") || "1", 10);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [searchQuery, setSearchQuery] = useState("");

  const sortedNews = useMemo(
    () =>
      [...newsItems].sort(
        (a, b) => new Date(b.subtitle) - new Date(a.subtitle)
      ),
    []
  );

  const filteredNews = useMemo(
    () =>
      sortedNews.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.subtitle.includes(searchQuery)
      ),
    [searchQuery, sortedNews]
  );

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);

  const paginatedNews = useMemo(
    () => paginate(filteredNews, currentPage, ITEMS_PER_PAGE),
    [filteredNews, currentPage]
  );

  // Synkronisera currentPage med URL-parametrar
  useEffect(() => {
    const newPage = parseInt(searchParams.get("page") || "1", 10);
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  }, [searchParams, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      router.push(`/en/news?page=${page}`);
      scrollToTop();
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className={styles.container}>
      <BackArrow />

      <h2 className={styles.title}>All News</h2>

      <input
        type="text"
        placeholder="Search for news"
        value={searchQuery}
        onChange={handleSearchChange}
        className={styles.searchInput}
      />

      <div className={styles.newsContainer}>
        {paginatedNews.length > 0 ? (
          paginatedNews.map((item, index) => (
            <div key={`${item.slug}-${index}`} className={styles.newsItem}>
              <h3 className={styles.newsTitle}>{item.title}</h3>
              <h4 className={styles.date}>{item.subtitle}</h4>
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              <Button1 onClick={() => router.push(`/en/news/${item.slug}`)}>
                Read more
              </Button1>
            </div>
          ))
        ) : (
          <p className={styles.noNews}>No news found</p>
        )}
      </div>

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

export default function Nyheter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NyheterContent />
    </Suspense>
  );
}
