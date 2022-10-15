import apis from '#api'
import { reduxStoreKeys } from '@constants'
import { IBaseApiResponse } from 'lib/@types'
import { IArticle } from '../control/types'

const endpoints = apis.injectEndpoints({
	endpoints: (builder) => ({
		deleteArticle: builder.mutation<IBaseApiResponse<IArticle | null>, string>({
			query: (id) => ({ url: 'articles', method: 'DELETE', body: { id } }),
			invalidatesTags: [reduxStoreKeys.apologies],
		}),
	}),
	overrideExisting: true,
})

export const { useDeleteArticleMutation } = endpoints
