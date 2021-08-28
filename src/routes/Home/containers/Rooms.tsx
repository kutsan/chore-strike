import { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'

import { useAppSelector } from '@/hooks/store'
import { selectRooms } from '@/store/room'
import { RoomItem } from '@/components/RoomItem/RoomItem'
import { Button } from '@/components/Button/Button'

export const Rooms = (): ReactElement => {
  const history = useHistory()
  const rooms = useAppSelector(selectRooms)

  return (
    <div>
      <section>
        <h1>Rooms</h1>

        {rooms.map((room) => (
          <RoomItem key={room.id} room={room} />
        ))}

        <Button type="button" onClick={() => history.replace(`/new-room`)}>
          Create Room
        </Button>
      </section>
    </div>
  )
}
