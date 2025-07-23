"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const API_URL = "/api/search"; // Engelsk API-sökning

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
          `${API_URL}?q=${encodeURIComponent(searchTerm)}&lang=en`
        );
        const results = await response.json();
        setSearchResults(results);
      } catch (error) {
        console.error("Error fetching API:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (link) => {
    router.push(link);
  };

  return (
    <>
      <input
        type="text"
        placeholder={placeholder || "Search..."}
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
        <p>No results found for "{query}".</p>
      ) : (
        <p>Type something to start searching.</p>
      )}
    </>
  );
};

export default SearchComponent;
