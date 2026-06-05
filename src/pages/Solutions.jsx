import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Sparkles, Settings, Bot, BarChart3, Cloud, Shield } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';

/**
 * Solutions Page — Premium enterprise solution architecture page.
 */

const solutions = [
  {
    icon: Settings,
    title: 'IT Consultancy',
    description: 'Expert technological guidance for infrastructure upgrades, legacy migrations, high-throughput database systems, and multi-region routing audits.',
    highlights: ['Cloud Cost Optimization', 'Disaster Recovery Blueprints', 'Architecture Audits'],
  },
  {
    icon: Bot,
    title: 'Bespoke Software Development',
    description: 'Design and build modular web applications, native backend APIs, and reliable edge processing networks using vetted modern development stacks.',
    highlights: ['Distributed Web Apps', 'High-speed API Architectures', 'Edge-network Deployments'],
  },
  {
    icon: Sparkles,
    title: 'AI & Process Automation',
    description: 'Deploy advanced predictive telemetry engines and custom LLM inference processes directly inside sandboxed local compliance boundaries.',
    highlights: ['Predictive Inference Engines', 'Intelligent Data Extractions', 'Secure Sandboxed LLMs'],
  },
];

const additionalSolutions = [
  { icon: Cloud, title: 'Multi-Cloud Infrastructure', description: 'Federated Kubernetes clusters, high-availability networks, and AWS/Azure/GCP hybrids.' },
  { icon: Shield, title: 'Zero-Trust Cybersecurity', description: 'Envelope key encryption, FIPS compliance, and continuous threat vector maps.' },
  { icon: BarChart3, title: 'Enterprise Data Analytics', description: 'OLAP database architectures, real-time ingestion pipelines, and interactive charts.' },
];

export default function Solutions() {
  return (
    <div className="bg-midnight min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden mesh-bg">
        <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
        <div className="absolute inset-0 grid-overlay-fine opacity-20 pointer-events-none" />
        <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-500/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
            Solutions That <span className="gradient-text">Deliver ROI</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Cohesive technology strategies and execution plans engineered to transform legacy workflows and boost corporate efficiency.
          </p>
        </div>
      </section>

      {/* Core Solutions Grid */}
      <section className="py-24 bg-dark-900 border-t border-dark-800/60 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Core Capabilities"
            title="Engineering Excellence Across Fields"
            subtitle="We provide three core engineering pathways designed to solve complex system limitations."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {solutions.map(({ icon: Icon, title, description, highlights }) => (
              <Card key={title} dark glow className="flex flex-col p-8 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="w-14 h-14 rounded-2xl bg-dark-800 border border-dark-700/60 flex items-center justify-center mb-6 group-hover:border-orange-500/40 transition-colors">
                  <Icon size={26} className="text-orange-400" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-white">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>
                <ul className="space-y-3.5 mt-auto">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-xs font-semibold text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 animate-pulse" />
                      {h}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Additional Solutions Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalSolutions.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-4 p-6 rounded-2xl bg-dark-950/40 border border-dark-800/60 hover:border-dark-700 hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-dark-800 border border-dark-700 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-orange-400" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white mb-1">{title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Next Step CTA */}
      <section className="relative overflow-hidden border-t border-dark-800/60 bg-dark-950 py-20 lg:py-24">
        <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="mb-5 block text-xs font-bold uppercase tracking-[0.24em] text-orange-400">
                Next Step
              </span>
              <h2 className="max-w-3xl font-display text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Turn your solution roadmap into a scoped plan
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                Speak with our architects to shape priorities, technical constraints, and delivery options, or explore the dedicated solutions portal for deeper reference material.
              </p>
            </div>

            <div className="flex flex-col gap-2 lg:items-end">
              <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row lg:justify-end">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="md" variant="accent" className="w-full whitespace-nowrap px-5 sm:w-auto">
                    Consult Architects
                    <ArrowRight size={16} />
                  </Button>
                </Link>

                <a
                  href="https://iknow.solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-dark-700/80 bg-dark-900/55 px-5 py-3 font-display text-base font-semibold text-slate-200 hover:border-brand-400/60 hover:bg-dark-800/80 hover:text-white sm:w-auto"
                >
                  Visit iKnow Solutions
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="text-[11px] font-medium text-slate-500 lg:pr-1">
                External portal opens in a new window.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
