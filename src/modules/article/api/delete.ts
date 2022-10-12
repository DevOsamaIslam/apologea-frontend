import apis from '#api'
import { IArticle } from '../control/types'

const tagType = 'articles'
const endpoints = apis.injectEndpoints({
	endpoints: (builder) => ({
		deleteArticle: builder.mutation<IArticle, string>({
			query: (id) => ({ url: 'articles', method: 'DELETE', body: { id } }),
			invalidatesTags: [tagType],
		}),
	}),
	overrideExisting: true,
})

export const { useDeleteArticleMutation } = endpoints
