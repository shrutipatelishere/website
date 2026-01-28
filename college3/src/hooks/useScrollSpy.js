import { useState, useEffect, useCallback } from 'react';

export function useScrollSpy(sectionIds, options = {}) {
  const {
    offset = 100,
    throttleMs = 100,
  } = options;

  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  const throttle = useCallback((func, limit) => {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }

      setActiveSection(sectionIds[0] || '');
    }, throttleMs);

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset, throttleMs, throttle]);

  return activeSection;
}

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;

      setScrollPosition(currentScrollY);
      setIsScrolled(currentScrollY > 50);
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollPosition();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollPosition, scrollDirection, isScrolled };
}

export default useScrollSpy;
