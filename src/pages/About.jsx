import { Target, Eye, Globe, Users, Award, TrendingUp } from 'lucide-react';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';

/**
 * About Page — Corporate history, values, timeline, and team culture.
 * Redesigned with premium midnight theme and custom timeline glows.
 */

const milestones = [
  { year: 'June 2022', title: 'UK Operations Launched', description: 'iKnow Technology began operating in the UK with a focus on practical software delivery, IT consultancy, and reliable client support.' },
  { year: 'Q4 2022', title: 'First Delivery Frameworks', description: 'Built the first repeatable project workflows for infrastructure reviews, bespoke web platforms, and technical scoping sessions.' },
  { year: '2023', title: 'Software Practice Expanded', description: 'Grew the engineering capability around modular web applications, backend APIs, and maintainable enterprise integrations.' },
  { year: '2024', title: 'Cloud & Security Services', description: 'Extended delivery into cloud migration planning, cybersecurity reviews, access control design, and operational resilience.' },
  { year: '2025', title: 'AI Automation Offering', description: 'Introduced secure automation and AI-assisted process improvement for document workflows, forecasting, and business operations.' },
  { year: '2026', title: 'Staines Office Presence', description: 'Strengthened the UK footprint with Staines-upon-Thames office operations while continuing to support clients across London and beyond.' },
];

const values = [
  { icon: Target, title: 'Mission', description: 'To empower organisations with intelligent technology that drives measurable business outcomes and sustainable growth.' },
  { icon: Eye, title: 'Vision', description: 'To be the most trusted technology partner for enterprises navigating digital transformation — from London to the world.' },
  { icon: Award, title: 'Values', description: 'Excellence, integrity, and innovation underpin every engagement. We build partnerships, not just products.' },
];

export default function About() {
  return (
    <div className="bg-midnight min-h-screen text-white">
      {/* Hero Banner */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden mesh-bg">
        <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
        <div className="absolute inset-0 grid-overlay-fine opacity-20 pointer-events-none" />
        <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />

        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-brand-500/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <span className="text-xs font-bold tracking-[0.24em] text-orange-400 uppercase">
              London & Staines-upon-Thames, UK
            </span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight max-w-4xl mx-auto">
            Shaping the Future of <span className="gradient-text">Enterprise Technology</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Since June 2022, iKnow Technology has helped organisations design practical software systems, modernise infrastructure, and adopt secure AI-enabled workflows.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24 bg-dark-900 border-t border-dark-800/60 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <Card key={title} dark glow className="text-center p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 mx-auto rounded-2xl bg-dark-800 border border-dark-700/60 flex items-center justify-center mb-6 group-hover:border-orange-500/40 transition-colors duration-300">
                  <Icon size={24} className="text-orange-400" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-white">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-dark-900 relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Journey"
            title="Growth Since June 2022"
            subtitle="How our UK journey has progressed through software delivery, cloud consulting, cybersecurity, and AI-enabled automation."
            light
          />

          <div className="relative mt-16">
            {/* Elegant vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-brand-500 to-brand-500 md:-translate-x-0.5" />

            <div className="space-y-12">
              {milestones.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 md:gap-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Glowing timeline node */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-orange-400 border-4 border-dark-900 -translate-x-2 mt-2 z-10 shadow-lg shadow-orange-400/40 animate-pulse" />

                  {/* Desktop layout spacer */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Milestone Card */}
                  <div className="ml-14 md:ml-0 md:w-1/2">
                    <Card dark glow className="p-6 relative group overflow-hidden">
                      <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">{item.year}</span>
                      <h3 className="font-display font-bold text-lg mt-1 mb-2 text-white group-hover:text-orange-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-midnight border-t border-dark-800/60 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Culture"
            title="A Workplace Built on Standards"
            subtitle="We recruit elite technologists who thrive on building optimized solutions and clean engineering."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Collaborative Squads', description: 'Cross-functional engineering squads collaborating on infrastructure development and platform security.' },
              { icon: TrendingUp, title: 'Continuous Growth', description: 'Dedicated R&D cycles, enterprise certifications, and participation in major open-source systems.' },
              { icon: Globe, title: 'Global Outlook', description: 'A multicultural engineering team working with multinational enterprises across 30+ countries.' },
            ].map(({ icon: Icon, title, description }) => (
              <Card key={title} dark glow className="p-8 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="w-12 h-12 rounded-xl bg-dark-800 border border-dark-700/65 flex items-center justify-center mb-6 group-hover:border-orange-500/40 transition-colors">
                  <Icon size={20} className="text-orange-400" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-white group-hover:text-orange-400 transition-colors">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
