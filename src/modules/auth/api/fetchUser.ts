import apis from '#api'
import { IBaseApiResponse, IUser } from 'lib/@types'

const endpoints = apis.injectEndpoints({
	endpoints: (builder) => ({
		fetchUser: builder.query<IBaseApiResponse<IUser | null>, void>({
			query: () => 'auth',
			providesTags: ['user'],
		}),
	}),
	overrideExisting: true,
})

export const { useFetchUserQuery, useLazyFetchUserQuery } = endpoints
