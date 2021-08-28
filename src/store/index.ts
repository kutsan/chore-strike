import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { taskReducer } from './task'
import { roomReducer } from './room'

const reducers = combineReducers({
  task: taskReducer,
  room: roomReducer
})

const persistedReducer = persistReducer(
  { key: 'root', storage, version: 1 },
  reducers
)

export const store = configureStore({
  reducer: persistedReducer,

  // NOTE: Ignore all the action types redux-resist dispatches to prevent non-serializable value error
  // https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
