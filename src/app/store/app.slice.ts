import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    redirectPath: '',
  },
  reducers: {
    redirect: (state, action: PayloadAction<string>) => {
      state.redirectPath = action.payload
    },
  },
})
