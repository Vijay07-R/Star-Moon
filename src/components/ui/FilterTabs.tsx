import type { FilterOption } from '../../types'

interface FilterTabsProps<T extends string> {
  options: FilterOption<T>[]
  active: T | 'all'
  onChange: (value: T | 'all') => void
  label: string
}

export default function FilterTabs<T extends string>({ options, active, onChange, label }: FilterTabsProps<T>) {
  return (
    <div role="tablist" aria-label={label} className="mb-10 flex flex-wrap justify-center gap-2 md:gap-3">
      {options.map((option) => {
        const isActive = option.value === active
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.value)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors md:px-5 ${
              isActive
                ? 'border-burgundy bg-burgundy text-white'
                : 'border-espresso/15 bg-white text-espresso/80 hover:border-beige hover:text-burgundy'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
