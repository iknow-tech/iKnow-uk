import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

/**
 * HeroSection — Premium dark-first hero section.
 * Features an animated gradient mesh background, custom grid lines,
 * high-impact display typography, and secondary CTA links.
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg">
      {/* Premium Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
      <div className="absolute inset-0 grid-overlay-fine opacity-20 pointer-events-none" />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-brand-500/10 blur-[130px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-orange-500/8 blur-[110px] animate-float pointer-events-none" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/2 left-2/3 w-[300px] h-[300px] rounded-full bg-brand-500/5 blur-[100px] animate-pulse-glow pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Title */}
        <h1
          className="animate-slide-up font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white max-w-5xl mx-auto"
          style={{ animationDelay: '0.15s' }}
        >
          Engineering the Future of{' '}
          <span className="gradient-text">Enterprise Technology</span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-slide-up mt-8 text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          style={{ animationDelay: '0.3s' }}
        >
          We architect, build, and deploy premium bespoke software systems, AI-driven automation workflows, and robust cloud infrastructures for industry leaders.
        </p>

        {/* CTA Actions */}
        <div
          className="animate-slide-up mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: '0.45s' }}
        >
          <Link to="/solutions">
            <Button size="lg" variant="accent" className="px-8">
              Explore Solutions
              <ArrowRight size={18} />
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="px-8">
              Book a Strategy Call
            </Button>
          </Link>
        </div>

      </div>

      {/* Downward Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 cursor-pointer hover:text-white transition-colors duration-300">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
