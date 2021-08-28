import { ReactElement, MouseEventHandler } from 'react'

export const Button = ({
  type = 'button',
  children,
  onClick
}: {
  type?: 'button' | 'submit' | 'reset'
  children: string
  onClick: MouseEventHandler<HTMLButtonElement>
}): ReactElement => (
  <button type={type} onClick={onClick}>
    {children}
  </button>
)
