import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { LinkedinIcon, TwitterIcon, GithubIcon } from '../ui/SocialIcons';

/**
 * Corporate Footer with 4-column grid layout.
 * Dark navy background matching the brand.
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
    { label: 'Software Development', to: '/product' },
    { label: 'AI & Automation', to: '/solutions' },
    { label: 'Cloud Solutions', to: '/solutions' },
  ],
  resources: [
    { label: 'Documentation', to: '/blog' },
    { label: 'Case Studies', to: '/blog' },
    { label: 'Solutions Portal', href: 'https://iknow.solutions/' },
    { label: 'Privacy Policy', to: '/about' },
  ],
};

const socialLinks = [
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { icon: TwitterIcon, href: '#', label: 'Twitter / X' },
  { icon: GithubIcon, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">iK</span>
              </div>
              <span className="font-display font-bold text-xl text-white">
                iKnow<span className="text-primary-400">.tech</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Delivering enterprise IT solutions, bespoke software, and AI-powered consultancy from London to the world.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-primary-400 shrink-0" />
                <span>London, United Kingdom</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary-400 shrink-0" />
                <a href="mailto:info@iknow.tech" className="hover:text-white transition-colors">
                  info@iknow.tech
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary-400 shrink-0" />
                <a href="tel:+442012345678" className="hover:text-white transition-colors">
                  +44 20 1234 5678
                </a>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-slate-300 mb-5">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-sm text-slate-400 hover:text-white transition-colors"
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
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} iKnow Technology Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-slate-500 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800"
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
