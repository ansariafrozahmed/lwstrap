import CategorySection from "../components/Category/CategorySection";
import HeroBanner from "../components/HeroAndBanners/HeroBanner";
import AllProducts from "../components/ProductComp/AllProducts";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <CategorySection />
      <AllProducts />
    </main>
  );
}
