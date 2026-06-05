import { Link } from 'react-router-dom';
import { LinkedinIcon, TwitterIcon, GithubIcon } from '../ui/SocialIcons';
import Logo from '../ui/Logo';
import { cn } from '../../lib/utils';

const socialLinks = [
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/company/iknow-technology', label: 'LinkedIn', color: 'hover:text-orange-400' },
  { icon: TwitterIcon, href: 'https://twitter.com/iknowtech', label: 'Twitter / X', color: 'hover:text-brand-400' },
  { icon: GithubIcon, href: 'https://github.com/iknow-technology', label: 'GitHub', color: 'hover:text-brand-400' },
];

const footerLinks = [
  { label: 'AI Products', to: '/product' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-dark-800/60 bg-midnight text-white">
      <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-orange-500/6 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-600/8 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 grid-overlay-fine opacity-10 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Logo height={34} />
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} iKnow Technology Ltd. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end">
            <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              {footerLinks.map((link) => (
                <Link key={link.label} to={link.to} className="text-slate-500 transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={cn(
                    'rounded-xl border border-dark-800/60 bg-dark-700/30 p-2.5 text-slate-500 transition-all duration-300 hover:border-dark-600 hover:bg-dark-700/60',
                    color
                  )}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
