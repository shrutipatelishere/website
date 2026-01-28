import { forwardRef } from 'react';

export const Card = forwardRef(({
  children,
  className = '',
  hover = false,
  padding = 'md',
  ...props
}, ref) => {
  const paddingStyles = {
    none: '',
    sm: 'p-3 sm:p-4',
    md: 'p-4 sm:p-6',
    lg: 'p-5 sm:p-6 md:p-8',
  };

  return (
    <div
      ref={ref}
      className={`
        card
        ${hover ? 'card-hover' : ''}
        ${paddingStyles[padding]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '', as: Component = 'h3' }) {
  return (
    <Component className={`text-lg sm:text-xl font-semibold text-foreground dark:text-foreground-dark ${className}`}>
      {children}
    </Component>
  );
}

export function CardDescription({ children, className = '' }) {
  return (
    <p className={`mt-1 text-neutral-600 dark:text-neutral-400 ${className}`}>
      {children}
    </p>
  );
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={`mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700 ${className}`}>
      {children}
    </div>
  );
}

export function CardImage({ src, alt, className = '' }) {
  return (
    <div className={`-mx-6 -mt-6 mb-6 overflow-hidden rounded-t-2xl ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-48 object-cover"
      />
    </div>
  );
}

export default Card;
