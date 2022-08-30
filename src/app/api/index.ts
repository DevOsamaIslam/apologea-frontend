import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import tagTypes from 'lib/constants/tagTypes'

const apis = createApi({
	reducerPath: 'main-api',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.BASE_URL,
		prepareHeaders: (headers) => {
			const { accessToken } = localStorage.get('user')
			headers.set('authorization', `Bearer ${accessToken}`)
			return headers
		},
	}),
	tagTypes,
	endpoints: () => ({}),
})

export default apis
