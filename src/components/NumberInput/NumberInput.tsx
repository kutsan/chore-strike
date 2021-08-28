import { ChangeEventHandler, ReactElement } from 'react'

export const NumberInput = ({
  value,
  onChange,
  placeholder
}: {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  placeholder: string
}): ReactElement => (
  <input
    type="number"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
)
