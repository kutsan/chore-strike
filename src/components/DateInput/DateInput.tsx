import { ChangeEventHandler, ReactElement } from 'react'

export const DateInput = ({
  value,
  onChange,
  placeholder
}: {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  placeholder: string
}): ReactElement => (
  <input
    type="date"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
)
