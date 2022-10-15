import { cacheDB } from '.'
import { $cacheTypes, $cacheValidity, IBaseCacheDBItems, ICacheitOptions } from 'lib/@types/cache'
import { array2options } from '@helpers'
import { EXPIRY } from '@constants'
import { userAuthCall } from './api-calls/userAuth'

export const cacheit = async (key: $cacheTypes, { forceCall, options }: ICacheitOptions = {}) => {
	const stored = await cacheDB.cache.where({ query: key }).first()
	const validity = isValid(stored)
	if (validity === 'valid' && !forceCall && stored) {
		return options
			? array2options(stored.data as Object[], options.label, options.value)
			: stored.data
	}
	let apiCall = getApiCall(key)
	const response = await apiCall()
	if (response) {
		if (validity === 'expired') {
			cacheDB.cache.where({ query: key }).modify({
				data: response,
				issueTime: Date.now(),
			})
		} else {
			cacheDB.cache.add({
				query: key,
				data: response,
				issueTime: Date.now(),
			})
		}
		if (options) {
			return array2options(response, options.label, options.value)
		}
		return response
	}
}

export const isValid = (data?: IBaseCacheDBItems<$cacheTypes>): $cacheValidity => {
	if (!data) return 'not found'
	if (data.issueTime + EXPIRY < Date.now()) return 'expired'
	return 'valid'
}

const getApiCall = (key: $cacheTypes): (() => Promise<any>) => {
	switch (key) {
		case 'user-auth':
			return userAuthCall
		default:
			return () => Promise.resolve(null)
	}
}
