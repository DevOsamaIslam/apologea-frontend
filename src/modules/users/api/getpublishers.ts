import apis from '#api'
import { reduxStoreKeys } from '@constants'

const endpoints = apis.injectEndpoints({
	endpoints: (builder) => ({
		getPublishers: builder.query({
			query: () => `publishers`,
			providesTags: [reduxStoreKeys.users],
		}),
		getOnePublisher: builder.query({
			query: () => `publishers`,
			providesTags: [reduxStoreKeys.users],
		}),
	}),
	overrideExisting: true,
})

export const { useGetOnePublisherQuery, useGetPublishersQuery, useLazyGetOnePublisherQuery, useLazyGetPublishersQuery } = endpoints
