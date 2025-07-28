import "../globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import LayoutClient from "./LayoutClient"; // <-- din befintliga client-komponent

export const metadata = {
  title: {
    default: "Auxesis Pharma – Pain Relief & Drug Development",
    template: "%s | Auxesis Pharma",
  },
  description:
    "Auxesis Pharma is a Swedish pharmaceutical research company focused on innovative pain relief solutions and drug formulation.",
  metadataBase: new URL("https://www.auxesis.se"),
  icons: {
    icon: [
      { url: "/skyltenslogo.png", sizes: "32x32", type: "image/png" },
      { url: "/skyltenslogo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/skyltenslogo.png",
  },
  openGraph: {
    title: "Auxesis Pharma",
    description:
      "Innovative research in pain relief and pharmaceutical development.",
    url: "https://www.auxesis.se/en",
    siteName: "Auxesis Pharma",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auxesis Pharma",
    description:
      "Pioneering research for pain treatment and drug delivery solutions.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
