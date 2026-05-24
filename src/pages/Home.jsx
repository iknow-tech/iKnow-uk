import HeroSection from '../components/sections/HeroSection';
import TrustedBySection from '../components/sections/TrustedBySection';
import AISection from '../components/sections/AISection';
import ProcessSection from '../components/sections/ProcessSection';
import ContactSection from '../components/sections/ContactSection';

/**
 * Home Page — Assembles the main premium layout components.
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <AISection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
