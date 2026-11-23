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
                ? 'border-emerald-deep bg-emerald-deep text-white'
                : 'border-forest/15 bg-white text-forest/80 hover:border-gold hover:text-emerald-deep'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
