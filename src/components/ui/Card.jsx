import { cn } from '../../lib/utils';

/**
 * Premium Card — supports light, dark glass, glow border variants.
 * Use `reveal` prop to enable scroll reveal (add .reveal class).
 */
export default function Card({
  children,
  className,
  glow = false,
  dark = false,
  glass = false,
  hover = true,
  padding = true,
  ...props
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border transition-all duration-500',
        // Base variants
        !dark && !glass && 'bg-surface border-border text-text',
        dark && !glass && 'bg-dark-800 border-dark-700/60 text-white',
        glass && dark && 'glass-dark text-white',
        glass && !dark && 'glass-light text-text',
        // Padding
        padding && 'p-6',
        // Hover effects
        hover && !glow && 'hover:shadow-xl hover:-translate-y-1',
        hover && dark && !glow && 'hover:border-dark-600 hover:shadow-dark-900/50',
        // Glow variant
        glow && dark && 'glow-border-orange hover:-translate-y-1',
        glow && !dark && 'glow-border hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
