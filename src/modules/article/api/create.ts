import apis from '#api'
import { reduxStoreKeys } from '@constants'
import { IBaseApiResponse } from 'lib/@types'
import { IArticle } from '../control/types'
import { ICreateArticle } from './types'

const endpoints = apis.injectEndpoints({
	endpoints: (builder) => ({
		createArticle: builder.mutation<IBaseApiResponse<IArticle | null>, ICreateArticle>({
			query: (article) => ({ url: 'articles', method: 'POST', body: article }),
			invalidatesTags: [reduxStoreKeys.apologies],
		}),
	}),
	overrideExisting: true,
})

export const { useCreateArticleMutation } = endpoints
