import apis from '#api'
import { IUserRegistrationPayload, IUserRegistrationResponse, IBaseApiResponse } from 'lib/@types'

const endpoints = apis.injectEndpoints({
	endpoints: (builder) => ({
		registerUser: builder.mutation<
			IBaseApiResponse<IUserRegistrationResponse>,
			IUserRegistrationPayload
		>({
			query: (payload) => ({
				url: `auth/register`,
				method: 'POST',
				body: payload,
			}),
			invalidatesTags: ['users'],
		}),
	}),
	overrideExisting: true,
})

export const { useRegisterUserMutation } = endpoints
