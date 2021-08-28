import { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'

import { useAppSelector } from '@/hooks/store'
import { selectTasks } from '@/store/task'

import { Button } from '@/components/Button/Button'

export const IncomingTasks = (): ReactElement => {
  const history = useHistory()
  const tasks = useAppSelector(selectTasks)

  return (
    <div>
      <section>
        <h1>Tasks</h1>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              #{task.id} - {task.name}
            </li>
          ))}
        </ul>

        <Button type="button" onClick={() => history.replace(`/task/new`)}>
          Create Task
        </Button>
      </section>
    </div>
  )
}
