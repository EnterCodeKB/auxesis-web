// produkter/layout.js
import styles from "../styles/Produkter.module.css";
import HeroPr from "../components/HeroSectionPr";

export default function ProdukterLayout({ children }) {
  return (
    <div>
      <HeroPr />
      <main>{children}</main>
    </div>
  );
}
