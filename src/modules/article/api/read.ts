import apis from '#api'
import { IArticle } from '../control/types'

const tagType = 'articles'
const endpoints = apis.injectEndpoints({
	endpoints: (builder) => ({
		getArticles: builder.query<IArticle, void>({
			query: () => `articles`,
			providesTags: [tagType],
		}),
		getOneArticle: builder.query<IArticle, string>({
			query: (id) => `articles/@${id}`,
			providesTags: [tagType],
		}),
		getTopArticles: builder.query<IArticle, undefined>({
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
