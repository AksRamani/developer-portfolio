import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProofStrip from '@/components/ProofStrip';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import TechnologiesSection from '@/components/TechnologiesSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';
import MotionToggle from '@/components/MotionToggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030303] text-[#f1eee8] relative flex flex-col">
      <ScrollProgress />
      <MotionToggle />
      <Navbar />
      <main id="main" className="flex-1">
        <HeroSection />
        <ProofStrip />
        <AboutSection />
        <ExperienceSection />
        <TechnologiesSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
