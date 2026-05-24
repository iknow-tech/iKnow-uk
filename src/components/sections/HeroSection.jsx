import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

/**
 * Hero Section — full-viewport with animated dark gradient background,
 * floating grid lines, and bold value proposition.
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-overlay opacity-60" />

      {/* Gradient Orbs (decorative) */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary-600/15 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-cyan/10 blur-[100px] animate-float" style={{ animationDelay: '3s' }} />

      {/* Radial fade from center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,var(--color-slate-950)_80%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="animate-fade-in mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            London-based Global IT Solutions
          </span>
        </div>

        {/* Heading */}
        <h1
          className="animate-slide-up font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white"
          style={{ animationDelay: '0.15s' }}
        >
          Engineering the Future of{' '}
          <span className="gradient-text">Enterprise Technology</span>
        </h1>

        {/* Subtext */}
        <p
          className="animate-slide-up mt-6 md:mt-8 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          style={{ animationDelay: '0.3s' }}
        >
          We design, build, and scale bespoke software solutions, AI-driven systems, and cloud infrastructure for organisations that refuse to stand still.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-slide-up mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: '0.45s' }}
        >
          <Link to="/solutions">
            <Button size="lg" variant="primary">
              Explore Solutions
              <ArrowRight size={20} />
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
              Get in Touch
            </Button>
          </Link>
        </div>

        {/* Trust badges */}
        <div
          className="animate-slide-up mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-500 text-sm"
          style={{ animationDelay: '0.6s' }}
        >
          <span>Trusted by 200+ enterprises</span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span>ISO 27001 Certified</span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span>24/7 Global Support</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
