import apis from '#api'
import { IBaseApiResponse } from 'lib/@types'
import { IArticle } from '../control/types'

const tagType = 'articles'
const endpoints = apis.injectEndpoints({
	endpoints: (builder) => ({
		deleteArticle: builder.mutation<IBaseApiResponse<IArticle | null>, string>({
			query: (id) => ({ url: 'articles', method: 'DELETE', body: { id } }),
			invalidatesTags: [tagType],
		}),
	}),
	overrideExisting: true,
})

export const { useDeleteArticleMutation } = endpoints
