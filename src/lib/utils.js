import clsx from 'clsx';

/**
 * Merge class names conditionally.
 * Thin wrapper around clsx for Tailwind usage.
 */
export function cn(...inputs) {
  return clsx(inputs);
}
