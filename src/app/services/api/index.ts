import { getUser } from '@helpers'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import tagTypes from 'lib/constants/tagTypes'

const apis = createApi({
	reducerPath: 'main-api',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.BASE_URL,
		prepareHeaders: (headers) => {
			const user = getUser()
			if (user?.accessToken) headers.set('authorization', `Bearer ${user.accessToken}`)
			return headers
		},
	}),
	tagTypes,
	endpoints: () => ({}),
})

export default apis
