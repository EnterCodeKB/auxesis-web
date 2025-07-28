// ⛔ INTE "use client" här!
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AppLayoutClient from "./components/AppLayoutClient";

// ✅ SEO metadata (server only)
export const metadata = {
  title: "Auxesis Pharma Holding AB (publ)",

  description:
    "Auxesis Pharma är ett svenskt forskningsbolag inom smärtlindring och läkemedelsutveckling.",
  metadataBase: new URL("https://www.auxesis.se"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" }, // för Google
      { url: "/skyltenslogo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/skyltenslogo.png",
  },

  openGraph: {
    title: "Auxesis Pharma Holding AB",
    description:
      "Svenskt forskningsbolag inom smärta och läkemedelsutveckling.",
    url: "https://www.auxesis.se",
    siteName: "Auxesis Pharma",
    images: [
      {
        url: "/og-image.png", // lägg den här bilden i /public
        width: 1200,
        height: 630,
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  other: {
    "google-site-verification": "DIN_HTML_TAG_KOD_HÄR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auxesis Pharma Holding AB",
    description:
      "Ett svenskt forskningsbolag med fokus på smärtlindring och innovation inom läkemedel.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://www.auxesis.se"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>
        <AppLayoutClient>{children}</AppLayoutClient>
      </body>
    </html>
  );
}
