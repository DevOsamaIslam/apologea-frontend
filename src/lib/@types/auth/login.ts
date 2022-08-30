export interface ILoginPayload {
	tpNumber: number
	email: string
	password: string
	userDevice: {}
}

export interface ILoginResponse {
	accessToken: string
	userId: string
	firstName: string
	email: string
}
