"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const API_URL = "/api/search"; // Svensk API-sökning

const SearchComponent = ({ placeholder }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const handleSearch = async (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    if (searchTerm.trim()) {
      try {
        const response = await fetch(
          `${API_URL}?q=${encodeURIComponent(searchTerm)}&lang=sv`
        );
        const results = await response.json();
        setSearchResults(results);
      } catch (error) {
        console.error("❌ Fel vid API-anrop:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (link) => {
    router.push(link);
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "0 auto" }}>
      <input
        type="text"
        placeholder={placeholder || "Sök..."}
        value={query}
        onChange={handleSearch}
        style={{
          width: "100%",
          padding: "0.5rem",
          fontSize: "1rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginBottom: "1rem",
        }}
      />
      <div>
        {query && searchResults.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {searchResults.map((item) => (
              <li key={item.id} onClick={() => handleResultClick(item.link)}>
                <a
                  href={item.link}
                  style={{
                    textDecoration: "none",
                    color: "#007BFF",
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </a>
                <p style={{ fontSize: "0.9rem", color: "#555" }}>
                  {item.content}
                </p>
              </li>
            ))}
          </ul>
        ) : query ? (
          <p>Inga resultat hittades för "{query}".</p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
