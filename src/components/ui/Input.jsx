import { cn } from '../../lib/utils';

/**
 * Styled form Input and Textarea components.
 * Use `as="textarea"` for multiline input.
 */
export default function Input({
  label,
  id,
  as = 'input',
  className,
  ...props
}) {
  const Component = as;

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-text"
        >
          {label}
        </label>
      )}
      <Component
        id={id}
        className={cn(
          'w-full rounded-lg border border-border bg-surface px-4 py-3',
          'text-text placeholder:text-text-muted',
          'transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400',
          'hover:border-primary-200',
          as === 'textarea' && 'min-h-[120px] resize-y',
          className
        )}
        {...props}
      />
    </div>
  );
}
