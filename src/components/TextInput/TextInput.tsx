import { ChangeEventHandler, ReactElement } from 'react'

export const TextInput = ({
  value,
  onChange,
  placeholder
}: {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  placeholder: string
}): ReactElement => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
)
