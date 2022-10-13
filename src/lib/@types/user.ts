import { ILoginResponse } from './auth/login'

export interface IEntities {
	accessToken: string
	createdAt: string
	createdBy: string
	deletedAt: null
	deletedBy: string
	email: string
	firstName: string
	id: string
	ipWhiteList: string[]
	isTwoFactorAuthEnabled: string
	language: string
	lastName: string
	lastPasswordChange: string | null
	roleId: string
	updatedAt: string
	updatedBy: string
	username: string
	role: {
		id: string
		name: string
	}
}

export interface IUserState {
	entities: IEntities | undefined
	loading: boolean
	authorized: boolean
	accessToken: string | undefined
	forgotPassword: {
		loading: boolean
		msg: { message: string } | undefined
	}
	resetPassword: {
		loading: boolean
		msg: string | undefined
	}
}

export interface IUser extends ILoginResponse {
	id: string
	accessToken: string
}
