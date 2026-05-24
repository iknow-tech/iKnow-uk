import HeroSection from '../components/sections/HeroSection';
import AISection from '../components/sections/AISection';
import ContactSection from '../components/sections/ContactSection';

/**
 * Home Page — assembles the three main sections:
 * 1. Hero with animated dark background
 * 2. AI showcase (arya.ai-inspired)
 * 3. Embedded contact form
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <AISection />
      <ContactSection />
    </>
  );
}
