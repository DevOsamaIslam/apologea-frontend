import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import apis from '#api'
import articlesSlice from 'modules/article/control/slice'

const rootReducer = () =>
	combineReducers({
		[apis.reducerPath]: apis.reducer,

		[articlesSlice.name]: articlesSlice.reducer,
	})

export const store = configureStore({
	reducer: rootReducer(),
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apis.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export default rootReducer
