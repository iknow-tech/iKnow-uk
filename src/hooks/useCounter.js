import { useEffect, useRef, useState } from 'react';

/**
 * useCounter — Animates a number from 0 to `target` when triggered.
 *
 * @param {number} target - Final number value
 * @param {number} duration - Animation duration in ms (default 2000)
 * @param {boolean} trigger - Start animation when true
 * @returns {number} current display value
 */
export function useCounter(target, duration = 2000, trigger = true) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;

    const numericTarget = parseFloat(target.toString().replace(/[^0-9.]/g, ''));

    const animate = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out-expo
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * numericTarget));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(numericTarget);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      startRef.current = null;
    };
  }, [target, duration, trigger]);

  return count;
}
