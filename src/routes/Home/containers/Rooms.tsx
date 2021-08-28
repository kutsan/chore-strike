import { ReactElement } from 'react'

import { Button } from '@/components/Button/Button'

export const Rooms = (): ReactElement => {
  return (
    <section>
      <h1>Rooms</h1>

      <Button type="button" onClick={() => {}}>
        Create Room
      </Button>
    </section>
  )
}
