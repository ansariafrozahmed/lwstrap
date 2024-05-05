import CategorySection from "../components/Category/CategorySection";
import HeroBanner from "../components/HeroAndBanners/HeroBanner";
import AllProducts from "../components/ProductComp/AllProducts";
import RecommendedProducts from "../components/Slider/RecommendedProducts";
import HomeAboutUs from "../components/OtherComps/HomeAboutUs";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <CategorySection />
      <RecommendedProducts />
      <AllProducts />
      <HomeAboutUs />
    </main>
  );
}
