import { apiSlice } from '@app/api'
import { setItem } from '@helpers/localStorage'
import { IBaseResponse, TGetQueryParams } from '@lib/types'
import { userActions } from './slice'
import {
  TLoginPayload,
  TRegistrationPayload,
  TUpdateUserPayload,
  TUser,
} from './types'
import { snackbar } from '@shared/snack-bar/GlobalSnackbar'
import { TAG_TYPES } from '@lib/constants/api'

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  usePingQuery,
  useGetUserQuery,
  useUpdateUserMutation,
} = apiSlice.injectEndpoints({
  endpoints: builder => ({
    // Register
    registerUser: builder.mutation<
      IBaseResponse<{ data: TUser; token: string }>,
      TRegistrationPayload
    >({
      query: payload => ({
        url: 'users',
        method: 'POST',
        body: payload,
      }),
      onQueryStarted: (_, { queryFulfilled, dispatch }) => {
        queryFulfilled.then(response => {
          const { data, token } = response.data.payload
          setItem('token', token)
          dispatch(userActions.login(data))
          dispatch(userActions.changeState('success'))
          snackbar({
            message: 'Login successful',
            severity: 'success',
          })
        })
      },
    }),
    // Login
    loginUser: builder.mutation<
      IBaseResponse<{ data: TUser; token: string }>,
      TLoginPayload
    >({
      query: payload => ({
        url: 'users/login',
        method: 'POST',
        body: payload,
      }),
      onQueryStarted: (args, { queryFulfilled, dispatch }) => {
        dispatch(userActions.changeState('loading'))
        queryFulfilled.then(response => {
          const { data, token } = response.data.payload
          setItem('token', token)
          dispatch(userActions.login(data))
          dispatch(userActions.changeState('success'))
          snackbar({
            message: 'Login successful',
            severity: 'success',
          })
        })
      },
    }),
    // Ping
    ping: builder.query<IBaseResponse<TUser>, void>({
      query: () => 'users/ping',
      onQueryStarted(args, { queryFulfilled, dispatch }) {
        dispatch(userActions.changeState('loading'))
        queryFulfilled
          .then(response => {
            dispatch(userActions.login(response.data.payload))
          })
          .catch(dump => {
            const error = dump.error as IBaseResponse | undefined

            if (error) {
              dispatch(userActions.changeState('fail'))
            }
          })
      },
    }),
    // Get user
    getUser: builder.query<
      IBaseResponse<TUser>,
      { queryParams?: TGetQueryParams; name: string }
    >({
      providesTags: [TAG_TYPES.user],
      query: ({ queryParams, name }) => ({
        url: `users/@${name}`,
        method: 'POST',
        body: queryParams,
      }),
    }),
    // Update user
    updateUser: builder.mutation<IBaseResponse<TUser>, TUpdateUserPayload>({
      invalidatesTags: [TAG_TYPES.user],
      query: payload => ({
        url: `users/@${payload.username}`,
        method: 'PATCH',
        body: payload,
      }),
    }),
  }),
  overrideExisting: true,
})
