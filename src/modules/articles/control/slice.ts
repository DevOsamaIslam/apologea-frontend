import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TArticle } from './types'

const initialState = {
  data: null as TArticle | null,
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    mount: (state, action: PayloadAction<TArticle>) => {
      state.data = action.payload
    },
  },
})

export const articleActions = articleSlice.actions
