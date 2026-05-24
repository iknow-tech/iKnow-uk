import { cn } from '../../lib/utils';

/**
 * Versatile Card component.
 * Use `glow` prop for AI-section glowing border effect.
 * Use `dark` prop for dark-themed cards.
 */
export default function Card({
  children,
  className,
  glow = false,
  dark = false,
  ...props
}) {
  return (
    <div
      className={cn(
        'rounded-xl border p-6 transition-all duration-300',
        dark
          ? 'bg-slate-850 border-slate-700/50 text-white'
          : 'bg-surface border-border text-text',
        glow && 'glow-border animate-pulse-glow hover:border-accent-cyan/50',
        !glow && 'hover:shadow-lg hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
