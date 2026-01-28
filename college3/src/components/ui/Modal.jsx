import { useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export function Modal({
  isOpen,
  onClose,
  children,
  title,
  description,
  size = 'md',
  className = '',
}) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  const sizes = {
    sm: 'max-w-[calc(100vw-2rem)] sm:max-w-md',
    md: 'max-w-[calc(100vw-2rem)] sm:max-w-lg',
    lg: 'max-w-[calc(100vw-2rem)] sm:max-w-xl md:max-w-2xl',
    xl: 'max-w-[calc(100vw-2rem)] sm:max-w-2xl md:max-w-4xl',
    full: 'max-w-[calc(100vw-2rem)] sm:max-w-[90vw]',
  };

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        contentRef.current?.focus();
      }, 10);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-describedby={description ? 'modal-description' : undefined}
    >
      <div
        ref={contentRef}
        tabIndex={-1}
        className={`
          relative w-full ${sizes[size]}
          bg-white dark:bg-neutral-900
          rounded-t-2xl sm:rounded-2xl shadow-elevated
          animate-scale-in
          max-h-[85vh] sm:max-h-[90vh] overflow-y-auto
          ${className}
        `}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between p-4 sm:p-6 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700 rounded-t-2xl">
          <div className="pr-8">
            {title && (
              <h2
                id="modal-title"
                className="text-lg sm:text-xl font-semibold text-foreground dark:text-foreground-dark"
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                id="modal-description"
                className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400"
              >
                {description}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="absolute right-3 top-3 sm:right-4 sm:top-4 p-2 rounded-lg text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors touch-target"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4 sm:p-6">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
