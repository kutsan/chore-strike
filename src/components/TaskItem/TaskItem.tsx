import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import { TaskType } from '@/store/task'

export const TaskItem = ({
  task: { id, name }
}: {
  task: TaskType
}): ReactElement => {
  return (
    <div>
      <Link replace to={`/task/${id}`}>
        #{id} - {name}
      </Link>
    </div>
  )
}
