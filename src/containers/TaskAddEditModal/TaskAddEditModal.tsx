import { ReactElement, useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as dayjs from 'dayjs'

import { useAppDispatch } from '@/hooks/store'
import { NewTaskType, dueUnitOptions, addTask } from '@/store/task'
import { Modal } from '@/components/Modal/Modal'
import { TextInput } from '@/components/TextInput/TextInput'
import { Button } from '@/components/Button/Button'
import { DateInput } from '@/components/DateInput/DateInput'
import { NumberInput } from '@/components/NumberInput/NumberInput'
import { Select } from '@/components/Select/Select'

interface CurrentStateType {
  currentState: 'GOOD' | 'NOT_YET' | 'DUE' | null
}

const defaultTask: NewTaskType & CurrentStateType = {
  name: '',
  committedAt: null,
  due: {
    value: null,
    unit: 'day'
  },
  currentState: null
}

export const TaskAddEditModal = (): ReactElement => {
  const dispatch = useAppDispatch()
  const history = useHistory()

  const [newTask, setNewTask] = useState(defaultTask)

  const handleCreateTask = (): void => {
    dispatch(
      addTask({
        name: newTask.name,
        committedAt: dayjs(newTask.committedAt).toISOString(),
        due: {
          ...newTask.due
        }
      })
    )
  }

  return (
    <Modal
      onRequestClose={() => {
        console.log('on requesting close...')
      }}
    >
      <>
        <div>TaskAddEditModal</div>

        <TextInput
          placeholder="Name"
          value={newTask?.name ?? ''}
          onChange={(event) =>
            setNewTask((prev) => ({ ...prev, name: event.target.value }))
          }
        />

        <NumberInput
          placeholder="0"
          value={newTask?.due.value !== null ? String(newTask.due.value) : ''}
          onChange={(event) =>
            setNewTask((prev) => ({
              ...prev,
              due: { ...prev.due, value: Number(event.target.value) }
            }))
          }
        />

        <Select
          placeholder="Due Unit"
          options={dueUnitOptions}
          value={newTask.due.unit ?? ''}
          onChange={(value) => {
            setNewTask((prev) => ({
              ...prev,
              due: { ...prev.due, unit: value }
            }))
          }}
        />

        <DateInput
          placeholder="Last Cleaned"
          value={newTask?.committedAt ?? ''}
          onChange={(event) =>
            setNewTask((prev) => ({
              ...prev,
              committedAt: event.target.value
            }))
          }
        />

        <Button
          type="button"
          onClick={() => {
            handleCreateTask()
            history.replace('/')
            setNewTask(defaultTask)
          }}
        >
          Create Task
        </Button>
      </>
    </Modal>
  )
}
