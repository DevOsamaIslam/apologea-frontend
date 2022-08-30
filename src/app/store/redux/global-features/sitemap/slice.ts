import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { $MenuItem } from 'lib/@types/layout'

const sitemapSlice = createSlice({
	name: 'sitemap',
	initialState: [] as $MenuItem[],
	reducers: {
		setState: (_, action: PayloadAction<$MenuItem[]>) => {
			return action.payload
		},
	},
})

export const { setState } = sitemapSlice.actions

export default sitemapSlice
