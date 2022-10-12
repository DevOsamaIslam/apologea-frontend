import apis from '#api'

const tagType = 'publishers'
const endpoints = apis.injectEndpoints({
	endpoints: (builder) => ({
		getPublishers: builder.query({
			query: () => `publishers`,
			providesTags: [tagType],
		}),
		getOnePublisher: builder.query({
			query: () => `publishers`,
			providesTags: [tagType],
		}),
	}),
	overrideExisting: true,
})

export const {
	useGetOnePublisherQuery,
	useGetPublishersQuery,
	useLazyGetOnePublisherQuery,
	useLazyGetPublishersQuery,
} = endpoints
