import apiClient from 'app/services/axios'
import { ILoginPayload } from 'lib/@types'
import { ENDPOINTS } from 'lib/constants/endpoints'

export const loginApiCall = (loginCredentials: ILoginPayload) =>
	apiClient.post(ENDPOINTS.login, loginCredentials)
