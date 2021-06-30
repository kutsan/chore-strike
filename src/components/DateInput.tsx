import { ChangeEventHandler, ReactElement } from 'react'

export const DateInput = ({
  value,
  onChange
}: {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}): ReactElement => <input type="date" value={value} onChange={onChange} />
