import { Target, Eye, Globe, Users, Award, TrendingUp } from 'lucide-react';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';

/**
 * About Page — Corporate history, vision, global footprint.
 */

const milestones = [
  { year: '2015', title: 'Founded in London', description: 'iKnow Technology was established with a vision to deliver cutting-edge IT solutions to enterprises across the UK.' },
  { year: '2017', title: 'First Enterprise Client', description: 'Secured our first Fortune 500 engagement, delivering bespoke cloud migration and software architecture.' },
  { year: '2019', title: 'AI Division Launched', description: 'Expanded into artificial intelligence and machine learning, building predictive models for the finance sector.' },
  { year: '2021', title: 'Global Expansion', description: 'Opened satellite offices and partnerships across Europe, MENA, and Asia-Pacific markets.' },
  { year: '2023', title: '200+ Enterprise Clients', description: 'Surpassed 200 active enterprise accounts, with solutions deployed in 30+ countries worldwide.' },
  { year: '2025', title: 'Next-Gen AI Platform', description: 'Launched our proprietary AI Decision Intelligence platform, serving real-time inference at enterprise scale.' },
];

const values = [
  { icon: Target, title: 'Mission', description: 'To empower organisations with intelligent technology that drives measurable business outcomes and sustainable growth.' },
  { icon: Eye, title: 'Vision', description: 'To be the most trusted technology partner for enterprises navigating digital transformation — from London to the world.' },
  { icon: Award, title: 'Values', description: 'Excellence, integrity, and innovation underpin every engagement. We build partnerships, not just products.' },
];

const stats = [
  { value: '200+', label: 'Enterprise Clients' },
  { value: '30+', label: 'Countries Served' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '99.9%', label: 'Client Retention' },
];

export default function About() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-slate-950 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-primary-600/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 mb-8">
            <Globe size={14} className="text-primary-400" />
            London, United Kingdom
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Shaping the Future of <span className="gradient-text">Enterprise Tech</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Since 2015, iKnow Technology has been at the forefront of IT innovation — delivering transformative solutions to organisations worldwide.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="text-center p-8">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-5">
                  <Icon size={26} className="text-primary-600" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="font-display font-bold text-3xl md:text-4xl mb-1">{value}</div>
                <div className="text-sm text-primary-100 uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-surface-alt">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Journey"
            title="A Decade of Innovation"
            subtitle="From a London startup to a global technology partner."
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-12">
              {milestones.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 md:gap-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary-500 border-4 border-surface-alt -translate-x-1.5 mt-2 z-10" />

                  {/* Spacer for desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div className="ml-14 md:ml-0 md:w-1/2">
                    <Card className="p-6">
                      <span className="text-xs font-semibold text-primary-500 uppercase tracking-wider">{item.year}</span>
                      <h3 className="font-display font-semibold text-lg mt-1 mb-2">{item.title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our People"
            title="A Culture of Excellence"
            subtitle="Our diverse team of engineers, designers, and strategists drives innovation across every project."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Collaborative Teams', description: 'Cross-functional squads that bring together engineering, design, and domain expertise.' },
              { icon: TrendingUp, title: 'Continuous Growth', description: 'Investment in learning, certifications, and cutting-edge technology exploration.' },
              { icon: Globe, title: 'Global Perspective', description: 'A multicultural team serving clients across 30+ countries from our London headquarters.' },
            ].map(({ icon: Icon, title, description }) => (
              <Card key={title} className="p-8">
                <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-primary-600" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
