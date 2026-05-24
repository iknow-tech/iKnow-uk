import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Sparkles, Settings, Bot, BarChart3, Cloud, Shield, Calculator, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';

/**
 * Solutions Page — Premium enterprise solution architecture page.
 * Features an interactive ROI Savings Calculator and dark glass layout.
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
    titleFull: 'Software Engineering',
    description: 'Design and build modular web applications, native backend APIs, and reliable edge processing networks using vetted modern development stacks.',
    highlights: ['Distributed Web Apps', 'High-speed API Architectures', 'Edge-network Deployments'],
  },
  {
    icon: Sparkles,
    title: 'AI & Process Automation',
    titleFull: 'AI Automation',
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
  const [monthlySpend, setMonthlySpend] = useState(50000);
  const [wastedHours, setWastedHours] = useState(25);

  // Compute ROI variables
  const yearlyEngineeringSpend = monthlySpend * 12;
  const estimatedSavings = Math.floor(yearlyEngineeringSpend * 0.28 + wastedHours * 52 * 75);

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
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="w-14 h-14 rounded-2xl bg-dark-800 border border-dark-700/60 flex items-center justify-center mb-6 group-hover:border-cyan-500/40 transition-colors">
                  <Icon size={26} className="text-cyan-400" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-white">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>
                <ul className="space-y-3.5 mt-auto">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-xs font-semibold text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 animate-pulse" />
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
                  <Icon size={18} className="text-cyan-400" />
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

      {/* Interactive ROI Calculator Teaser */}
      <section className="py-24 bg-dark-950 border-t border-b border-dark-800/60 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Interactive Calculator"
            title="Estimate Your Efficiency Gains"
            subtitle="Configure your estimated operating details to project potential savings by deploying our cloud and AI services."
            light
          />

          <div className="mt-12 max-w-4xl mx-auto rounded-2xl glass-dark border border-dark-800/80 p-8 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />

            <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
              {/* Sliders Input Block */}
              <div className="md:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-semibold text-slate-300">
                    <span>Monthly IT / Engineering Spend</span>
                    <span className="text-cyan-400 font-mono">£{monthlySpend.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="500000"
                    step="10000"
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(Number(e.target.value))}
                    className="w-full h-1.5 bg-dark-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase">
                    <span>£10K</span>
                    <span>£500K</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-semibold text-slate-300">
                    <span>Manual Process Waste (Hours / Week)</span>
                    <span className="text-cyan-400 font-mono">{wastedHours} hrs</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={wastedHours}
                    onChange={(e) => setWastedHours(Number(e.target.value))}
                    className="w-full h-1.5 bg-dark-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase">
                    <span>5 hrs</span>
                    <span>100 hrs</span>
                  </div>
                </div>
              </div>

              {/* Savings Results Block */}
              <div className="md:col-span-5 p-6 bg-dark-900/60 border border-dark-800/80 rounded-2xl text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />
                <Calculator className="mx-auto text-cyan-400 mb-3" size={28} />
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                  Estimated Annual Savings
                </span>
                <span className="block font-display font-black text-3xl md:text-4xl text-white tracking-tight mb-2">
                  £{estimatedSavings.toLocaleString()}
                </span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
                  <CheckCircle size={10} />
                  Approx. 28% efficiency boost
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* External Solutions Portal Link */}
      <section className="py-24 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-brand-500/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold tracking-widest text-cyan-400 uppercase mb-8">
            <Sparkles size={12} />
            Solutions Portal
          </span>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Explore Our Comprehensive Solutions Portal
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Read granular sector deep-dives, historical client case studies, and compliance reviews inside our dedicated external portal.
          </p>

          <a
            href="https://iknow.solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-xl font-display font-bold text-base text-white bg-gradient-to-r from-cyan-500 to-brand-500 hover:from-cyan-400 hover:to-brand-400 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/25 hover:scale-[1.02] transition-all duration-300"
          >
            Visit iKnow Solutions
            <ExternalLink size={18} />
          </a>

          <p className="mt-4 text-xs text-slate-500 font-medium">
            Opens in a new window — iknow.solutions
          </p>
        </div>
      </section>

      {/* Bottom Scoping CTA */}
      <section className="py-20 bg-dark-950 border-t border-dark-800/60 relative">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-display font-black text-2xl md:text-3xl mb-4">
            Need a custom solution designed?
          </h3>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-md mx-auto">
            Our systems consulting team will analyze your existing bottlenecks under strict NDA boundaries.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="accent" className="ping-ring px-8">
              Consult with our Architects
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
