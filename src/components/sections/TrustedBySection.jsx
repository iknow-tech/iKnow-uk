import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Cloud, ShieldCheck, TrendingUp } from 'lucide-react';
import { cn } from '../../lib/utils';

/**
 * Outcome-focused proof section.
 * Replaces passive partner placeholders with clickable business pathways.
 */

const pathways = [
  {
    icon: Cloud,
    eyebrow: 'Cloud Infrastructure',
    title: 'Stabilise complex systems before they slow growth.',
    description:
      'Migration plans, cost governance, resilient routing, and high-availability architectures for enterprise teams.',
    points: ['Multi-cloud readiness', 'Cost and performance audits'],
    to: '/solutions',
    tone: 'cyan',
  },
  {
    icon: Bot,
    eyebrow: 'AI Automation',
    title: 'Turn repetitive operations into intelligent workflows.',
    description:
      'Secure AI pipelines for documents, forecasting, customer operations, and internal process acceleration.',
    points: ['Private LLM workflows', 'Predictive analytics engines'],
    to: '/solutions',
    tone: 'brand',
  },
  {
    icon: ShieldCheck,
    eyebrow: 'Security & Compliance',
    title: 'Build trust into every deployment layer.',
    description:
      'Zero-trust reviews, encryption strategy, access controls, and compliance mapping for sensitive environments.',
    points: ['Security posture reviews', 'GDPR and SOC readiness'],
    to: '/contact',
    tone: 'violet',
  },
];

const metrics = [
  { value: '200+', label: 'Enterprise engagements' },
  { value: '30+', label: 'Countries supported' },
  { value: '24/7', label: 'Critical support coverage' },
];

const toneClasses = {
  cyan: {
    icon: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
    glow: 'group-hover:border-orange-500/40 group-hover:shadow-orange-500/10',
    text: 'text-orange-400',
  },
  brand: {
    icon: 'bg-brand-500/10 border-brand-500/20 text-brand-400',
    glow: 'group-hover:border-brand-500/40 group-hover:shadow-brand-500/10',
    text: 'text-brand-400',
  },
  violet: {
    icon: 'bg-brand-500/10 border-brand-500/20 text-brand-400',
    glow: 'group-hover:border-brand-500/40 group-hover:shadow-brand-500/10',
    text: 'text-brand-400',
  },
};

export default function TrustedBySection() {
  return (
    <section className="relative overflow-hidden bg-dark-900 border-t border-dark-800/60 py-20 md:py-24">
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 h-64 w-[620px] -translate-x-1/2 rounded-full bg-orange-500/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-brand-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-orange-400">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              Enterprise Outcomes
            </span>
            <h2 className="mt-5 font-display text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
              Practical technology paths with visible business impact.
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-3 rounded-2xl border border-dark-800/70 bg-dark-950/35 p-3 shadow-xl shadow-midnight/20">
            {metrics.map((metric) => (
              <div key={metric.label} className="min-w-0 px-3 py-2 text-center">
                <div className="font-display text-lg font-black text-white sm:text-2xl">{metric.value}</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {pathways.map(({ icon: Icon, eyebrow, title, description, points, to, tone }) => {
            const toneClass = toneClasses[tone];

            return (
              <Link
                key={title}
                to={to}
                className={cn(
                  'group relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl border border-dark-800/70 bg-dark-800/55 p-6 shadow-xl shadow-midnight/10 transition-all duration-500',
                  'hover:-translate-y-1 hover:bg-dark-750/70 hover:shadow-2xl',
                  toneClass.glow
                )}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div
                      className={cn(
                        'flex h-12 w-12 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105',
                        toneClass.icon
                      )}
                    >
                      <Icon size={22} />
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </div>

                  <span className={cn('text-xs font-bold uppercase tracking-[0.16em]', toneClass.text)}>
                    {eyebrow}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-orange-100">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">
                    {description}
                  </p>

                  <div className="mt-auto space-y-3 border-t border-dark-700/60 pt-6">
                    {points.map((point) => (
                      <div key={point} className="flex items-center gap-2.5 text-xs font-semibold text-slate-300">
                        <TrendingUp size={13} className={cn('shrink-0', toneClass.text)} />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
