import { ReactElement } from 'react'

import { IncomingTasks } from './containers/IncomingTasks'
import { Rooms } from './containers/Rooms'

export const Home = (): ReactElement => {
  return (
    <div>
      <IncomingTasks />
      <Rooms />
    </div>
  )
}
