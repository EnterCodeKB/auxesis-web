import Footer2En from "./underFooterEn";
import HeaderEn from "./headerEn";
import FooterEn from "./footerEn";
import LanguageSwitcher from "./LanguageSwitcher";
import "../styles/globals.css";

export default function EnglishLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My AUXESIS</title>
      </head>
      <body>
        <HeaderEn />
        <LanguageSwitcher />

        <div className="container">
          <main>{children}</main>
          <FooterEn />
        </div>

        <Footer2En />
      </body>
    </html>
  );
}
