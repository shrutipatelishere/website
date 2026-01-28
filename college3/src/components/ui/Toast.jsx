import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';

const icons = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
};

const styles = {
  success: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200',
  error: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200',
  warning: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200',
  info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200',
};

export function Toast({
  message,
  type = 'success',
  duration = 5000,
  onClose,
  isVisible,
}) {
  const [isShowing, setIsShowing] = useState(false);
  const Icon = icons[type];

  useEffect(() => {
    if (isVisible) {
      setIsShowing(true);
      if (duration > 0) {
        const timer = setTimeout(() => {
          setIsShowing(false);
          setTimeout(onClose, 300);
        }, duration);
        return () => clearTimeout(timer);
      }
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible && !isShowing) return null;

  return createPortal(
    <div
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center gap-3
        px-4 py-3 rounded-xl border shadow-lg
        transition-all duration-300
        ${styles[type]}
        ${isShowing ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
      `}
      role="alert"
      aria-live="polite"
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <span className="font-medium">{message}</span>
      <button
        onClick={() => {
          setIsShowing(false);
          setTimeout(onClose, 300);
        }}
        className="p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>,
    document.body
  );
}

export function useToast() {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success', duration = 5000) => {
    setToast({ message, type, duration });
  };

  const hideToast = () => {
    setToast(null);
  };

  const ToastComponent = toast ? (
    <Toast
      message={toast.message}
      type={toast.type}
      duration={toast.duration}
      isVisible={!!toast}
      onClose={hideToast}
    />
  ) : null;

  return { showToast, hideToast, ToastComponent };
}

export default Toast;
