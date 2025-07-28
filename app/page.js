// app/page.js (ingen 'use client' här!)
import ClientHome from "./components/ClientHome";

// ✅ SEO metadata
export const metadata = {
  title: "Auxesis Pharma – Innovativa läkemedel",
  description: "Officiell webbplats för Auxesis Pharma Holding AB.",
};

export default function HomePage() {
  return <ClientHome />;
}
