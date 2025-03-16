import { apiSlice } from '@app/api'
import { appSlice } from '@app/store/app.slice'
import { TAG_TYPES } from '@lib/constants/api'
import {
  IBaseResponse,
  IInfiniteQueryParams,
  IPaginatedResponse,
  TGetQueryParams,
} from '@lib/types'
import { TArticle, TCreateArticle, TUpdateArticle } from './types'
import { snackbar } from '@shared/snack-bar/GlobalSnackbar'

export const {
  useGetArticlesQuery,
  useCreateArticleMutation,
  useGetArticleBySlugQuery,
  useUpdateArticleMutation,
  useGetArticlesStreamInfiniteQuery,
} = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createArticle: builder.mutation<IBaseResponse<TArticle>, TCreateArticle>({
      invalidatesTags: [TAG_TYPES.articles],
      query: articlePayload => {
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
      query: queryParams => {
        return {
          url: 'articles',
          method: 'POST',
          body: queryParams,
        }
      },
    }),

    getArticlesStream: builder.infiniteQuery<
      IBaseResponse<IPaginatedResponse<TArticle>>,
      TGetQueryParams,
      number
    >({
      infiniteQueryOptions: {
        initialPageParam: 1,
        maxPages: 3,
        getNextPageParam: (lastPage, allPages, lastPageParam) =>
          lastPageParam + 1,
      },
      query: ({
        pageParam,
        queryArg,
      }: IInfiniteQueryParams<TGetQueryParams>) => ({
        url: 'articles',
        method: 'POST',
        body: {
          ...queryArg,
          page: pageParam,
        },
      }),
    }),

    getArticleBySlug: builder.query<
      IBaseResponse<TArticle>,
      { slug: string; queryParams?: TGetQueryParams }
    >({
      providesTags: [TAG_TYPES.article],
      query: ({ slug, queryParams }) => {
        return {
          url: `articles/${slug}`,
          method: 'POST',
          body: queryParams,
        }
      },
    }),

    updateArticle: builder.mutation<IBaseResponse<TArticle>, TUpdateArticle>({
      invalidatesTags: [TAG_TYPES.articles, TAG_TYPES.article],
      query: patchData => {
        return {
          url: `articles/${patchData.id}`,
          method: 'PATCH',
          body: patchData,
        }
      },
      onQueryStarted: (args, { queryFulfilled, dispatch }) => {
        queryFulfilled.then(() => {
          snackbar({
            severity: 'success',
            message: 'Article updated successfully',
          })
          dispatch(appSlice.actions.redirect(`/articles/${args.slug}`))
        })
      },
    }),
  }),
  overrideExisting: true,
})
