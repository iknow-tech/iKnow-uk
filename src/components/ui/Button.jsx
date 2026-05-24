import { cn } from '../../lib/utils';

/**
 * Premium Button — 4 variants, 3 sizes.
 * Primary has shimmer + magnetic feel.
 * Accent has cyan glow pulse.
 */
const variants = {
  primary:
    'relative overflow-hidden bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:from-brand-400 hover:to-brand-500 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700',
  secondary:
    'border border-brand-500/50 bg-brand-500/8 text-brand-300 hover:bg-brand-500/20 hover:border-brand-400 hover:text-white backdrop-blur-sm',
  ghost:
    'text-text-muted hover:text-text hover:bg-surface-100 bg-transparent',
  accent:
    'relative overflow-hidden bg-gradient-to-r from-cyan-500 to-brand-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:from-cyan-400 hover:to-brand-400 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700',
  outline:
    'border border-border text-text hover:border-brand-400 hover:text-brand-600 bg-transparent',
  dark:
    'bg-dark-700 border border-dark-600 text-white hover:bg-dark-600 hover:border-dark-500',
};

const sizes = {
  xs: 'px-3 py-1.5 text-xs rounded-md gap-1.5',
  sm: 'px-4 py-2 text-sm rounded-lg gap-2',
  md: 'px-6 py-3 text-base rounded-xl gap-2',
  lg: 'px-8 py-4 text-lg rounded-xl gap-2.5',
  xl: 'px-10 py-5 text-xl rounded-2xl gap-3',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  loading = false,
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-semibold font-display',
        'transition-all duration-300 ease-out cursor-pointer select-none',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        'active:scale-[0.97]',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : null}
      {children}
    </button>
  );
}
