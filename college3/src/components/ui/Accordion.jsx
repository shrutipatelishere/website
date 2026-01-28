import { useState, createContext, useContext, useId } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionContext = createContext(null);
const AccordionItemContext = createContext(null);

export function Accordion({
  type = 'single',
  defaultValue,
  value: controlledValue,
  onValueChange,
  children,
  className = '',
  collapsible = true,
}) {
  const [uncontrolledValue, setUncontrolledValue] = useState(
    type === 'single' ? defaultValue : defaultValue || []
  );

  const value = controlledValue !== undefined ? controlledValue : uncontrolledValue;

  const toggle = (itemValue) => {
    let newValue;

    if (type === 'single') {
      if (collapsible && value === itemValue) {
        newValue = undefined;
      } else {
        newValue = itemValue;
      }
    } else {
      const currentValues = Array.isArray(value) ? value : [];
      if (currentValues.includes(itemValue)) {
        newValue = currentValues.filter((v) => v !== itemValue);
      } else {
        newValue = [...currentValues, itemValue];
      }
    }

    if (controlledValue === undefined) {
      setUncontrolledValue(newValue);
    }
    onValueChange?.(newValue);
  };

  const isExpanded = (itemValue) => {
    if (type === 'single') {
      return value === itemValue;
    }
    return Array.isArray(value) && value.includes(itemValue);
  };

  return (
    <AccordionContext.Provider value={{ toggle, isExpanded, type }}>
      <div className={`divide-y divide-neutral-200 dark:divide-neutral-700 ${className}`}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ value, children, className = '' }) {
  const id = useId();

  return (
    <AccordionItemContext.Provider value={{ value, id }}>
      <div className={className}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({ children, className = '' }) {
  const accordionContext = useContext(AccordionContext);
  const itemContext = useContext(AccordionItemContext);

  if (!accordionContext || !itemContext) {
    throw new Error('AccordionTrigger must be used within Accordion and AccordionItem');
  }

  const { toggle, isExpanded } = accordionContext;
  const { value, id } = itemContext;
  const expanded = isExpanded(value);

  return (
    <button
      id={`${id}-trigger`}
      aria-expanded={expanded}
      aria-controls={`${id}-content`}
      onClick={() => toggle(value)}
      className={`
        flex items-center justify-between w-full py-3 sm:py-4 text-left
        font-medium text-foreground dark:text-foreground-dark
        hover:text-primary-600 dark:hover:text-primary-400
        transition-colors duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
        ${className}
      `}
    >
      <span className="pr-3 sm:pr-4">{children}</span>
      <ChevronDown
        className={`
          w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-neutral-500
          transition-transform duration-300
          ${expanded ? 'rotate-180' : ''}
        `}
      />
    </button>
  );
}

export function AccordionContent({ children, className = '' }) {
  const accordionContext = useContext(AccordionContext);
  const itemContext = useContext(AccordionItemContext);

  if (!accordionContext || !itemContext) {
    throw new Error('AccordionContent must be used within Accordion and AccordionItem');
  }

  const { isExpanded } = accordionContext;
  const { value, id } = itemContext;
  const expanded = isExpanded(value);

  return (
    <div
      id={`${id}-content`}
      role="region"
      aria-labelledby={`${id}-trigger`}
      hidden={!expanded}
      className={`
        overflow-hidden transition-all duration-300
        ${expanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
      `}
    >
      <div className={`pb-3 sm:pb-4 text-neutral-600 dark:text-neutral-400 ${className}`}>
        {children}
      </div>
    </div>
  );
}

export default Accordion;
