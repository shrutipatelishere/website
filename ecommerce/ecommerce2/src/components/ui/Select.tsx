'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select option',
  label,
  error,
  disabled = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={cn('w-full', className)} ref={containerRef}>
      {label && (
        <label className="block text-sm font-medium text-navy-800 mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        <button
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'w-full h-11 px-4 text-left text-base',
            'bg-white border border-clinical-200 rounded-xl',
            'flex items-center justify-between',
            'transition-all duration-200 ease-out-expo',
            'hover:border-clinical-300',
            'focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500',
            'disabled:bg-clinical-50 disabled:cursor-not-allowed',
            error && 'border-error focus:ring-error/20 focus:border-error',
            !selectedOption && 'text-clinical-400'
          )}
        >
          <span>{selectedOption?.label || placeholder}</span>
          <ChevronDown
            className={cn(
              'w-5 h-5 text-clinical-400 transition-transform duration-200',
              isOpen && 'rotate-180'
            )}
          />
        </button>

        {isOpen && (
          <div
            className={cn(
              'absolute z-50 w-full mt-1',
              'bg-white border border-clinical-200 rounded-xl shadow-elevated',
              'py-1 max-h-60 overflow-y-auto',
              'animate-slide-down'
            )}
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={cn(
                  'w-full px-4 py-2.5 text-left text-sm',
                  'flex items-center justify-between',
                  'hover:bg-clinical-50',
                  'transition-colors duration-150',
                  option.value === value && 'text-teal-700 bg-teal-50'
                )}
              >
                <span>{option.label}</span>
                {option.value === value && (
                  <Check className="w-4 h-4 text-teal-600" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
      {error && <p className="mt-1.5 text-sm text-error">{error}</p>}
    </div>
  );
};

export { Select };
export type { SelectProps, SelectOption };
