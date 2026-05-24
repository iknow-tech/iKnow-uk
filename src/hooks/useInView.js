import { useEffect, useRef, useState } from 'react';

/**
 * useInView — Intersection Observer hook for scroll-triggered reveals.
 * Returns [ref, isVisible]. Once visible, stays visible (one-shot by default).
 *
 * @param {Object} options
 * @param {number} options.threshold - 0–1 visibility threshold (default 0.15)
 * @param {string} options.rootMargin - IntersectionObserver rootMargin
 * @param {boolean} options.once - If true, stops observing after first trigger (default true)
 */
export function useInView({
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px',
  once = true,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}
