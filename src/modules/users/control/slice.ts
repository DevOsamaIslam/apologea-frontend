import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TUser, IUserState } from './types'
import { removeItem } from '@lib/helpers/localStorage'

// Load user from localStorage if available
const initialState: IUserState = {
  user: null,
  isAuthenticated: false,
  status: 'loading',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<TUser>) => {
      state.status = 'success'
      state.user = action.payload
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.status = 'idle'
      state.user = null
      removeItem('token')
      state.isAuthenticated = false
    },
    updateProfile: (state, action: PayloadAction<Partial<TUser>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload }
      }
    },
    changeState: (state, action: PayloadAction<IUserState['status']>) => {
      state.status = action.payload
    },
  },
})

export const userActions = userSlice.actions

export default userSlice
