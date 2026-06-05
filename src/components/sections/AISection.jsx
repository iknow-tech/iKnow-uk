import { Brain, Cpu, BarChart3, Zap, Shield, Globe } from 'lucide-react';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import AnimatedCounter from '../ui/AnimatedCounter';

/**
 * AI Section.
 * Shows high-impact capability cards, interactive elements,
 * platform core pillars, and animated statistic counters.
 */

const aiCapabilities = [
  {
    icon: Brain,
    title: 'AI Decision Intelligence',
    description:
      'Transform raw corporate data into actionable decisions with explainable AI models. Execute real-time inference at scale with secure local hosting options.',
    stats: '99.7% Accuracy',
  },
  {
    icon: Cpu,
    title: 'Digital Workforce Automation',
    description:
      'Deploy autonomous agents capable of managing complex document processing pipelines, client interactions, and predictive analytics integrations.',
    stats: '10M+ Tasks/Day',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics Engine',
    description:
      'Identify anomalies, forecast infrastructure demand, and discover hidden correlations inside petabyte-scale environments.',
    stats: '50ms Latency',
  },
];

const platformFeatures = [
  { icon: Zap, label: 'Real-Time Streaming Inference' },
  { icon: Shield, label: 'Enterprise Security Compliance' },
  { icon: Globe, label: 'Edge Network Deployments' },
];

export default function AISection() {
  return (
    <section className="relative bg-midnight py-24 md:py-32 overflow-hidden border-t border-dark-800/60">
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

      {/* Glowing Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-brand-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          label="Artificial Intelligence"
          title="Intelligent Systems, Built for Enterprise Scaling"
          subtitle="From autonomous process pipelines to predictive neural models, our solutions drive efficiency across the enterprise."
          light
        />

        {/* Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {aiCapabilities.map((cap) => (
            <Card
              key={cap.title}
              dark
              glow
              className="group relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5 group-hover:border-orange-500/40 group-hover:scale-105 transition-all duration-300">
                  <cap.icon size={22} className="text-orange-400" />
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-xl text-white mb-3">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {cap.description}
                </p>

                {/* Stats badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                  <span className="text-xs font-semibold text-orange-400">
                    {cap.stats}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Platform Feature Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-8 border-t border-b border-dark-800/60 bg-dark-900/10 rounded-2xl">
          {platformFeatures.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-slate-300">
              <div className="w-10 h-10 rounded-xl bg-dark-700/40 border border-dark-800 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-orange-400" />
              </div>
              <span className="text-sm font-semibold tracking-wide">{label}</span>
            </div>
          ))}
        </div>

        {/* Bottom Stats Row with Animated Counters */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center bg-dark-900/30 rounded-2xl border border-dark-800/50 p-8">
          {[
            { value: 99, prefix: '', suffix: '.7%', label: 'Model Accuracy' },
            { value: 50, prefix: '<', suffix: 'ms', label: 'Average Response Time' },
            { value: 10, prefix: '', suffix: 'M+', label: 'Daily Decisions Automated' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="mb-2">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="font-display font-black text-4xl md:text-5xl gradient-text"
                />
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
