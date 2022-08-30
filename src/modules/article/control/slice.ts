import { IArticle } from './types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getTagType } from 'lib/helpers/arrays'

const articlesSlice = createSlice({
	name: getTagType('articles'),
	initialState: [] as IArticle[],
	reducers: {
		setState: (state: any, action: PayloadAction<IArticle[]>) => {
			return [...state, ...action.payload]
		},
	},
})

export const { setState } = articlesSlice.actions

export default articlesSlice
