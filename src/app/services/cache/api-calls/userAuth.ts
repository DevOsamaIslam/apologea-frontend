import { ENDPOINTS } from '@constants'
import apiClient from 'app/services/axios'

export const userAuthCall = () => apiClient(ENDPOINTS.login)
