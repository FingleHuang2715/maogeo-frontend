import HeroSection from "@/components/HeroSection";
import BusinessMatrix from "@/components/BusinessMatrix";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import MarketingVsTemplate from "@/components/MarketingVsTemplate";
import ProviderCriteria from "@/components/ProviderCriteria";
import WhyChooseMaoge from "@/components/WhyChooseMaoge";
import PricingPlans from "@/components/PricingPlans";
import ConversionFormula from "@/components/ConversionFormula";
import ContentSystem from "@/components/ContentSystem";
import KeywordResearch from "@/components/KeywordResearch";
import MarketingBackend from "@/components/MarketingBackend";
import FaqAccordion from "@/components/FaqAccordion";
import CompareMatrix from "@/components/CompareMatrix";
import GscAchievements from "@/components/GscAchievements";
import CasesShowcase from "@/components/CasesShowcase";
import PageSpeedShowcase from "@/components/PageSpeedShowcase";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f5f5f7" }}>
      <HeroSection />
      <BusinessMatrix />
      <MarketingVsTemplate />
      <WhyChooseMaoge />
      <CasesShowcase />
      <PageSpeedShowcase />
      <ConversionFormula />
      <ContentSystem />
      <KeywordResearch />
      <MarketingBackend />
      <GscAchievements />
      <ReviewsCarousel />
      <ProviderCriteria />
      <CompareMatrix />
      <PricingPlans />
      <FaqAccordion />
    </main>
  );
}
