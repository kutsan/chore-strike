import { ReactElement, useEffect } from 'react'

import './Modal.css'

export const Modal = ({
  children,
  onRequestClose
}: {
  children: ReactElement
  onRequestClose: () => void
}): ReactElement => {
  useEffect(() => {
    document.body.classList.add('modal-open')

    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [])

  return (
    <div className="modal-overlay" onClick={onRequestClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <button onClick={onRequestClose} className="modal__close" type="button">
          x
        </button>

        <div className="modal__children">{children}</div>
      </div>
    </div>
  )
}
