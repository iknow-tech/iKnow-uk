import { cn } from '../../lib/utils';

/**
 * Consistent section heading with optional subtitle.
 * Supports centered (default) and left alignment.
 * Use `light` prop for dark-background sections.
 */
export default function SectionHeading({
  title,
  subtitle,
  label,
  align = 'center',
  light = false,
  className,
}) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      {label && (
        <span
          className={cn(
            'inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase',
            light
              ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20'
              : 'bg-primary-50 text-primary-600 border border-primary-100'
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight',
          light ? 'text-white' : 'text-text'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg md:text-xl max-w-2xl leading-relaxed',
            align === 'center' && 'mx-auto',
            light ? 'text-slate-400' : 'text-text-muted'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
