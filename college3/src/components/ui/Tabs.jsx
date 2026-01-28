import { useState, createContext, useContext, useId } from 'react';

const TabsContext = createContext(null);

export function Tabs({
  defaultValue,
  value: controlledValue,
  onValueChange,
  children,
  className = '',
}) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const id = useId();

  const value = controlledValue !== undefined ? controlledValue : uncontrolledValue;
  const setValue = (newValue) => {
    if (controlledValue === undefined) {
      setUncontrolledValue(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ value, setValue, id }}>
      <div className={className}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className = '' }) {
  return (
    <div
      role="tablist"
      className={`
        inline-flex flex-wrap items-center gap-0.5 sm:gap-1 p-0.5 sm:p-1
        bg-neutral-100 dark:bg-neutral-800
        rounded-lg sm:rounded-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({ value, children, className = '', disabled = false }) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsTrigger must be used within Tabs');

  const { value: selectedValue, setValue, id } = context;
  const isSelected = selectedValue === value;

  return (
    <button
      role="tab"
      id={`${id}-tab-${value}`}
      aria-selected={isSelected}
      aria-controls={`${id}-panel-${value}`}
      tabIndex={isSelected ? 0 : -1}
      disabled={disabled}
      onClick={() => setValue(value)}
      className={`
        px-2.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-md sm:rounded-lg
        transition-all duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
        ${isSelected
          ? 'bg-white dark:bg-neutral-700 text-foreground dark:text-foreground-dark shadow-sm'
          : 'text-neutral-600 dark:text-neutral-400 hover:text-foreground dark:hover:text-foreground-dark'
        }
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, className = '' }) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsContent must be used within Tabs');

  const { value: selectedValue, id } = context;
  const isSelected = selectedValue === value;

  if (!isSelected) return null;

  return (
    <div
      role="tabpanel"
      id={`${id}-panel-${value}`}
      aria-labelledby={`${id}-tab-${value}`}
      tabIndex={0}
      className={`mt-4 sm:mt-6 focus:outline-none animate-fade-in ${className}`}
    >
      {children}
    </div>
  );
}

export default Tabs;
