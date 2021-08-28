import { ChangeEvent, ReactElement } from 'react'

export interface OptionType<T extends string> {
  value: T
  label: string
}

export const Select = <T extends string>({
  value,
  onChange,
  options,
  placeholder
}: {
  value: T
  onChange: (newValue: T, event: ChangeEvent<HTMLSelectElement>) => void
  options: Array<OptionType<T>>
  placeholder: string
}): ReactElement => (
  <select
    value={value}
    onChange={(event) => onChange(event.target.value as T, event)}
    placeholder={placeholder}
  >
    {options.map((option) => (
      <option value={option.value} key={option.value}>
        {option.label}
      </option>
    ))}
  </select>
)
