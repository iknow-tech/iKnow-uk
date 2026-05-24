import Marquee from '../ui/Marquee';

/**
 * TrustedBySection — A premium scrolling strip of global corporate partner logos.
 * Uses the custom Marquee component for infinite horizontal loops.
 */

const partners = [
  { name: 'Quantum Core', desc: 'Enterprise Systems' },
  { name: 'Nexa Group', desc: 'SaaS Platforms' },
  { name: 'Apex Finance', desc: 'Banking Infrastructure' },
  { name: 'Horizon Cloud', desc: 'Hybrid Systems' },
  { name: 'Nova AI', desc: 'Autonomous Agents' },
  { name: 'Aether Security', desc: 'Global Audits' },
  { name: 'Vortex Systems', desc: 'Defense Solutions' },
  { name: 'Zenith Labs', desc: 'Neural Engineering' },
];

export default function TrustedBySection() {
  return (
    <section className="bg-dark-900 border-t border-dark-800/60 py-12 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8">
          Accelerating growth for the world's most progressive organizations
        </p>
      </div>

      <Marquee speed="slow" pauseOnHover className="py-2">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex items-center gap-3 px-8 py-3 rounded-2xl bg-dark-800/40 border border-dark-800/60 shadow-inner group hover:border-cyan-500/20 hover:bg-dark-750/50 transition-all duration-300 select-none cursor-default"
          >
            {/* Minimalist icon placeholder */}
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500/20 to-cyan-500/20 border border-brand-500/20 flex items-center justify-center font-display font-black text-xs text-cyan-400 group-hover:scale-105 transition-transform duration-300">
              {partner.name.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <span className="block font-display font-bold text-sm tracking-wide text-slate-300 group-hover:text-white transition-colors">
                {partner.name}
              </span>
              <span className="block text-[10px] font-semibold text-slate-500 group-hover:text-cyan-400/80 transition-colors uppercase tracking-wider">
                {partner.desc}
              </span>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
