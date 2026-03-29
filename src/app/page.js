import HeroSection from '@/components/home/HeroSection';
import WhoWeAreSection from '@/components/home/WhoWeAreSection';
import ServicesSection from '@/components/home/ServicesSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import ContactSection from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}