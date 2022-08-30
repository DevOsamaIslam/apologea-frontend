import { $option } from './app'

export type $cacheTypes = 'user-auth'

export interface IBaseCacheDBItems<T> {
	id?: number
	issueTime: number
	data: T | T[]
	query: $cacheTypes
}

export type $cacheValidity = 'valid' | 'expired' | 'not found'

export interface ICacheitOptions {
	clear?: boolean
	forceCall?: boolean
	forceUpdate?: unknown
	options?: $option
	default?: unknown
}
