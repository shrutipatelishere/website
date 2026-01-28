import { ArrowUp } from 'lucide-react';
import { useScrollPosition } from '../../hooks';

export function BackToTop() {
  const { scrollPosition } = useScrollPosition();
  const isVisible = scrollPosition > 500;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 left-6 z-40
        p-3 rounded-full
        bg-primary-500 text-white
        shadow-lg shadow-primary-500/25
        hover:bg-primary-600 hover:shadow-xl
        transition-all duration-300
        focus:outline-none focus:ring-4 focus:ring-primary-500/30
        ${isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-16 opacity-0 pointer-events-none'
        }
      `}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

export default BackToTop;
