import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Category from "../../components/category/Category";
import HomeProductCard from "../../components/homeProductCard/HomeProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";

function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <HomeProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default HomePage;
