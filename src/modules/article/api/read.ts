import apis from '#api'
import { IBaseApiResponse } from 'lib/@types'
import { IArticle } from '../control/types'

const tagType = 'articles'
const endpoints = apis.injectEndpoints({
	endpoints: (builder) => ({
		getArticles: builder.query<IBaseApiResponse<IArticle[] | null>, void>({
			query: () => `articles`,
			providesTags: [tagType],
		}),
		getOneArticle: builder.query<IBaseApiResponse<IArticle | null>, string>({
			query: (id) => `articles/@${id}`,
			providesTags: [tagType],
		}),
		getTopArticles: builder.query<IBaseApiResponse<IArticle[] | null>, undefined>({
			query: () => `articles/top`,
			providesTags: [tagType],
		}),
	}),
	overrideExisting: true,
})

export const {
	useGetArticlesQuery,
	useGetOneArticleQuery,
	useLazyGetArticlesQuery,
	useLazyGetOneArticleQuery,
} = endpoints
