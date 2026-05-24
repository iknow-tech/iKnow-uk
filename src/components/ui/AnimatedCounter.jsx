import { useCounter } from '../../hooks/useCounter';
import { useInView } from '../../hooks/useInView';
import { cn } from '../../lib/utils';

/**
 * AnimatedCounter — Counts up to `value` when the component enters the viewport.
 */
export default function AnimatedCounter({
  value,
  duration = 2000,
  suffix = '',
  prefix = '',
  className,
}) {
  const [ref, isVisible] = useInView({ threshold: 0.1, once: true });
  const count = useCounter(value, duration, isVisible);

  return (
    <span ref={ref} className={cn('font-display font-bold tabular-nums', className)}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
