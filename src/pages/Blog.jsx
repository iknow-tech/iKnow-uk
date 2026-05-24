import { useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import Badge from '../components/ui/Badge';

/**
 * Blog Page — Premium publication portal.
 * Features reactive category filtering, glassmorphic layout,
 * and high-end hover actions.
 */

const featuredArticle = {
  id: 'ai-enterprise-2025',
  title: 'The State of AI in Enterprise: 2025 and Beyond',
  excerpt: 'How leading organisations are deploying AI at scale, the challenges they face, and the strategies driving real ROI from artificial intelligence investments.',
  category: 'AI & Machine Learning',
  date: '2025-05-15',
  readTime: '8 min read',
  author: 'iKnow Research',
};

const articles = [
  {
    id: 'cloud-migration-guide',
    title: 'The Definitive Guide to Enterprise Cloud Migration',
    excerpt: 'A step-by-step framework for migrating legacy systems to the cloud without disrupting operations.',
    category: 'Cloud',
    date: '2025-05-08',
    readTime: '6 min read',
  },
  {
    id: 'cybersecurity-trends',
    title: 'Top 10 Cybersecurity Trends for 2025',
    excerpt: 'From zero-trust to AI-powered threat detection — the security landscape is evolving rapidly.',
    category: 'Security',
    date: '2025-04-28',
    readTime: '5 min read',
  },
  {
    id: 'digital-transformation',
    title: 'Why Most Digital Transformations Fail (and How to Avoid It)',
    excerpt: 'Lessons from 200+ enterprise engagements on what separates successful transformations from costly failures.',
    category: 'Strategy',
    date: '2025-04-20',
    readTime: '7 min read',
  },
  {
    id: 'low-code-enterprise',
    title: 'Low-Code in the Enterprise: Hype vs Reality',
    excerpt: 'When low-code platforms deliver value and when they become technical debt. A practical assessment.',
    category: 'Development',
    date: '2025-04-12',
    readTime: '5 min read',
  },
  {
    id: 'data-governance',
    title: 'Building a Data Governance Framework That Actually Works',
    excerpt: 'Practical strategies for data quality, lineage, and compliance in modern data-driven organisations.',
    category: 'Data',
    date: '2025-04-05',
    readTime: '6 min read',
  },
  {
    id: 'devops-maturity',
    title: 'Measuring DevOps Maturity: Beyond Deployment Frequency',
    excerpt: 'A holistic model for assessing DevOps capability across culture, automation, measurement, and sharing.',
    category: 'DevOps',
    date: '2025-03-28',
    readTime: '4 min read',
  },
];

const categories = ['All', 'AI & Machine Learning', 'Cloud', 'Security', 'Strategy', 'Development', 'Data', 'DevOps'];

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter grid articles based on selection
  const filteredArticles = activeCategory === 'All'
    ? articles
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="bg-midnight min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden mesh-bg">
        <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
        <div className="absolute inset-0 grid-overlay-fine opacity-20 pointer-events-none" />
        <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
            Insights & <span className="gradient-text">Thought Leadership</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Tech analysis, architectural breakdowns, and security briefings curated by our core engineering squads.
          </p>
        </div>
      </section>

      {/* Category Filter bar */}
      <section className="bg-dark-900 border-b border-dark-800/60 sticky top-20 z-30 backdrop-blur-md bg-dark-900/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4.5 overflow-x-auto no-scrollbar">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? 'bg-cyan-500 border-cyan-400 text-midnight shadow-lg shadow-cyan-500/20'
                      : 'bg-dark-800/40 border-dark-800 text-slate-400 hover:text-white hover:bg-dark-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Article — Shown when activeCategory is "All" or matches category */}
      {(activeCategory === 'All' || activeCategory === featuredArticle.category) && (
        <section className="py-24 bg-dark-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <article className="group relative rounded-2xl glass-dark border border-dark-800/80 overflow-hidden shadow-2xl hover:border-dark-700 transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Visual Image Block */}
                <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center p-12 border-b lg:border-b-0 lg:border-r border-dark-800 relative">
                  <div className="absolute inset-0 grid-overlay opacity-30" />
                  <div className="absolute inset-0 noise-overlay opacity-20" />
                  <div className="absolute w-40 h-40 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />

                  <div className="text-center relative z-10">
                    <span className="text-7xl lg:text-9xl font-display font-black bg-gradient-to-br from-cyan-400 via-brand-500 to-violet-500 bg-clip-text text-transparent opacity-80">
                      AI
                    </span>
                    <p className="text-cyan-400 text-xs font-black tracking-widest uppercase mt-3">Featured Publication</p>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-8 md:p-12 flex flex-col justify-center relative z-10">
                  <div className="flex items-center gap-3.5 mb-4">
                    <Badge variant="cyan" dot>{featuredArticle.category}</Badge>
                    <span className="text-slate-400 text-xs font-semibold flex items-center gap-1.5">
                      <Clock size={13} />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-dark-800/60 mt-auto">
                    <time dateTime={featuredArticle.date} className="text-xs font-bold text-slate-500">
                      {formatDate(featuredArticle.date)}
                    </time>
                    <span className="text-cyan-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      Read Article <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="py-24 bg-dark-900 border-t border-dark-800/60 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Latest Articles"
            title="Recent Publications"
            light
          />

          {filteredArticles.length === 0 ? (
            <div className="text-center py-20 bg-dark-950/30 rounded-2xl border border-dark-800/50">
              <p className="text-slate-500 text-sm font-semibold">No publications found under this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article key={article.id} className="h-full">
                  <Card dark glow className="flex flex-col h-full group cursor-pointer relative overflow-hidden">
                    {/* Hover highlight overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Meta */}
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="brand">{article.category}</Badge>
                        <span className="text-slate-500 text-xs font-semibold flex items-center gap-1.5">
                          <Clock size={12} />
                          {article.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-display font-bold text-lg text-white mb-3 group-hover:text-cyan-400 transition-colors leading-snug">
                        {article.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-slate-400 text-xs leading-relaxed mb-8 flex-1">
                        {article.excerpt}
                      </p>

                      {/* Card Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-dark-800/60 mt-auto">
                        <time dateTime={article.date} className="text-[10px] font-bold text-slate-500">
                          {formatDate(article.date)}
                        </time>
                        <span className="text-cyan-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </Card>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
