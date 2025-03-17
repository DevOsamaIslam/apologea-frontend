import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../api'
import userSlice from '@modules/users/control/slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { appSlice } from './app.slice'
import { articleSlice } from '@modules/articles/control/slice'

export const store = configureStore({
  reducer: {
    [appSlice.reducerPath]: appSlice.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
    [articleSlice.reducerPath]: articleSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
