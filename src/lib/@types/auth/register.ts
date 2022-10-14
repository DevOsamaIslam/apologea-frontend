export interface IUserRegistrationPayload {
	name?: string
	phone?: string
	affiliations?: string
	bio?: string
	qualifications?: string
	confirmPassword?: string
	username?: string
	email: string
	password: string
	role: string
}

export interface IUserRegistrationResponse {
	token: string
}
