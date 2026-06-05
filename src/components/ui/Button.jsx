import { cn } from '../../lib/utils';

/**
 * Premium Button — restrained corporate interactions with clear hover states.
 */
const variants = {
  primary:
    'border border-brand-500/80 bg-brand-600 text-white shadow-sm shadow-black/10 hover:border-brand-400 hover:bg-brand-500',
  secondary:
    'border border-dark-700/80 bg-dark-900/55 text-slate-200 hover:border-brand-400/70 hover:bg-dark-800/80 hover:text-white',
  ghost:
    'text-text-muted hover:text-text hover:bg-surface-100 bg-transparent',
  accent:
    'border border-orange-500/80 bg-orange-500 text-white shadow-sm shadow-black/10 hover:border-orange-400 hover:bg-orange-400',
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
        'cursor-pointer select-none',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
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
