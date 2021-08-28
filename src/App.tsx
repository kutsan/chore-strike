import { ReactElement } from 'react'
import { Switch, Route } from 'react-router-dom'

import { TaskAddEditModal } from '@/containers/TaskAddEditModal/TaskAddEditModal'
import { TaskViewModal } from '@/containers/TaskViewModal/TaskViewModal'
import { RoomAddEditModal } from '@/containers/RoomAddEditModal/RoomAddEditModal'
import { Home } from '@/routes/Home/Home'
import { Room } from '@/routes/Room/Room'
import { Account } from '@/routes/Account/Account'
import logo from '@/assets/logo.svg'

import './App.css'

export const App = (): ReactElement => {
  return (
    <>
      <header>
        <img src={logo} alt="Logo" />
        <h1>Chore Strike</h1>
      </header>

      <Switch>
        <Route path="/room/:roomId">
          <Room />
        </Route>

        <Route exact path="/account">
          <Account />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Switch>
        <Route
          exact
          path={[
            '/task/new',
            '/task/:taskId/edit',
            '/room/:roomId/task/new',
            '/room/:roomId/task/:taskId/edit'
          ]}
        >
          <TaskAddEditModal />
        </Route>

        <Route exact path={['/task/:taskId', '/room/:roomId/task/:taskId']}>
          <TaskViewModal />
        </Route>

        <Route exact path={['/room/new', '/room/:roomId/edit']}>
          <RoomAddEditModal />
        </Route>
      </Switch>
    </>
  )
}
