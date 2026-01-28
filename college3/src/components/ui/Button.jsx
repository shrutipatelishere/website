import { forwardRef } from 'react';

const variants = {
  primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500/30 shadow-sm',
  secondary: 'bg-navy-900 dark:bg-white text-white dark:text-navy-900 hover:bg-navy-800 dark:hover:bg-neutral-100 focus:ring-navy-500/30',
  outline: 'border-2 border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 focus:ring-primary-500/30',
  ghost: 'text-foreground dark:text-foreground-dark hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:ring-neutral-500/30',
  link: 'text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 underline-offset-4 hover:underline',
};

const sizes = {
  sm: 'px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm',
  md: 'px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base',
  lg: 'px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg',
  icon: 'p-2 sm:p-3',
};

export const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'left',
  as: Component = 'button',
  ...props
}, ref) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-1.5 sm:gap-2
    font-medium rounded-lg sm:rounded-xl
    transition-all duration-200 ease-smooth
    focus:outline-none focus:ring-4
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variantStyles = variants[variant] || variants.primary;
  const sizeStyles = sizes[size] || sizes.md;

  return (
    <Component
      ref={ref}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4 sm:h-5 sm:w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {Icon && iconPosition === 'left' && !loading && <Icon className="w-4 h-4 sm:w-5 sm:h-5" />}
      {children}
      {Icon && iconPosition === 'right' && !loading && <Icon className="w-4 h-4 sm:w-5 sm:h-5" />}
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;
