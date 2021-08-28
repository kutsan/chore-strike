import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import { RoomType } from '@/store/room'

export const RoomItem = ({
  room: { id, name }
}: {
  room: RoomType
}): ReactElement => {
  return (
    <div>
      <Link to={`/room/${id}`}>
        #{id} - {name}
      </Link>
    </div>
  )
}
