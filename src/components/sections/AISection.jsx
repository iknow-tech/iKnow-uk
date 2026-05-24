import { Brain, Cpu, BarChart3, Zap, Shield, Globe } from 'lucide-react';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';

/**
 * AI Section — arya.ai-inspired showcase.
 * Dark slate background with glowing grid, cyan accent borders,
 * capability cards, and stats bar.
 */

const aiCapabilities = [
  {
    icon: Brain,
    title: 'AI Decision Intelligence',
    description:
      'Transform raw data into actionable decisions with our enterprise-grade AI models. Real-time inference at scale with explainable outcomes.',
    stats: '99.7% Accuracy',
  },
  {
    icon: Cpu,
    title: 'Digital Workforce Automation',
    description:
      'Deploy intelligent agents that automate complex workflows, from document processing to customer engagement — end to end.',
    stats: '10M+ Tasks/Day',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics Engine',
    description:
      'Forecast demand, detect anomalies, and uncover patterns hidden in your data. Purpose-built models for your industry.',
    stats: '50ms Latency',
  },
];

const platformFeatures = [
  { icon: Zap, label: 'Real-Time Processing' },
  { icon: Shield, label: 'Enterprise Security' },
  { icon: Globe, label: 'Global Deployment' },
];

export default function AISection() {
  return (
    <section className="relative bg-slate-950 py-24 md:py-32 overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay" />

      {/* Subtle gradient accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-cyan/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-primary-500/5 blur-[100px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          label="Artificial Intelligence"
          title="Intelligent Systems, Engineered for Enterprise"
          subtitle="From decision automation to predictive analytics — our AI platform delivers measurable business impact at scale."
          light
        />

        {/* Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {aiCapabilities.map((cap, index) => (
            <Card
              key={cap.title}
              dark
              glow
              className="group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center mb-5 group-hover:border-accent-cyan/40 transition-colors duration-300">
                  <cap.icon size={24} className="text-accent-cyan" />
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
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                  <span className="text-xs font-medium text-accent-cyan">
                    {cap.stats}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Platform Feature Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-8 border-t border-b border-slate-800/50">
          {platformFeatures.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-slate-400">
              <div className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center">
                <Icon size={18} className="text-primary-400" />
              </div>
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* Bottom Stats Row */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { value: '99.7%', label: 'Model Accuracy' },
            { value: '<50ms', label: 'Average Response Time' },
            { value: '10M+', label: 'Decisions Processed Daily' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display font-bold text-3xl md:text-4xl gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
