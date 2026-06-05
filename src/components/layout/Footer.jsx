import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, TwitterIcon, GithubIcon } from '../ui/SocialIcons';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import { cn } from '../../lib/utils';
import { companyInfo } from '../../lib/companyInfo';


/**
 * Premium Corporate Footer.
 * Features a newsletter email subscription box, deep midnight color system,
 * gradient accents, and micro-animations.
 */

const footerLinks = {
  company: [
    { label: 'About Us', to: '/about' },
    { label: 'Blog', to: '/blog' },
    { label: 'Careers', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],
  services: [
    { label: 'IT Consultancy', to: '/solutions' },
    { label: 'AI Products', to: '/product' },
    { label: 'Customer Care AI', to: '/product' },
    { label: 'Marketing Automation AI', to: '/product' },
    { label: 'AI & Automation', to: '/solutions' },
  ],
  resources: [
    { label: 'Documentation', to: '/blog' },
    { label: 'Case Studies', to: '/blog' },
    { label: 'Solutions Portal', href: 'https://iknow.solutions/' },
    { label: 'Privacy Policy', to: '/about' },
  ],
};

const socialLinks = [
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/company/iknow-technology', label: 'LinkedIn', color: 'hover:text-orange-400' },
  { icon: TwitterIcon, href: 'https://twitter.com/iknowtech', label: 'Twitter / X', color: 'hover:text-brand-400' },
  { icon: GithubIcon, href: 'https://github.com/iknow-technology', label: 'GitHub', color: 'hover:text-brand-400' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-midnight border-t border-dark-800/60 text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Banner: Newsletter */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 border-b border-dark-800/60">
        <div className="relative rounded-2xl glass-dark border border-dark-800/80 p-8 md:p-12 overflow-hidden shadow-2xl">
          {/* Subtle noise texture */}
          <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
                Stay updated with technology trends
              </h3>
              <p className="mt-3 text-slate-400 text-sm md:text-base leading-relaxed">
                Join our newsletter and receive exclusive insights, tech digests, and early access to our software solutions.
              </p>
            </div>
            <div className="md:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-emerald-400">
                  <CheckCircle2 size={20} className="shrink-0" />
                  <span className="font-semibold text-sm">Successfully subscribed to newsletter!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 bg-dark-700/50 border border-dark-600/80 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 transition-all duration-300"
                    />
                    <Button variant="accent" size="sm" type="submit" className="px-5">
                      <ArrowRight size={18} />
                    </Button>
                  </div>
                  {error && <p className="text-xs text-red-400 font-medium pl-1">{error}</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo className="mb-6" />
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Delivering enterprise IT solutions, bespoke software development, and AI-powered consultancy from London to the world.
            </p>

            {/* Contact Info */}
            <div className="space-y-3.5 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-orange-400 shrink-0" />
                <span>
                  <span className="block font-semibold text-slate-300">{companyInfo.londonAddress.label}</span>
                  {companyInfo.londonAddress.line}
                  <span className="mt-2 block font-semibold text-slate-300">{companyInfo.officeAddress.label}</span>
                  {companyInfo.officeAddress.line}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-orange-400 shrink-0" />
                <a href={companyInfo.emailHref} className="hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-orange-400 shrink-0" />
                <a href={companyInfo.phoneHref} className="hover:text-white transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-200 mb-6">
                {title}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-sm text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800/60 bg-dark-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} iKnow Technology Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={cn(
                  'text-slate-500 p-2.5 rounded-xl bg-dark-700/30 border border-dark-800/60 hover:bg-dark-700/60 hover:border-dark-600 transition-all duration-300',
                  color
                )}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
