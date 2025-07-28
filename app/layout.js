// app/layout.js (utan 'use client'!)
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AppLayoutClient from "./components/AppLayoutClient";

export const metadata = {
  title: {
    default: "Auxesis Pharma – Innovativa läkemedel",
    template: "%s | Auxesis Pharma",
  },
  description:
    "Auxesis Pharma är ett svenskt forskningsbolag inom smärtlindring och läkemedelsutveckling.",
  metadataBase: new URL("https://www.auxesis.se"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
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
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auxesis Pharma Holding AB",
    description:
      "Ett svenskt forskningsbolag med fokus på smärtlindring och innovation inom läkemedel.",
    images: ["/og-image.png"],
  },
  other: {
    "google-site-verification": "DIN_HTML_TAG_KOD_HÄR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>
        {/* Lägg klientdelen här */}
        <AppLayoutClient>{children}</AppLayoutClient>
      </body>
    </html>
  );
}
