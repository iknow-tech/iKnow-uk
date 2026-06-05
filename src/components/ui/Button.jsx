import { cn } from '../../lib/utils';

/**
 * Premium Button — restrained corporate interactions with clear hover states.
 */
const variants = {
  primary:
    'bg-brand-500 text-white border border-brand-500 hover:bg-brand-400 hover:border-brand-400 transition-all duration-300',
  secondary:
    'bg-transparent text-white border border-white/30 hover:bg-white hover:text-brand-900 hover:border-white transition-all duration-300',
  ghost:
    'text-text-muted hover:text-text hover:bg-surface-100 bg-transparent transition-all duration-300',
  accent:
    'bg-orange-400 text-white border border-orange-500 hover:bg-orange-600 hover:border-orange-600 transition-all duration-300',
  outline:
    'bg-transparent border border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white transition-all duration-300',
  dark:
    'bg-dark-700 border border-dark-600 text-white hover:bg-dark-600 hover:border-dark-500 transition-all duration-300',
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
