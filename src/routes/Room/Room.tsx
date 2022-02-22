import { ReactElement } from 'react'
import { Redirect, useParams } from 'react-router-dom'

import { useAppSelector } from '@/hooks/store'
import { selectRooms } from '@/store/room'

export const Room = (): ReactElement => {
  const { roomId } = useParams<{ roomId: string }>()
  const rooms = useAppSelector(selectRooms)

  const room = rooms.find((room) => room.id === Number(roomId))

  if (room === undefined) {
    return <Redirect to="/" />
  }
  return (
    <div>
      <div>Room {room.name}</div>
    </div>
  )
}
