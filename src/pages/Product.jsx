import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Code2, Database, Lock, Layers, Workflow } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';

/**
 * Product Page — Showcase of technological products.
 */

const products = [
  {
    icon: Layers,
    name: 'iKnow Platform',
    tagline: 'Unified Enterprise Intelligence',
    description: 'A modular platform that consolidates data, analytics, and AI models into a single pane of glass. Built for scalability, designed for simplicity.',
    features: ['Real-time dashboards', 'Custom AI model deployment', 'Role-based access control', 'API-first architecture'],
    color: 'from-primary-500 to-primary-700',
    iconBg: 'bg-primary-50 border-primary-100',
    iconColor: 'text-primary-600',
  },
  {
    icon: Workflow,
    name: 'FlowEngine',
    tagline: 'Workflow Automation Suite',
    description: 'Design, deploy, and monitor intelligent workflows that connect your systems, people, and data. No-code builder with pro-code extensibility.',
    features: ['Visual workflow builder', '300+ integrations', 'Event-driven triggers', 'Audit trail & compliance'],
    color: 'from-accent-cyan to-primary-500',
    iconBg: 'bg-cyan-50 border-cyan-100',
    iconColor: 'text-accent-cyan',
  },
  {
    icon: Lock,
    name: 'SecureVault',
    tagline: 'Enterprise Data Security',
    description: 'End-to-end encryption, threat detection, and compliance management for organisations handling sensitive data at scale.',
    features: ['Zero-trust architecture', 'GDPR & SOC 2 compliant', 'Real-time threat detection', 'Automated incident response'],
    color: 'from-slate-600 to-slate-800',
    iconBg: 'bg-slate-100 border-slate-200',
    iconColor: 'text-slate-700',
  },
];

const techStack = [
  { icon: Cloud, label: 'Cloud-Native' },
  { icon: Code2, label: 'API-First' },
  { icon: Database, label: 'Multi-Database' },
  { icon: Lock, label: 'SOC 2 Compliant' },
];

export default function Product() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-950 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] rounded-full bg-accent-cyan/8 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Products Built for <span className="gradient-text">Tomorrow</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Enterprise-grade technology products designed to scale with your ambition. Modular, secure, and relentlessly performant.
          </p>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Products"
            title="Technology That Transforms"
            subtitle="Each product is purpose-built to solve real enterprise challenges."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map(({ icon: Icon, name, tagline, description, features, iconBg, iconColor }) => (
              <Card key={name} className="flex flex-col p-8">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 ${iconBg}`}>
                  <Icon size={26} className={iconColor} />
                </div>

                {/* Name & Tagline */}
                <h3 className="font-display font-bold text-xl mb-1">{name}</h3>
                <p className="text-primary-500 text-sm font-medium mb-4">{tagline}</p>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed mb-6">{description}</p>

                {/* Features */}
                <ul className="space-y-2 mt-auto mb-6">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to="/contact" className="mt-auto">
                  <Button variant="secondary" size="sm" className="w-full">
                    Request Demo
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Strip */}
      <section className="py-16 bg-surface-alt border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {techStack.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-text-muted">
                <Icon size={20} className="text-primary-500" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Ready to See Our Products in Action?
          </h2>
          <p className="text-text-muted text-lg mb-8">
            Book a personalised demo with our solutions team and discover how iKnow products can transform your operations.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Schedule a Demo
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
