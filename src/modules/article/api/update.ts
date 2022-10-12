import apis from '#api'
import { IArticle } from '../control/types'
import { ICreateArticle } from './types'

const tagType = 'articles'
const endpoints = apis.injectEndpoints({
	endpoints: (builder) => ({
		updateArticle: builder.mutation<IArticle, ICreateArticle>({
			query: (patch) => ({ url: 'articles', method: 'PATCH', body: patch }),
			invalidatesTags: [tagType],
		}),
	}),
	overrideExisting: true,
})

export const { useUpdateArticleMutation } = endpoints
