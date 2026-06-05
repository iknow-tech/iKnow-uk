import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { useInView } from '../../hooks/useInView';
import { cn } from '../../lib/utils';
import { Search, Compass, Cpu, ShieldAlert, Rocket } from 'lucide-react';

/**
 * ProcessSection — Interactive 5-step delivery methodology section.
 * Features staggered scroll reveals and glowing connecting lines.
 */

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Discovery & Audit',
    description:
      'We deep-dive into your existing infrastructure, codebase, and team structure to locate scale bottlenecks and operational leakage.',
  },
  {
    num: '02',
    icon: Compass,
    title: 'Strategic Architecture',
    description:
      'Our team models a secure, high-throughput systems blueprint tailored for your target growth vectors, selecting modern cloud technologies.',
  },
  {
    num: '03',
    icon: Cpu,
    title: 'Agile Implementation',
    description:
      'Elite software engineers draft and deploy clean modular code, backed by strict continuous integration systems and weekly demo reviews.',
  },
  {
    num: '04',
    icon: ShieldAlert,
    title: 'Defensive Security',
    description:
      'Before going live, the deployment goes through rigorous penetration tests, permission configurations, and compliance audits.',
  },
  {
    num: '05',
    icon: Rocket,
    title: 'Optimization & scale',
    description:
      'We continue to track runtime telemetry, scaling compute clusters dynamically and injecting database enhancements to keep latency low.',
  },
];

export default function ProcessSection() {
  const [ref, visible] = useInView({ threshold: 0.1 });

  return (
    <section className="bg-dark-900 py-24 md:py-32 relative overflow-hidden border-t border-dark-800/60">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Methodology"
          title="Engineered to Deliver Without Friction"
          subtitle="A highly optimized, secure, and transparent engineering workflow built for enterprise success."
          light
        />

        {/* Process steps grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8 relative">
          {steps.map((step, idx) => (
            <Card
              key={step.num}
              dark
              glow
              className={cn(
                'relative group transition-all duration-700 flex flex-col justify-between',
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {/* Connector line for large screens */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[105%] w-1/3 h-0.5 bg-gradient-to-r from-orange-500/30 to-brand-500/10 z-0 pointer-events-none" />
              )}

              <div className="relative z-10">
                {/* Step index + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center font-display font-black text-sm text-orange-400 group-hover:border-orange-500/40 transition-colors">
                    <step.icon size={18} />
                  </div>
                  <span className="font-display font-black text-2xl tracking-tighter bg-gradient-to-br from-dark-500 to-dark-600 bg-clip-text text-transparent group-hover:from-orange-400 group-hover:to-brand-400 transition-all duration-500">
                    {step.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
