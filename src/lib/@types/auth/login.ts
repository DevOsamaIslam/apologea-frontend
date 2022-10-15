export interface ILoginPayload {
	identifier: string
	password: string
}

export interface ILoginResponse {
	accessToken: string
	userId: string
	firstName: string
	email: string
}
