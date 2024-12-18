import HeroPr from "../components/HeroSectionPr";

export default function ProdukterLayout({ children }) {
  return (
    <div>
      <HeroPr />
      <main>{children}</main>
    </div>
  );
}
