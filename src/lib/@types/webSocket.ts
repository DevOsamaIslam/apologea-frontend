export type $wsMessages = 'user-message'

export interface IWSPayload<T> {
	event: $wsMessages
	payload: T
}
