import { ReactElement, useState } from 'react'
import * as dayjs from 'dayjs'

import { TextInput } from '@/components/TextInput'
import { Button } from '@/components/Button'
import { addTask, NewTaskType, TaskType } from '@/store/task'

interface CurrentStateType {
  currentState: 'GOOD' | 'NOT_YET' | 'DUE' | null
}

export const App = (): ReactElement => {
  const [newTask, setNewTask] = useState<NewTaskType & CurrentStateType>({
    name: '',
    committedAt: null,
    due: {
      value: null,
      unit: null
    },
    currentState: null
  })
  const [tasks, setTasks] = useState<TaskType[]>([])

  const handleCreateTask = (): void => {
    setTasks((prev) =>
      addTask(prev, {
        name: newTask.name,
        committedAt: dayjs().toISOString(),
        due: {
          ...newTask.due
        }
      })
    )
  }

  return (
    <>
      <header>
        <h1>Choree Strike</h1>
      </header>
      <main>
        <TextInput
          value={newTask?.name ?? ''}
          onChange={(event) =>
            setNewTask((prev) => ({ ...prev, name: event.target.value }))
          }
        />

        <Button type="button" onClick={handleCreateTask}>
          Create Task
        </Button>

        <section>
          <h1>Tasks</h1>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                #{task.id} - {task.name}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer>2021</footer>
    </>
  )
}
