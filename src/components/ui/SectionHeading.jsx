import { cn } from '../../lib/utils';
import { useInView } from '../../hooks/useInView';

/**
 * Premium SectionHeading — scroll-reveal, gradient accent line, 3 alignment modes.
 */
export default function SectionHeading({
  title,
  subtitle,
  label,
  align = 'center',
  light = false,
  className,
}) {
  const [ref, visible] = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        'mb-14 md:mb-20',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        align === 'right' && 'text-right',
        'transition-all duration-700',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className
      )}
    >
      {label && (
        <span
          className={cn(
            'inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.15em] uppercase',
            light
              ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
              : 'bg-brand-500/10 text-brand-600 border border-brand-500/20'
          )}
        >
          <span className={cn('w-1.5 h-1.5 rounded-full', light ? 'bg-orange-400' : 'bg-brand-500')} />
          {label}
        </span>
      )}

      <h2
        className={cn(
          'font-display font-bold leading-[1.1] tracking-tight',
          'text-3xl sm:text-4xl md:text-5xl',
          light ? 'text-white' : 'text-text'
        )}
      >
        {title}
      </h2>

      {/* Gradient accent line */}
      <div
        className={cn(
          'h-0.5 mt-5 rounded-full',
          'bg-gradient-to-r from-brand-500 via-orange-500 to-brand-500',
          align === 'center' ? 'mx-auto w-16' : align === 'right' ? 'ml-auto w-16' : 'w-16',
          'opacity-70'
        )}
      />

      {subtitle && (
        <p
          className={cn(
            'mt-5 text-lg md:text-xl leading-relaxed',
            align === 'center' && 'mx-auto max-w-2xl',
            light ? 'text-slate-400' : 'text-text-muted'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
