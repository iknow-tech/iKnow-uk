import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Check,
  Headphones,
  Megaphone,
  MessageCircle,
  SearchCheck,
  Server,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';

/**
 * Product Page — iKnow AI product suite.
 * Presents four business-ready AI products with use-case demos and capability mapping.
 */

const products = [
  {
    icon: Headphones,
    name: 'iKnow Customer Care AI',
    tagline: 'Omnichannel Customer Support',
    description:
      'Transform customer support with an AI-driven platform that unifies voice, IVR, WhatsApp, Telegram, and multiple communication channels into one operational hub.',
    features: [
      'Voice, IVR, WhatsApp and Telegram',
      'Centralized customer management',
      'AI-assisted routing and automation',
      'Powerful admin tools for support teams',
    ],
    iconColor: 'text-cyan-400',
  },
  {
    icon: Megaphone,
    name: 'iKnow Digital Marketing AI',
    tagline: 'Marketing Automation & Growth',
    description:
      'Accelerate growth with AI-powered campaign management, content creation, social publishing, customer journey orchestration, lead management, SEO, and real-time analytics.',
    features: [
      'Campaign and content automation',
      'Social media publishing workflows',
      'Lead management and journey orchestration',
      'SEO optimization and live analytics',
    ],
    iconColor: 'text-brand-400',
  },
  {
    icon: BarChart3,
    name: 'iKnow Business Intelligence AI',
    tagline: 'Forecasting & Anomaly Detection',
    description:
      'Continuously analyse sales, inventory, payment, and operational data to forecast cash flow, predict demand, optimise inventory, and surface anomalies before they become problems.',
    features: [
      'Predict future cash flow',
      'Optimize inventory levels',
      'Detect business anomalies early',
      'Automated operational insights',
    ],
    iconColor: 'text-emerald-400',
  },
  {
    icon: BrainCircuit,
    name: 'iKnow Enterprise Knowledge AI',
    tagline: 'Knowledge Management & AI Search',
    description:
      'Unlock knowledge hidden across documents and data with AI search, RAG, document intelligence, and conversational assistants that answer like an internal expert.',
    features: [
      'AI search, semantic search and RAG',
      'Multi-document chat and summarization',
      'Knowledge extraction and document processing',
      'Employee copilot and multilingual self-service',
    ],
    iconColor: 'text-violet-400',
  },
];

const tabsData = [
  {
    id: 'care',
    label: 'Customer Care AI',
    caption: 'Support operations',
    icon: MessageCircle,
    title: 'Resolve customer conversations from one intelligent workspace.',
    subtitle:
      'Unify inbound voice, IVR, WhatsApp, Telegram, and digital tickets while AI assists routing, triage, and response quality.',
    content: `[Customer Care Flow]
Inbound channel: WhatsApp
Customer intent: Billing issue
Priority: High

AI actions:
- Identify customer profile and recent orders
- Summarise conversation history for the support agent
- Suggest next-best response and escalation path
- Route unresolved case to billing queue

Outcome:
One customer record, one conversation timeline, faster resolution.`,
  },
  {
    id: 'marketing',
    label: 'Digital Marketing AI',
    caption: 'Growth engine',
    icon: Megaphone,
    title: 'Plan, launch, and optimise digital campaigns with AI assistance.',
    subtitle:
      'Coordinate campaign strategy, content generation, social publishing, lead workflows, SEO tasks, and performance dashboards in one platform.',
    content: `{
  "campaign": "Q3 Growth Push",
  "audience": "High-intent B2B leads",
  "ai_recommendations": [
    "Generate 6 LinkedIn post variants",
    "Prioritise SEO pages with declining impressions",
    "Trigger nurture sequence for warm leads",
    "Shift budget toward highest-converting channel"
  ],
  "live_metrics": {
    "engagement": "+18%",
    "conversion_rate": "+9%",
    "marketing_roi": "improving"
  }
}`,
  },
  {
    id: 'intelligence',
    label: 'Business Intelligence AI',
    caption: 'Forecasting',
    icon: TrendingUp,
    title: 'Predict cash flow, demand, inventory needs, and business risks.',
    subtitle:
      'Monitor operational data continuously so finance, sales, and operations teams can act before risk becomes visible on the balance sheet.',
    content: `[Predictive Monitoring]
Data streams:
- Sales pipeline
- Inventory levels
- Payment collection
- Supplier lead times

AI signals:
- Cash flow pressure likely in 21 days
- Inventory shortage risk: Product Group A
- Demand forecast increased by 14%
- Payment anomaly detected in customer segment B

Recommended action:
Adjust purchasing plan and review credit exposure.`,
  },
  {
    id: 'knowledge',
    label: 'Enterprise Knowledge AI',
    caption: 'AI search',
    icon: SearchCheck,
    title: 'Let teams ask company knowledge questions in natural language.',
    subtitle:
      'Combine RAG, semantic search, document summarization, multi-document chat, and governance to make internal knowledge instantly usable.',
    content: `Employee question:
"Summarise the latest onboarding policy and show the steps for remote employees."

Knowledge AI response:
- Searches approved HR policy documents
- Retrieves relevant sections with source references
- Summarises the current version
- Flags restricted documents outside the user's access
- Provides a multilingual answer when needed

Governance:
Version control, access management, audit logs, and enterprise compliance.`,
  },
];

const comparisonMatrix = [
  { feature: 'Omnichannel customer conversations', care: true, marketing: false, intelligence: false, knowledge: false },
  { feature: 'Voice, IVR, WhatsApp and Telegram support', care: true, marketing: false, intelligence: false, knowledge: false },
  { feature: 'Campaign management and social publishing', care: false, marketing: true, intelligence: false, knowledge: false },
  { feature: 'AI content creation and SEO optimization', care: false, marketing: true, intelligence: false, knowledge: true },
  { feature: 'Lead management and journey orchestration', care: false, marketing: true, intelligence: false, knowledge: false },
  { feature: 'Cash flow and demand forecasting', care: false, marketing: false, intelligence: true, knowledge: false },
  { feature: 'Inventory optimization', care: false, marketing: false, intelligence: true, knowledge: false },
  { feature: 'Anomaly detection and automated insights', care: true, marketing: true, intelligence: true, knowledge: false },
  { feature: 'RAG and semantic search', care: false, marketing: false, intelligence: false, knowledge: true },
  { feature: 'Multi-document chat and summarization', care: false, marketing: false, intelligence: false, knowledge: true },
  { feature: 'Version, access, and governance controls', care: true, marketing: true, intelligence: true, knowledge: true },
  { feature: 'Enterprise security and compliance', care: true, marketing: true, intelligence: true, knowledge: true },
];

export default function Product() {
  const [activeTab, setActiveTab] = useState('care');

  return (
    <div className="bg-midnight min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden mesh-bg">
        <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
        <div className="absolute inset-0 grid-overlay-fine opacity-20 pointer-events-none" />
        <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] bg-cyan-500/10 blur-[130px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4.5 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-400">
              <Sparkles size={13} />
              AI Product Suite
            </span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
            AI Products Built for <span className="gradient-text">Business Growth</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            iKnow AI products combine customer engagement, marketing automation, forecasting, anomaly detection, and enterprise knowledge search into deployable business platforms.
          </p>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-24 bg-dark-900 border-t border-dark-800/60 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="AI Products"
            title="Four Platforms for Modern Operations"
            subtitle="Each product is designed around a clear business function: support, marketing, intelligence, or enterprise knowledge."
            light
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map(({ icon: Icon, name, tagline, description, features, iconColor }) => (
              <Card key={name} dark glow className="flex flex-col p-8 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-5 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-dark-800 border border-dark-700/60 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors shrink-0">
                      <Icon size={26} className={iconColor} />
                    </div>
                    <span className="rounded-full border border-dark-700/70 bg-dark-950/35 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      AI Platform
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl mb-2 text-white">{name}</h3>
                  <p className="text-cyan-400 text-xs font-bold tracking-wide uppercase mb-4">{tagline}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto mb-8">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs font-semibold text-slate-300">
                        <Check size={14} className="mt-0.5 text-cyan-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="mt-auto">
                    <Button variant="secondary" size="sm" className="w-full">
                      Request AI Product Demo
                      <ArrowRight size={14} />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Spotlight Section with Tab Switching */}
      <section className="py-24 bg-dark-950 border-t border-b border-dark-800/60 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Product Spotlight"
            title="See How Each AI Product Works"
            subtitle="Switch between product scenarios to see the kind of business workflows each platform is built to support."
            light
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
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
                    <div className={`p-2 rounded-lg shrink-0 ${isSelected ? 'bg-brand-500/20 text-cyan-400' : 'bg-dark-800 text-slate-400'}`}>
                      <TabIcon size={18} />
                    </div>
                    <div className="min-w-0">
                      <span className="block font-display font-bold text-sm">{tab.label}</span>
                      <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {tab.caption}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-8">
              {tabsData.map((tab) => {
                if (tab.id !== activeTab) return null;
                return (
                  <div key={tab.id} className="space-y-6 animate-fade-in">
                    <div>
                      <h3 className="font-display font-bold text-2xl text-white">{tab.title}</h3>
                      <p className="mt-2 text-slate-400 text-sm leading-relaxed">{tab.subtitle}</p>
                    </div>

                    <div className="relative rounded-2xl bg-dark-900 border border-dark-800 overflow-hidden shadow-2xl">
                      <div className="flex items-center justify-between px-5 py-3 border-b border-dark-800 bg-dark-950/80">
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-red-500/70" />
                          <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                          <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                          <Server size={10} className="text-cyan-400" />
                          iknow-ai-product-suite
                        </span>
                      </div>

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
            title="Compare AI Product Capabilities"
            subtitle="A practical overview of which product supports each major business capability."
            light
          />

          <div className="overflow-x-auto rounded-2xl border border-dark-800 bg-dark-950/20 shadow-xl mt-12">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className="border-b border-dark-800 bg-dark-900/40">
                  <th className="p-5 font-display font-bold text-xs uppercase tracking-widest text-slate-400">Capabilities</th>
                  <th className="p-5 font-display font-bold text-xs uppercase tracking-widest text-cyan-400">Customer Care</th>
                  <th className="p-5 font-display font-bold text-xs uppercase tracking-widest text-brand-400">Marketing</th>
                  <th className="p-5 font-display font-bold text-xs uppercase tracking-widest text-emerald-400">Business Intel</th>
                  <th className="p-5 font-display font-bold text-xs uppercase tracking-widest text-violet-400">Knowledge AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-800/60">
                {comparisonMatrix.map((row) => (
                  <tr key={row.feature} className="hover:bg-dark-900/25 transition-colors">
                    <td className="p-5 text-sm font-semibold text-slate-300">{row.feature}</td>
                    <td className="p-5 text-slate-400">
                      {row.care ? <Check size={18} className="text-cyan-400" /> : <span className="text-slate-600">-</span>}
                    </td>
                    <td className="p-5 text-slate-400">
                      {row.marketing ? <Check size={18} className="text-brand-400" /> : <span className="text-slate-600">-</span>}
                    </td>
                    <td className="p-5 text-slate-400">
                      {row.intelligence ? <Check size={18} className="text-emerald-400" /> : <span className="text-slate-600">-</span>}
                    </td>
                    <td className="p-5 text-slate-400">
                      {row.knowledge ? <Check size={18} className="text-violet-400" /> : <span className="text-slate-600">-</span>}
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
            Ready to deploy an iKnow AI product?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a product demo to map your customer care, marketing, forecasting, or knowledge management workflows to the right iKnow AI platform.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg" className="ping-ring px-8">
              Book an AI Product Demo
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
