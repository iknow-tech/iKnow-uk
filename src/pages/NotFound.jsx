import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="bg-midnight min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-60" />
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      <div className="absolute inset-0 grid-overlay-fine opacity-15 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay opacity-25 pointer-events-none" />

      <div className="relative z-10 text-center px-4 sm:px-6">
        <span className="font-display font-black text-[10rem] sm:text-[14rem] leading-none bg-gradient-to-br from-orange-400 via-brand-500 to-brand-500 bg-clip-text text-transparent opacity-40 select-none">
          404
        </span>

        <div className="-mt-8 sm:-mt-12 space-y-6">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Page Not Found
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <Link to="/">
              <Button variant="accent" size="md">
                <Home size={16} />
                Back to Home
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="md">
                Contact Us
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
