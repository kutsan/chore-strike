import { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'

import { useAppSelector } from '@/hooks/store'
import { selectTasks } from '@/store/task'
import { TaskItem } from '@/components/TaskItem/TaskItem'
import { Button } from '@/components/Button/Button'

export const IncomingTasks = (): ReactElement => {
  const history = useHistory()
  const tasks = useAppSelector(selectTasks)

  return (
    <div>
      <section>
        <h1>Incoming Tasks</h1>

        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}

        <Button type="button" onClick={() => history.replace(`/new-task`)}>
          Create Task
        </Button>
      </section>
    </div>
  )
}
