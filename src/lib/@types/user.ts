import { ILoginResponse } from './auth/login'

export interface IUser extends ILoginResponse {
	id: string
	accessToken: string
}
