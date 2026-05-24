import { cn } from '../../lib/utils';

/**
 * Marquee — Infinite scrolling strip for logos, partners, or featured text.
 */
export default function Marquee({
  children,
  reverse = false,
  pauseOnHover = true,
  className,
}) {
  return (
    <div className={cn('overflow-hidden flex w-full select-none', className)}>
      <div
        className={cn(
          reverse ? 'marquee-track-rev' : 'marquee-track',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {/* Render twice for seamless continuous loop */}
        <div className="flex shrink-0 items-center justify-around gap-16 min-w-full">
          {children}
        </div>
        <div className="flex shrink-0 items-center justify-around gap-16 min-w-full" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
