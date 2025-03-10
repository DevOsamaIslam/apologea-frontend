import { apiSlice } from '@app/api'
import { appSlice } from '@app/store/app.slice'
import { TAG_TYPES } from '@lib/constants/api'
import { IBaseResponse, IPaginatedResponse, TGetQueryParams } from '@lib/types'
import { TArticle, TCreateArticle } from './types'
import { snackbar } from '@shared/snack-bar/GlobalSnackbar'

export const {
  useGetArticlesQuery,
  useCreateArticleMutation,
  useGetArticleBySlugQuery,
} = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createArticle: builder.mutation<IBaseResponse<TArticle>, TCreateArticle>({
      invalidatesTags: [TAG_TYPES.articles],
      query: (articlePayload) => {
        return {
          url: 'articles/create',
          method: 'POST',
          body: articlePayload,
        }
      },
      onQueryStarted: (_, { queryFulfilled, dispatch }) => {
        queryFulfilled.then(() => {
          snackbar({
            severity: 'success',
            message: 'Article created successfully',
          })
          dispatch(appSlice.actions.redirect('/articles'))
        })
      },
    }),

    getArticles: builder.query<
      IBaseResponse<IPaginatedResponse<TArticle>>,
      TGetQueryParams
    >({
      providesTags: [TAG_TYPES.articles],
      query: (queryParams) => {
        return {
          url: 'articles',
          method: 'POST',
          body: queryParams,
        }
      },
    }),
    getArticleBySlug: builder.query<
      IBaseResponse<TArticle>,
      { slug: string; queryParams?: TGetQueryParams }
    >({
      providesTags: [TAG_TYPES.articles],
      query: ({ slug, queryParams }) => {
        return {
          url: `articles/${slug}`,
          method: 'POST',
          body: queryParams,
        }
      },
    }),
  }),
  overrideExisting: true,
})
