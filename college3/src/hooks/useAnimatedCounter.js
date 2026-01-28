import { useState, useEffect, useRef } from 'react';

export function useAnimatedCounter(endValue, options = {}) {
  const {
    duration = 2000,
    startValue = 0,
    easing = 'easeOutQuart',
    decimals = 0,
    shouldStart = true,
  } = options;

  const [count, setCount] = useState(startValue);
  const frameRef = useRef(null);
  const startTimeRef = useRef(null);

  const easingFunctions = {
    linear: (t) => t,
    easeOutQuad: (t) => t * (2 - t),
    easeOutCubic: (t) => (--t) * t * t + 1,
    easeOutQuart: (t) => 1 - (--t) * t * t * t,
    easeOutExpo: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  };

  useEffect(() => {
    if (!shouldStart) {
      setCount(startValue);
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(endValue);
      return;
    }

    const easeFn = easingFunctions[easing] || easingFunctions.easeOutQuart;
    const range = endValue - startValue;

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const easedProgress = easeFn(progress);
      const currentValue = startValue + range * easedProgress;

      setCount(Number(currentValue.toFixed(decimals)));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      startTimeRef.current = null;
    };
  }, [endValue, startValue, duration, easing, decimals, shouldStart]);

  return count;
}

export default useAnimatedCounter;
