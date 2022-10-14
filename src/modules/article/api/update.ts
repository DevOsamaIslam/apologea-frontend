import apis from '#api'
import { IBaseApiResponse } from 'lib/@types'
import { IArticle } from '../control/types'
import { IUpdateArticle } from './types'

const tagType = 'articles'
const endpoints = apis.injectEndpoints({
	endpoints: (builder) => ({
		updateArticle: builder.mutation<IBaseApiResponse<IArticle | null>, IUpdateArticle>({
			query: (patch) => ({ url: 'articles', method: 'PATCH', body: patch }),
			invalidatesTags: [tagType],
		}),
	}),
	overrideExisting: true,
})

export const { useUpdateArticleMutation } = endpoints
