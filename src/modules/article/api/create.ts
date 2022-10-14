import apis from '#api'
import { IBaseApiResponse } from 'lib/@types'
import { IArticle } from '../control/types'
import { ICreateArticle } from './types'

const tagType = 'articles'
const endpoints = apis.injectEndpoints({
	endpoints: (builder) => ({
		createArticle: builder.mutation<IBaseApiResponse<IArticle | null>, ICreateArticle>({
			query: (article) => ({ url: 'articles', method: 'POST', body: article }),
			invalidatesTags: [tagType],
		}),
	}),
	overrideExisting: true,
})

export const { useCreateArticleMutation } = endpoints
