import CodeRain from '@/components/CodeRain';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TechStackGrid from '@/components/TechStackGrid';
import LearningPaths from '@/components/LearningPaths';
import FeaturesSection from '@/components/FeaturesSection';
import StatsBar from '@/components/StatsBar';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CodeRain />
      <Navbar />
      <HeroSection />
      <StatsBar />
      <TechStackGrid />
      <LearningPaths />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
