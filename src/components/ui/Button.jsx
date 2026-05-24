import { cn } from '../../lib/utils';

/**
 * Reusable Button component with multiple variants.
 * Variants: primary (gradient), secondary (outline), ghost, accent (cyan glow)
 */
const variants = {
  primary:
    'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:from-primary-400 hover:to-primary-500',
  secondary:
    'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
  ghost:
    'text-text-muted hover:text-text hover:bg-slate-100',
  accent:
    'bg-gradient-to-r from-accent-cyan to-accent-glow text-white shadow-lg shadow-accent-cyan/25 hover:shadow-accent-cyan/40',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-semibold',
        'transition-all duration-300 ease-out cursor-pointer',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
