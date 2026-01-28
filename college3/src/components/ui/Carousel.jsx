import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Carousel({
  children,
  autoplay = true,
  autoplayInterval = 5000,
  showArrows = true,
  showDots = true,
  className = '',
}) {
  const items = Array.isArray(children) ? children : [children];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  const minSwipeDistance = 50;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoplay || isPaused || items.length <= 1) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(goToNext, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, isPaused, goToNext, items.length]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  return (
    <div
      ref={carouselRef}
      className={`relative ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Carousel"
      aria-roledescription="carousel"
    >
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${items.length}`}
              aria-hidden={index !== currentIndex}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="
              absolute left-2 sm:left-4 top-1/2 -translate-y-1/2
              p-2 sm:p-3 rounded-full
              bg-white/90 dark:bg-neutral-800/90
              text-foreground dark:text-foreground-dark
              shadow-lg backdrop-blur-sm
              hover:bg-white dark:hover:bg-neutral-700
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-primary-500
              touch-target
            "
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={goToNext}
            className="
              absolute right-2 sm:right-4 top-1/2 -translate-y-1/2
              p-2 sm:p-3 rounded-full
              bg-white/90 dark:bg-neutral-800/90
              text-foreground dark:text-foreground-dark
              shadow-lg backdrop-blur-sm
              hover:bg-white dark:hover:bg-neutral-700
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-primary-500
              touch-target
            "
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </>
      )}

      {showDots && items.length > 1 && (
        <div
          className="flex justify-center gap-2 mt-4"
          role="tablist"
          aria-label="Carousel navigation"
        >
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                ${index === currentIndex
                  ? 'w-8 bg-primary-500'
                  : 'bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500'
                }
              `}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;
