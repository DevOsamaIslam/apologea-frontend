import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import settings from '../settings'
import { REDUCER_PATHS, TAG_TYPES } from '@constants/api'
import { getItem } from '@lib/helpers/localStorage'

export const apiSlice = createApi({
  reducerPath: REDUCER_PATHS.api,
  tagTypes: Object.keys(TAG_TYPES),
  baseQuery: fetchBaseQuery({
    baseUrl: settings.BASE_URL,
    prepareHeaders: (headers) => {
      // Get the token from Redux state
      const token = getItem<string>('token')

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      headers.set('Content-Type', 'application/json')
      return headers
    },
  }),
  endpoints: () => ({}),
})
