import { apiSlice } from '@app/api'
import { setItem } from '@helpers/localStorage'
import { IBaseResponse } from '@lib/types'
import { userActions } from './slice'
import { TLoginPayload, TUser } from './types'
import { snackbar } from '@shared/snack-bar/GlobalSnackbar'

export const { useRegisterUserMutation, useLoginUserMutation, usePingQuery } =
  apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      // Register
      registerUser: builder.mutation({
        query: () => ({
          url: 'users',
          method: 'POST',
          body: {},
        }),
      }),
      // Login
      loginUser: builder.mutation<
        IBaseResponse<{ data: TUser; token: string }>,
        TLoginPayload
      >({
        query: (payload) => ({
          url: 'users/login/',
          method: 'POST',
          body: payload,
        }),
        onQueryStarted: (args, { queryFulfilled, dispatch }) => {
          dispatch(userActions.changeState('loading'))
          queryFulfilled.then((response) => {
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
      // GetUser
      ping: builder.query<IBaseResponse<TUser>, void>({
        query: () => 'users/ping',
        onQueryStarted(args, { queryFulfilled, dispatch }) {
          dispatch(userActions.changeState('loading'))
          queryFulfilled
            .then((response) => {
              dispatch(userActions.login(response.data.payload))
            })
            .catch((dump) => {
              const error = dump.error as IBaseResponse | undefined

              if (error) {
                dispatch(userActions.changeState('fail'))
              }
            })
        },
      }),
    }),
    overrideExisting: true,
  })
