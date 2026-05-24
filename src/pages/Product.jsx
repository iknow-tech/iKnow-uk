import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Lock, Layers, Workflow, Check, Server, Terminal, ShieldCheck } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';

/**
 * Product Page — World-class product showcase.
 * Features a tabbed feature spotlight, custom code mockup previews,
 * and a premium feature comparison matrix.
 */

const products = [
  {
    icon: Layers,
    name: 'iKnow Platform',
    tagline: 'Unified Enterprise Intelligence',
    description: 'A modular data and intelligence platform that consolidates real-time feeds, metrics, and machine learning models into a single unified window.',
    features: ['Sub-second latency analytics', 'Custom ML model registries', 'Zero-trust role mappings', 'API-first data streams'],
    iconColor: 'text-cyan-400',
  },
  {
    icon: Workflow,
    name: 'FlowEngine',
    tagline: 'Process Automation Suite',
    description: 'Design, deploy, and monitor event-driven automation workflows connecting legacy databases and SaaS protocols using our low-code designer.',
    features: ['Visual node graph compiler', '300+ pre-built connectors', 'State machine recovery', 'Full cryptographic log trails'],
    iconColor: 'text-brand-400',
  },
  {
    icon: Lock,
    name: 'SecureVault',
    tagline: 'Enterprise Cyber Security',
    description: 'End-to-end envelope encryption, real-time threat mapping, and automated regulatory compliance reporting for high-risk environments.',
    features: ['FIPS 140-2 Level 3 HSMs', 'Automated GDPR & SOC 2 audits', 'Real-time drift alerts', 'Immutable audit logs'],
    iconColor: 'text-violet-400',
  },
];

const tabsData = [
  {
    id: 'api',
    label: 'Developer API',
    icon: Terminal,
    title: 'Developer-First Integration Architecture',
    subtitle: 'Plug our services directly into your codebase with robust, highly-typed REST and GraphQL endpoints.',
    content: `// Example integration in Javascript Node.js
import { iKnowClient } from '@iknow-tech/sdk';

const client = new iKnowClient({
  apiKey: process.env.IKNOW_SECRET_KEY,
  environment: 'production'
});

// Initialize real-time analytics streaming
const session = await client.analytics.createSession({
  streamId: 'ent_prod_9941x',
  features: ['anomaly_detection', 'load_forecasting']
});

session.on('drift', (anomaly) => {
  console.warn(\`Anomaly detected: \${anomaly.confidence * 100}%\`);
});`,
  },
  {
    id: 'analytics',
    label: 'Real-Time Insights',
    icon: Database,
    title: 'Multi-Database Telemetry & Live Queries',
    subtitle: 'Execute distributed SQL-like queries across multiple database systems instantly, and build live graphs.',
    content: `{
  "query": "SELECT cluster_id, COUNT(*) FROM compute_nodes WHERE load > 85 GROUP BY cluster_id",
  "result": [
    { "cluster_id": "us-east-4", "count": 14, "avg_response": "12ms" },
    { "cluster_id": "eu-west-1", "count": 29, "avg_response": "8ms" },
    { "cluster_id": "ap-south-2", "count": 5, "avg_response": "18ms" }
  ],
  "latency": "22ms",
  "status": "COMPLETED"
}`,
  },
  {
    id: 'security',
    label: 'Compliance Engine',
    icon: ShieldCheck,
    title: 'Always-On Regulatory Posture Mapping',
    subtitle: 'Map your compliance configuration policies directly to SOC 2, HIPAA, and GDPR frameworks automatically.',
    content: `[Compliance Report: SOC 2 Type II]
- Envelope encryption: ACTIVE (AES-256)
- IAM Policy Mappings: 100% compliant
- Intrusion detection logs: SECURED (Immutable)
- Key rotations: SUCCESSFUL (90 day cycle)

Post-audited score: 100 / 100 [SECURE]`,
  },
];

const comparisonMatrix = [
  { feature: 'Multi-cloud Deployment', platform: true, flow: true, vault: true },
  { feature: 'Sub-second Data Pipelines', platform: true, flow: false, vault: false },
  { feature: 'FIPS 140-2 Cryptography', platform: false, flow: false, vault: true },
  { feature: 'Cryptographic Audit Trails', platform: true, flow: true, vault: true },
  { feature: 'Self-healing Workflows', platform: false, flow: true, vault: false },
  { feature: 'Dedicated Hardware Security (HSM)', platform: false, flow: false, vault: true },
  { feature: 'Custom Machine Learning Registry', platform: true, flow: false, vault: false },
];

export default function Product() {
  const [activeTab, setActiveTab] = useState('api');

  return (
    <div className="bg-midnight min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden mesh-bg">
        <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
        <div className="absolute inset-0 grid-overlay-fine opacity-20 pointer-events-none" />
        <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] bg-cyan-500/10 blur-[130px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
            Products Engineered for <span className="gradient-text">Scale & Speed</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Enterprise-grade products designed for reliability. Built on modular frameworks that slot directly into your architecture.
          </p>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-24 bg-dark-900 border-t border-dark-800/60 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Technology Core"
            title="Our Product Portfolios"
            subtitle="Explore each tool engineered explicitly to accelerate digital transformations."
            light
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map(({ icon: Icon, name, tagline, description, features, iconColor }) => (
              <Card key={name} dark glow className="flex flex-col p-8 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-dark-800 border border-dark-700/60 flex items-center justify-center mb-6 group-hover:border-cyan-500/40 transition-colors">
                  <Icon size={26} className={iconColor} />
                </div>

                {/* Info */}
                <h3 className="font-display font-bold text-xl mb-1 text-white">{name}</h3>
                <p className="text-cyan-400 text-xs font-bold tracking-wide uppercase mb-4">{tagline}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>

                {/* Features List */}
                <ul className="space-y-3.5 mt-auto mb-8">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-xs font-semibold text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action */}
                <Link to="/contact" className="mt-auto">
                  <Button variant="secondary" size="sm" className="w-full">
                    Request Integration Demo
                    <ArrowRight size={14} />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Spotlight Section with Tab Switching */}
      <section className="py-24 bg-dark-950 border-t border-b border-dark-800/60 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Spotlight Features"
            title="Interactive Demonstration Console"
            subtitle="Switch between developer pipelines to witness real-time payload structure configurations."
            light
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
            {/* Tabs Selector list */}
            <div className="lg:col-span-4 space-y-3">
              {tabsData.map((tab) => {
                const TabIcon = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-300 text-left cursor-pointer ${
                      isSelected
                        ? 'bg-brand-500/10 border-brand-500/50 text-white shadow-lg shadow-brand-500/5'
                        : 'bg-dark-900/40 border-dark-800/60 text-slate-400 hover:text-white hover:bg-dark-900/80'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-brand-500/20 text-cyan-400' : 'bg-dark-800 text-slate-400'}`}>
                      <TabIcon size={18} />
                    </div>
                    <div>
                      <span className="block font-display font-bold text-sm">{tab.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Interactive Mock Code Display Panel */}
            <div className="lg:col-span-8">
              {tabsData.map((tab) => {
                if (tab.id !== activeTab) return null;
                return (
                  <div key={tab.id} className="space-y-6 animate-fade-in">
                    <div>
                      <h3 className="font-display font-bold text-2xl text-white">{tab.title}</h3>
                      <p className="mt-2 text-slate-400 text-sm leading-relaxed">{tab.subtitle}</p>
                    </div>

                    {/* Faux Code Editor Frame */}
                    <div className="relative rounded-2xl bg-dark-900 border border-dark-800 overflow-hidden shadow-2xl">
                      {/* Faux Title bar */}
                      <div className="flex items-center justify-between px-5 py-3 border-b border-dark-800 bg-dark-950/80">
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-red-500/70" />
                          <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                          <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                          <Server size={10} className="text-cyan-400" />
                          iknow-terminal-session
                        </span>
                      </div>

                      {/* Code Content */}
                      <pre className="p-6 overflow-x-auto text-xs font-mono text-cyan-300 leading-relaxed bg-dark-900/60 no-scrollbar">
                        <code>{tab.content}</code>
                      </pre>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="py-24 bg-dark-900 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Feature Matrix"
            title="Compare Our Capabilities"
            subtitle="Detailed overview of architecture features supported across each product module."
            light
          />

          <div className="overflow-x-auto rounded-2xl border border-dark-800 bg-dark-950/20 shadow-xl mt-12">
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr className="border-b border-dark-800 bg-dark-900/40">
                  <th className="p-5 font-display font-bold text-xs uppercase tracking-widest text-slate-400">Capabilities</th>
                  <th className="p-5 font-display font-bold text-xs uppercase tracking-widest text-cyan-400">iKnow Platform</th>
                  <th className="p-5 font-display font-bold text-xs uppercase tracking-widest text-brand-400">FlowEngine</th>
                  <th className="p-5 font-display font-bold text-xs uppercase tracking-widest text-violet-400">SecureVault</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-800/60">
                {comparisonMatrix.map((row) => (
                  <tr key={row.feature} className="hover:bg-dark-900/25 transition-colors">
                    <td className="p-5 text-sm font-semibold text-slate-300">{row.feature}</td>
                    <td className="p-5 text-slate-400">
                      {row.platform ? <Check size={18} className="text-cyan-400" /> : <span className="text-slate-600">—</span>}
                    </td>
                    <td className="p-5 text-slate-400">
                      {row.flow ? <Check size={18} className="text-brand-400" /> : <span className="text-slate-600">—</span>}
                    </td>
                    <td className="p-5 text-slate-400">
                      {row.vault ? <Check size={18} className="text-violet-400" /> : <span className="text-slate-600">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) */}
      <section className="py-24 bg-dark-950 border-t border-dark-800/60 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl mb-6">
            Ready to integrate iKnow products?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Schedule an architect briefing call to discuss deployment constraints, hardware security modules, or compliance mappings.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg" className="ping-ring px-8">
              Book Architecture Session
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
