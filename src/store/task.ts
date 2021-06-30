interface DueType {
  value: number | null
  unit: 'day' | 'week' | 'month' | 'year' | null
}

export interface NewTaskType {
  name: string
  committedAt: string | null
  due: DueType
}

export interface TaskType extends NewTaskType {
  id: number
}

export const addTask = (
  tasks: TaskType[],
  newTask: NewTaskType
): TaskType[] => {
  return [
    ...tasks,
    {
      id: Math.max(0, Math.max(...tasks.map(({ id }) => id))) + 1,
      ...newTask
    }
  ]
}

export const removeTask = (tasks: TaskType[], id: number): TaskType[] => {
  return tasks.filter((task) => task.id !== id)
}

export const updateTask = (
  tasks: TaskType[],
  id: number,
  newTask: NewTaskType
): TaskType[] => {
  return tasks.map((task) => (task.id !== id ? task : { ...task, ...newTask }))
}
