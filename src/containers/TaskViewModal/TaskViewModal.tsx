import { ReactElement } from 'react'

import { Modal } from '@/components/Modal/Modal'
import { useHistory, useRouteMatch, useParams } from 'react-router-dom'

export const TaskViewModal = (): ReactElement => {
  const history = useHistory()
  const match = useRouteMatch()
  const { roomId } = useParams<{ roomId: string }>()

  return (
    <Modal
      onRequestClose={() => {
        switch (match.path) {
          case '/task/:taskId':
            history.replace('/')
            break
          case '/room/:roomId/task/:taskId':
            history.replace(`/room/${roomId}`)
            break
        }
      }}
    >
      <div>TaskViewModal</div>
    </Modal>
  )
}
