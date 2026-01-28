'use client';

import React, { useState } from 'react';
import { ChevronDown, X, SlidersHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { BottomSheet } from '@/components/ui/BottomSheet';

interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

interface FilterGroup {
  id: string;
  name: string;
  options: FilterOption[];
  type: 'checkbox' | 'radio' | 'range';
}

interface ProductFilterProps {
  filters: FilterGroup[];
  activeFilters: Record<string, string[]>;
  onFilterChange: (filterId: string, values: string[]) => void;
  onClearAll: () => void;
  sortOptions: FilterOption[];
  activeSort: string;
  onSortChange: (value: string) => void;
  resultCount: number;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  filters,
  activeFilters,
  onFilterChange,
  onClearAll,
  sortOptions,
  activeSort,
  onSortChange,
  resultCount,
}) => {
  const [expandedGroups, setExpandedGroups] = useState<string[]>(filters.map((f) => f.id));
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const toggleGroup = (id: string) => {
    setExpandedGroups((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  const handleCheckboxChange = (filterId: string, value: string, checked: boolean) => {
    const currentValues = activeFilters[filterId] || [];
    const newValues = checked
      ? [...currentValues, value]
      : currentValues.filter((v) => v !== value);
    onFilterChange(filterId, newValues);
  };

  const activeFilterCount = Object.values(activeFilters).flat().length;

  const FilterContent = () => (
    <div className="space-y-6">
      {filters.map((group) => (
        <div key={group.id} className="border-b border-clinical-100 pb-4 last:border-0">
          <button
            onClick={() => toggleGroup(group.id)}
            className="flex items-center justify-between w-full py-2 text-left"
          >
            <span className="font-medium text-navy-900">{group.name}</span>
            <ChevronDown
              className={cn(
                'w-5 h-5 text-clinical-400 transition-transform duration-200',
                expandedGroups.includes(group.id) && 'rotate-180'
              )}
            />
          </button>
          {expandedGroups.includes(group.id) && (
            <div className="mt-2 space-y-2 animate-slide-down">
              {group.options.map((option) => {
                const isChecked = (activeFilters[group.id] || []).includes(option.value);
                return (
                  <label
                    key={option.value}
                    className={cn(
                      'flex items-center gap-3 px-2 py-1.5 rounded-lg cursor-pointer',
                      'hover:bg-clinical-50 transition-colors',
                      isChecked && 'bg-teal-50'
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) =>
                        handleCheckboxChange(group.id, option.value, e.target.checked)
                      }
                      className={cn(
                        'w-4 h-4 rounded border-clinical-300 text-teal-600',
                        'focus:ring-teal-500 focus:ring-offset-0'
                      )}
                    />
                    <span className="flex-1 text-sm text-navy-800">{option.label}</span>
                    {option.count !== undefined && (
                      <span className="text-xs text-clinical-500">({option.count})</span>
                    )}
                  </label>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Desktop Filter Sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-24 bg-white rounded-2xl border border-clinical-100 shadow-soft p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-navy-900">Filters</h3>
            {activeFilterCount > 0 && (
              <button
                onClick={onClearAll}
                className="text-sm text-teal-700 hover:text-teal-800 font-medium"
              >
                Clear all
              </button>
            )}
          </div>
          <FilterContent />
        </div>
      </aside>

      {/* Mobile Filter Button */}
      <div className="lg:hidden sticky top-16 z-30 bg-clinical-50 border-b border-clinical-100 py-3 px-4 -mx-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm text-clinical-600">
            <span className="font-medium text-navy-900">{resultCount}</span> products
          </p>
          <div className="flex items-center gap-2">
            {/* Sort dropdown */}
            <select
              value={activeSort}
              onChange={(e) => onSortChange(e.target.value)}
              className="h-9 px-3 text-sm bg-white border border-clinical-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Filter button */}
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsMobileFilterOpen(true)}
              leftIcon={<SlidersHorizontal className="w-4 h-4" />}
            >
              Filters
              {activeFilterCount > 0 && (
                <span className="ml-1 w-5 h-5 flex items-center justify-center bg-teal-600 text-white text-xs rounded-full">
                  {activeFilterCount}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Active filters chips */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {Object.entries(activeFilters).map(([filterId, values]) =>
              values.map((value) => {
                const group = filters.find((f) => f.id === filterId);
                const option = group?.options.find((o) => o.value === value);
                return (
                  <button
                    key={`${filterId}-${value}`}
                    onClick={() =>
                      handleCheckboxChange(filterId, value, false)
                    }
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-sm bg-teal-100 text-teal-800 rounded-full hover:bg-teal-200 transition-colors"
                  >
                    {option?.label || value}
                    <X className="w-3.5 h-3.5" />
                  </button>
                );
              })
            )}
          </div>
        )}
      </div>

      {/* Mobile Filter Bottom Sheet */}
      <BottomSheet
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        title="Filters"
      >
        <FilterContent />
        <div className="flex gap-3 mt-6 pt-4 border-t border-clinical-100">
          <Button
            variant="outline"
            fullWidth
            onClick={() => {
              onClearAll();
              setIsMobileFilterOpen(false);
            }}
          >
            Clear All
          </Button>
          <Button fullWidth onClick={() => setIsMobileFilterOpen(false)}>
            Apply Filters
          </Button>
        </div>
      </BottomSheet>
    </>
  );
};

export { ProductFilter };
export type { FilterGroup, FilterOption };
