import apis from 'app/api'
import { getTagType } from 'lib/helpers/arrays'
import { IArticle } from '../control/types'
import { ICreateArticle } from './types'

const tagType = getTagType('articles')
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
		createArticle: builder.mutation<IArticle, ICreateArticle>({
			query: (article) => ({ url: 'articles', method: 'POST', body: article }),
			invalidatesTags: [tagType],
		}),
		updateArticle: builder.mutation<IArticle, ICreateArticle>({
			query: (patch) => ({ url: 'articles', method: 'PATCH', body: patch }),
			invalidatesTags: [tagType],
		}),
		deleteArticle: builder.mutation<IArticle, string>({
			query: (id) => ({ url: 'articles', method: 'DELETE', body: { id } }),
			invalidatesTags: [tagType],
		}),
	}),
	overrideExisting: true,
})

export const { useCreateArticleMutation } = endpoints
