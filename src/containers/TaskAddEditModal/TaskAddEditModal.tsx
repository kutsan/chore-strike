import { ReactElement, useState } from 'react'
import { useHistory, useRouteMatch, useParams } from 'react-router-dom'
import * as dayjs from 'dayjs'

import { selectRooms } from '@/store/room'
import { useAppDispatch, useAppSelector } from '@/hooks/store'
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
  committedAt: dayjs().toISOString(),
  due: {
    value: null,
    unit: 'day'
  },
  currentState: null,
  roomId: null
}

export const TaskAddEditModal = (): ReactElement => {
  const rooms = useAppSelector(selectRooms)
  const dispatch = useAppDispatch()
  const { roomId } = useParams<{ roomId: string }>()
  const history = useHistory()
  const match = useRouteMatch()

  const [newTask, setNewTask] = useState(defaultTask)

  const handleCreateTask = (): void => {
    dispatch(
      addTask({
        ...newTask,
        committedAt: dayjs(newTask.committedAt).toISOString()
      })
    )
  }

  const closeModal = (): void => {
    switch (match.path) {
      case '/new-task':
      case '/task/:taskId/edit':
        history.replace('/')
        break
      case '/room/:roomId/new-task':
      case '/room/:roomId/task/:taskId/edit':
        history.replace(`/room/${roomId}`)
        break
    }
  }

  return (
    <Modal onRequestClose={closeModal}>
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

        <Select
          placeholder="Room"
          options={rooms.map(({ id, name }) => ({
            value: String(id),
            label: name
          }))}
          value={String(newTask.roomId)}
          onChange={(value) => {
            setNewTask((prev) => ({
              ...prev,
              roomId: Number(value)
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
            setNewTask(defaultTask)
            closeModal()
          }}
        >
          Create Task
        </Button>
      </>
    </Modal>
  )
}
