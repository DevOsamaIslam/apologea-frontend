import apis from 'app/api'

const {} = apis.injectEndpoints({
	endpoints: (builder) => ({
		getPublishers: builder.query({
			query: () => `publishers`,
		}),
	}),
	overrideExisting: true,
})
