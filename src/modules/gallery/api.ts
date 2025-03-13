import { IBaseResponse, IPaginatedResponse, TGetQueryParams } from '@lib/types'
import { apiSlice } from '@app/api'
import { TAG_TYPES } from '@lib/constants/api'
import { TCreateGalleryItemPayload, TGalleryItem } from './types'

export const { useGetGalleryQuery, useUploadMutation } =
  apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      getGallery: builder.query<
        IBaseResponse<IPaginatedResponse<TGalleryItem>>,
        TGetQueryParams
      >({
        providesTags: [TAG_TYPES.gallery],
        query: (queryParams) => ({
          url: 'gallery',
          method: 'POST',
          body: queryParams,
        }),
      }),
      upload: builder.mutation<
        IBaseResponse<TGalleryItem[]>,
        TCreateGalleryItemPayload
      >({
        query: (payload) => {
          const formData = new FormData()
          Array.from(payload.files).forEach((file) => {
            formData.set('files', file)
          })

          return {
            url: 'gallery/upload',
            method: 'POST',
            body: formData,
          }
        },
      }),
    }),
  })
