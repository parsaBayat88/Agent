
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { LeadSection } from './components/sections/LeadSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { BenefitsSection } from './components/sections/BenefitsSection';
import { SocialProofSection } from './components/sections/SocialProofSection';
import { FinalCTASection } from './components/sections/FinalCTASection';

export default function Home() {


  return (
    <div className="relative min-h-screen bg-gray-950 text-gray-100 overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <LeadSection />
        <BenefitsSection />
        <SocialProofSection />
        <FeaturesSection />
        <FinalCTASection />
      </main>
      {/* <Footer /> */}
    </div>
  );
}