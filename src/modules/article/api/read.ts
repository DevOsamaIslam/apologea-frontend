import apis from '#api'
import { reduxStoreKeys } from '@constants'
import { IBaseApiResponse } from 'lib/@types'
import { IArticle } from '../control/types'

const endpoints = apis.injectEndpoints({
	endpoints: (builder) => ({
		getArticles: builder.query<IBaseApiResponse<IArticle[] | null>, void>({
			query: () => `articles`,
			providesTags: [reduxStoreKeys.apologies],
		}),
		getOneArticle: builder.query<IBaseApiResponse<IArticle | null>, string>({
			query: (id) => `articles/@${id}`,
			providesTags: [reduxStoreKeys.apologies],
		}),
		getTopArticles: builder.query<IBaseApiResponse<IArticle[] | null>, void>({
			query: () => `articles/top`,
			providesTags: [reduxStoreKeys.apologies],
		}),
	}),
	overrideExisting: true,
})

export const {
	useGetArticlesQuery,
	useGetOneArticleQuery,
	useLazyGetArticlesQuery,
	useLazyGetOneArticleQuery,
	useGetTopArticlesQuery,
	useLazyGetTopArticlesQuery,
} = endpoints
