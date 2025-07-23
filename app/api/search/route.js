import { db } from "../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const searchQuery = searchParams.get("q")?.toLowerCase() || "";
  const lang = searchParams.get("lang") || "sv";

  if (!searchQuery) {
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // 🔍 Hämta endast sidor för rätt språk
    const q = query(collection(db, "searchPages"), where("lang", "==", lang));
    const querySnapshot = await getDocs(q);
    const pages = querySnapshot.docs.map((doc) => doc.data());

    // 🔎 Filtrera lokalt
    const results = pages.filter((page) => {
      const nameMatch = page.name?.toLowerCase().includes(searchQuery);
      const contentMatch = page.content?.toLowerCase().includes(searchQuery);
      const keywordMatch = page.keywords?.some((keyword) =>
        keyword.toLowerCase().includes(searchQuery)
      );
      return nameMatch || contentMatch || keywordMatch;
    });

    return new Response(JSON.stringify(results), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Firestore-fel:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
