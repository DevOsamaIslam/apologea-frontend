export interface IRegisterPayload {
	firstName: string
	lastName: string
	email: string
	phone: string
}

export interface IRegisterResponse {
	id: string
	createdAt: string
	updatedAt: string
	createdBy: string
	updatedBy: string
	firstName: string
	lastName: string
	email: string
	phone: string
	secondaryPhoneActive: boolean
	isImported: boolean
	leadStatus: string
	userStatusId: string
	language: string
	country: string
	leadType: string
	lead: boolean
	sendWelcomeEmail: boolean
	title: string
	enabled: boolean
	emailVerified: boolean
	customFields: {}
	isCorporate: boolean
	gender: string
	isTestProfile: boolean
	allowEmails: boolean
	brandId: string
	businessUnitId: string
	isInteracted: boolean
	affiliateUserId: string
	clientzoneDisabled: boolean
	eulaStatementAccepted: boolean
	password: string
}
