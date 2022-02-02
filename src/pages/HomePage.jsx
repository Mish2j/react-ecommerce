import HeroSection from "../components/layout/homeSections/HeroSection";
import FeaturesSection from "../components/layout/homeSections/FeaturesSection";
import ProductsSection from "../components/layout/homeSections/ProductsSection";
import SubscribeSection from "../components/layout/homeSections/SubscribeSection";
import AboutSection from "../components/layout/homeSections/AboutSection";
import BlogSection from "../components/layout/homeSections/BlogSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <SubscribeSection />
      <AboutSection />
      <BlogSection />
    </>
  );
};

export default HomePage;
