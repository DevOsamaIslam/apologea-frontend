import apis from '#api'
import { reduxStoreKeys } from '@constants'
import { ILoginPayload, ILoginResponse } from 'lib/@types'

const endpoints = apis.injectEndpoints({
	endpoints: (builder) => ({
		loginUser: builder.mutation<ILoginResponse, ILoginPayload>({
			query: (payload) => ({
				url: `auth/login`,
				method: 'POST',
				body: payload,
			}),
			invalidatesTags: [reduxStoreKeys.users],
		}),
	}),
	overrideExisting: true,
})

export const { useLoginUserMutation } = endpoints
