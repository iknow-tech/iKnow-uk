import { cn } from '../../lib/utils';

/**
 * Badge — glowing pill component for categories, labels, status indicators.
 */
const variants = {
  brand: 'bg-brand-500/10 text-brand-400 border-brand-500/20',
  orange:'bg-orange-500/10 text-orange-400 border-orange-500/20',
  purple:'bg-brand-500/10 text-brand-400 border-brand-500/20',
  green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  red:   'bg-red-500/10 text-red-400 border-red-500/20',
  slate: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
  white: 'bg-white/10 text-white border-white/15',
};

export default function Badge({
  children,
  variant = 'brand',
  dot = false,
  className,
  ...props
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full',
        'text-xs font-bold tracking-wide uppercase border',
        'transition-all duration-200',
        variants[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span className={cn(
          'w-1.5 h-1.5 rounded-full flex-shrink-0',
          variant === 'brand' ? 'bg-brand-400' :
          variant === 'orange'  ? 'bg-orange-400' :
          variant === 'purple'? 'bg-brand-400' :
          variant === 'green' ? 'bg-emerald-400' :
          variant === 'amber' ? 'bg-amber-400' :
          variant === 'red'   ? 'bg-red-400' :
          variant === 'white' ? 'bg-white' : 'bg-slate-400'
        )} />
      )}
      {children}
    </span>
  );
}
