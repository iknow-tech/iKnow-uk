import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Sparkles, Settings, Bot, BarChart3, Cloud, Shield } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';

/**
 * Solutions Page — Brief punchy overview with external CTA to iknow.solutions.
 */

const solutions = [
  {
    icon: Settings,
    title: 'IT Consultancy',
    description: 'Strategic technology advisory for enterprises navigating digital transformation. Architecture reviews, cloud strategies, and tech roadmaps.',
    highlights: ['Technology Audits', 'Cloud Strategy', 'Digital Roadmapping'],
  },
  {
    icon: Bot,
    title: 'Software Development',
    description: 'Full-stack bespoke software, from concept to deployment. Agile teams that deliver production-grade applications on time.',
    highlights: ['Web & Mobile Apps', 'API Development', 'System Integration'],
  },
  {
    icon: Sparkles,
    title: 'AI & Automation',
    description: 'From intelligent document processing to predictive analytics — we embed AI directly into your business processes.',
    highlights: ['Machine Learning', 'Process Automation', 'NLP & Computer Vision'],
  },
];

const additionalSolutions = [
  { icon: Cloud, title: 'Cloud Infrastructure', description: 'Multi-cloud deployment, migration, and managed services.' },
  { icon: Shield, title: 'Cybersecurity', description: 'Threat detection, compliance, and zero-trust architecture.' },
  { icon: BarChart3, title: 'Data Analytics', description: 'Business intelligence, data warehousing, and real-time dashboards.' },
];

export default function Solutions() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-950 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary-500/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Solutions That <span className="gradient-text">Drive Results</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From strategy to execution — we deliver end-to-end technology solutions that transform how enterprises operate.
          </p>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Core Solutions"
            title="What We Deliver"
            subtitle="Three pillars of capability, each backed by a decade of enterprise experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {solutions.map(({ icon: Icon, title, description, highlights }) => (
              <Card key={title} className="flex flex-col p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-6">
                  <Icon size={26} className="text-primary-600" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6">{description}</p>
                <ul className="space-y-2 mt-auto">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Additional Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalSolutions.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-4 p-6 rounded-xl bg-surface-alt border border-border hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">{title}</h4>
                  <p className="text-text-muted text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External CTA */}
      <section className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary-500/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-sm text-accent-cyan mb-8">
            <Sparkles size={14} />
            Full Solutions Portal
          </span>

          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Explore Our Complete Solutions Portfolio
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Discover the full range of iKnow solutions, detailed case studies, and industry-specific offerings on our dedicated solutions portal.
          </p>

          {/* ═══ Primary External CTA Button ═══ */}
          <a
            href="https://iknow.solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-display font-bold text-lg text-white bg-gradient-to-r from-primary-500 via-primary-600 to-accent-glow shadow-2xl shadow-primary-500/30 hover:shadow-primary-500/50 hover:scale-[1.03] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Visit iKnow Solutions
            <ExternalLink size={20} />
          </a>

          <p className="mt-6 text-sm text-slate-500">
            Opens in a new tab — iknow.solutions
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-display font-semibold text-2xl mb-4">
            Have a specific challenge in mind?
          </h3>
          <p className="text-text-muted mb-8">
            Our solutions architects are ready to scope your project.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Talk to an Expert
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
