import { ChangeEventHandler, ReactElement } from 'react'

export const TextInput = ({
  value,
  onChange
}: {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}): ReactElement => <input type="text" value={value} onChange={onChange} />
