import { getUser } from '@helpers'
import { BASE_URL, REQUEST_TIMEOUT } from 'app/settings'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

/**
 * create instance for api client
 */

const apiClient: AxiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
	timeout: REQUEST_TIMEOUT,
})

/**
 * Interception for the REQUEST of main API Client
 */
apiClient.interceptors.request.use((request: AxiosRequestConfig) => {
	const user = getUser()
	if (request && request.headers && user) {
		request.headers.Authorization = `Bearer ${user.accessToken}`
		request.headers.AccessToken = user.accessToken
	}

	return request
})
/**
 * Interception for the RESPONSE of main API Client
 */
apiClient.interceptors.response.use(undefined, (error) => {
	const interceptResponse: AxiosResponse = error.response

	try {
		const { data } = interceptResponse
		const httpStatusCode = interceptResponse.status
		const requestURL = interceptResponse.config.url

		// since for data object not implemented

		if (httpStatusCode === 402 && interceptResponse && requestURL === 'users/export') {
			return Promise.reject('Wrong2FA')
		}
		if (httpStatusCode === 403 && interceptResponse && requestURL === 'users/export') {
			return Promise.reject('AgentEmailIsNotOwnerOne')
		}

		return Promise.reject(data)
	} catch (error) {
		return Promise.reject(false)
	}
})

export default apiClient
