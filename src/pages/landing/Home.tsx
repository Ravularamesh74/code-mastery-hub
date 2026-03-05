import CodeRain from '@/components/effects/CodeRain';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import TechStackGrid from '@/components/landing/TechStackGrid';
import LearningPaths from '@/components/landing/LearningPaths';
import FeaturesSection from '@/components/landing/FeaturesSection';
import StatsBar from '@/components/landing/StatsBar';
import PricingSection from '@/components/landing/PricingSection';
import Footer from '@/components/layout/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <CodeRain />
            <Navbar />
            <div className="relative z-10">
                <HeroSection />
                <StatsBar />
                <TechStackGrid />
                <LearningPaths />
                <FeaturesSection />
                <PricingSection />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
