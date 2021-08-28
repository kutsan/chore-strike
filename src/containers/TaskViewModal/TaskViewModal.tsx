import { ReactElement } from 'react'

import { Modal } from '@/components/Modal/Modal'

export const TaskViewModal = (): ReactElement => {
  return (
    <Modal
      onRequestClose={() => {
        console.log('on requesting close...')
      }}
    >
      <div>TaskViewModal</div>
    </Modal>
  )
}
