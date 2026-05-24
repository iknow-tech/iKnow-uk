import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';

/**
 * Blog Page — SEO-optimized with semantic HTML.
 * Features a hero article + grid of recent articles.
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
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-950 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-primary-500/8 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Insights & <span className="gradient-text">Thought Leadership</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Expert perspectives on technology, AI, and digital transformation from the iKnow team.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  cat === 'All'
                    ? 'bg-primary-500 text-white'
                    : 'text-text-muted hover:text-text hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <article className="group relative rounded-2xl border border-border overflow-hidden bg-surface-alt hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Placeholder */}
              <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center p-12">
                <div className="text-center">
                  <span className="text-6xl md:text-8xl font-display font-bold text-white/20">AI</span>
                  <p className="text-primary-200 text-sm mt-2 font-medium">Featured Article</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold">
                    <Tag size={12} />
                    {featuredArticle.category}
                  </span>
                  <span className="text-text-muted text-sm flex items-center gap-1.5">
                    <Clock size={14} />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="font-display font-bold text-2xl md:text-3xl mb-4 group-hover:text-primary-600 transition-colors">
                  {featuredArticle.title}
                </h2>

                <p className="text-text-muted leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <time dateTime={featuredArticle.date} className="text-sm text-text-muted">
                    {formatDate(featuredArticle.date)}
                  </time>
                  <span className="text-primary-500 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-16 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Latest Articles"
            title="Recent from the Blog"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id}>
                <Card className="flex flex-col h-full group cursor-pointer">
                  {/* Category & Read Time */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold">
                      {article.category}
                    </span>
                    <span className="text-text-muted text-xs flex items-center gap-1">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-display font-semibold text-lg mb-3 group-hover:text-primary-600 transition-colors leading-snug">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1">
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <time dateTime={article.date} className="text-xs text-text-muted">
                      {formatDate(article.date)}
                    </time>
                    <span className="text-primary-500 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
