import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/store'

export type DueUnitType = 'day' | 'week' | 'month' | 'year'

interface DueType {
  value: number | null
  unit: DueUnitType
}

export interface DueOptionType {
  value: DueUnitType
  label: string
}

export const dueUnitOptions: DueOptionType[] = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'year', label: 'Year' }
]

export interface NewTaskType {
  name: string
  committedAt: string | null
  due: DueType
}

export interface TaskType extends NewTaskType {
  id: number
}

interface TaskStore {
  tasks: TaskType[]
}

const initialState: TaskStore = {
  tasks: []
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<NewTaskType>) {
      state.tasks.push({
        id: Math.max(0, Math.max(...state.tasks.map(({ id }) => id))) + 1,
        ...action.payload
      })
    },

    removeTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },

    updateTask(state, action: PayloadAction<TaskType>) {
      state.tasks = state.tasks.map((task) =>
        task.id !== action.payload.id ? task : { ...action.payload }
      )
    }
  }
})

export const { addTask, removeTask, updateTask } = taskSlice.actions
export const taskReducer = taskSlice.reducer

export const selectTasks = (state: RootState): TaskType[] => state.task.tasks
