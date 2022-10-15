import apis from '#api'
import { reduxStoreKeys } from '@constants'
import { IBaseApiResponse } from 'lib/@types'
import { IArticle } from '../control/types'
import { IUpdateArticle } from './types'

const endpoints = apis.injectEndpoints({
	endpoints: (builder) => ({
		updateArticle: builder.mutation<IBaseApiResponse<IArticle | null>, IUpdateArticle>({
			query: (patch) => ({ url: 'articles', method: 'PATCH', body: patch }),
			invalidatesTags: [reduxStoreKeys.apologies],
		}),
	}),
	overrideExisting: true,
})

export const { useUpdateArticleMutation } = endpoints
