import { useState } from 'react';
import { cn } from '../../lib/utils';

/**
 * Premium Input — floating label, focus glow ring, error state.
 * Use `as="textarea"` for multiline.
 */
export default function Input({
  label,
  id,
  as = 'input',
  className,
  error,
  dark = false,
  ...props
}) {
  const [focused, setFocused] = useState(false);
  const Component = as;

  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={id}
          className={cn(
            'block text-sm font-medium transition-colors duration-200',
            focused ? (dark ? 'text-orange-400' : 'text-brand-600') : (dark ? 'text-slate-400' : 'text-text-muted')
          )}
        >
          {label}
        </label>
      )}
      <Component
        id={id}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={cn(
          'w-full rounded-xl border px-4 py-3 text-sm font-medium',
          'transition-all duration-300 outline-none',
          as === 'textarea' && 'min-h-[130px] resize-y leading-relaxed',
          // Light mode
          !dark && [
            'bg-surface-50 border-border text-text placeholder:text-text-subtle',
            'focus:border-brand-400 focus:ring-3 focus:ring-brand-400/15 focus:bg-white',
            error && 'border-red-400 focus:border-red-400 focus:ring-red-400/15',
            'hover:border-brand-300',
          ],
          // Dark mode
          dark && [
            'bg-dark-700/60 border-dark-600/80 text-white placeholder:text-slate-500',
            'focus:border-orange-500/60 focus:ring-3 focus:ring-orange-500/10 focus:bg-dark-700',
            error && 'border-red-500/60',
            'hover:border-dark-500',
          ],
          className
        )}
        {...props}
      />
      {error && (
        <p className={cn('text-xs font-medium', dark ? 'text-red-400' : 'text-red-500')}>
          {error}
        </p>
      )}
    </div>
  );
}
