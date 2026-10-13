import AnnouncementBar from "../components/AnnouncementBar";
import BenefitsSection from "../components/BenefitsSection";
import FaqSection from "../components/FaqSection";
import HeroSection from "../components/HeroSection";
import IngredientsSection from "../components/IngredientsSection";
import PackagingSection from "../components/PackagingSection";
import ProductSection from "../components/ProductSection";
import ReviewsSection from "../components/ReviewsSection";
import RoutineSection from "../components/RoutineSection";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  return (
    <main id="top">
      <ScrollReveal />
      <AnnouncementBar />
      <div className="shell">
        <SiteHeader />
        <HeroSection />
        <BenefitsSection />
        <IngredientsSection />
        <PackagingSection />
        <RoutineSection />
        <ProductSection />
        <ReviewsSection />
        <FaqSection />
        <SiteFooter />
      </div>
    </main>
  );
}
