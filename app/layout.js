import Footer2 from "./components/underFooter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.module.css";
import Hero from "./components/heroSection";

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <head>
        <title>Min AUXESIS</title>
      </head>
      <body>
        <Hero />

        <div className="container">
          <main>{children}</main>
          <Footer />
        </div>

        <Footer2 />
      </body>
    </html>
  );
}
