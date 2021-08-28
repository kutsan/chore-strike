import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/store'

export interface NewRoomType {
  name: string
}

export interface RoomType extends NewRoomType {
  id: number
}

interface RoomStore {
  rooms: RoomType[]
}

const initialState: RoomStore = {
  rooms: []
}

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    addRoom(state, action: PayloadAction<NewRoomType>) {
      state.rooms.push({
        id: Math.max(0, Math.max(...state.rooms.map(({ id }) => id))) + 1,
        ...action.payload
      })
    },

    removeRoom(state, action: PayloadAction<number>) {
      state.rooms = state.rooms.filter(({ id }) => id !== action.payload)
    },

    updateRoom(state, action: PayloadAction<RoomType>) {
      state.rooms = state.rooms.map((room) =>
        room.id !== action.payload.id ? room : { ...action.payload }
      )
    }
  }
})

export const { addRoom, removeRoom, updateRoom } = roomSlice.actions
export const roomReducer = roomSlice.reducer

export const selectRooms = (state: RootState): RoomType[] => state.room.rooms
