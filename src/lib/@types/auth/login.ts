export interface ILoginPayload {
	email: string
}

export interface ILoginResponse {
	accessToken: string
	userId: string
	firstName: string
	email: string
}
