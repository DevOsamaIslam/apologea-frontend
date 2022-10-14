import apis from '#api'
import { IBaseApiResponse } from 'lib/@types'

const endpoints = apis.injectEndpoints({
	endpoints: (builder) => ({
		forgot: builder.query<IBaseApiResponse<{ token: string } | null>, { email: string }>({
			query: (body) => ({
				url: 'auth/forgot',
				body: body.email,
				method: 'GET',
			}),
			providesTags: ['user'],
		}),
		verifyToken: builder.mutation<IBaseApiResponse<null>, { email: string; token: string }>({
			query: (payload) => ({
				url: `auth/verify-token`,
				method: 'POST',
				body: payload,
			}),
			invalidatesTags: ['users'],
		}),
		reset: builder.mutation<IBaseApiResponse<{ token: string } | null>, { email: string; token: string }>({
			query: (payload) => ({
				url: `auth/reset`,
				method: 'POST',
				body: payload,
			}),
			invalidatesTags: ['users'],
		}),
	}),
	overrideExisting: true,
})

export const { useForgotQuery, useLazyForgotQuery, useResetMutation, useVerifyTokenMutation } = endpoints
