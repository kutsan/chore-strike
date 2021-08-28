import { ReactElement } from 'react'

import { Modal } from '@/components/Modal/Modal'

export const RoomAddEditModal = (): ReactElement => {
  return (
    <Modal
      onRequestClose={() => {
        console.log('on requesting close...')
      }}
    >
      <div>RoomAddEditModal</div>
    </Modal>
  )
}
