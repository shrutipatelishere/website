import { useState, useEffect, useRef, useCallback } from 'react';

export function useInView(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  } = options;

  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (triggerOnce && hasTriggered) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsInView(true);
      setHasTriggered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);

        if (inView && triggerOnce) {
          setHasTriggered(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return [ref, isInView];
}

export function useRevealOnScroll(options = {}) {
  const [ref, isInView] = useInView(options);

  const getRevealClass = useCallback((delay = 0) => {
    const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';
    return `reveal ${isInView ? 'active' : ''} ${delayClass}`.trim();
  }, [isInView]);

  return [ref, isInView, getRevealClass];
}

export default useInView;
