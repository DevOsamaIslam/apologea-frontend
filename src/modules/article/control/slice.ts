import { IArticle } from './types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const articlesSlice = createSlice({
	name: 'articles',
	initialState: [] as IArticle[],
	reducers: {
		setState: (state: any, action: PayloadAction<IArticle[]>) => {
			return [...state, ...action.payload]
		},
	},
})

export const { setState } = articlesSlice.actions

export default articlesSlice
