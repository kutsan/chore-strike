import { ReactElement, useState } from 'react'

import { Modal } from '@/components/Modal/Modal'
import { useHistory, useParams, useRouteMatch } from 'react-router-dom'

import { useAppDispatch } from '@/hooks/store'
import { NewRoomType, addRoom } from '@/store/room'
import { TextInput } from '@/components/TextInput/TextInput'
import { Button } from '@/components/Button/Button'

const defaultRoom: NewRoomType = {
  name: ''
}

export const RoomAddEditModal = (): ReactElement => {
  const dispatch = useAppDispatch()
  const { roomId } = useParams<{ roomId: string }>()
  const history = useHistory()
  const match = useRouteMatch()

  const [newRoom, setNewRoom] = useState(defaultRoom)

  const handleCreateRoom = (): void => {
    dispatch(addRoom(newRoom))
  }

  const closeModal = (): void => {
    switch (match.path) {
      case '/new-room':
        history.replace('/')
        break
      case '/room/:roomId/edit':
        history.replace(`/room/${roomId}`)
        break
    }
  }

  return (
    <Modal onRequestClose={closeModal}>
      <>
        <div>RoomAddEditModal</div>

        <TextInput
          placeholder="Name"
          value={newRoom?.name ?? ''}
          onChange={(event) =>
            setNewRoom((prev) => ({ ...prev, name: event.target.value }))
          }
        />

        <Button
          type="button"
          onClick={() => {
            handleCreateRoom()
            setNewRoom(defaultRoom)
            closeModal()
          }}
        >
          Create Room
        </Button>
      </>
    </Modal>
  )
}
