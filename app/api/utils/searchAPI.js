const API_URL = "https://www.auxesis.se/api/search"; // Absolut URL

export async function searchAPI(query, lang = "en") {
  try {
    console.log(
      "🔍 API Request:",
      `${API_URL}?q=${encodeURIComponent(query)}&lang=${lang}`
    );

    const response = await fetch(
      `${API_URL}?q=${encodeURIComponent(query)}&lang=${lang}`
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response:", data);
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}
