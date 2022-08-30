import { pathJoiner } from '@helpers'
import { BASE_URL } from 'app/settings'

export const ENDPOINTS = {
	register: process.env.REGISTER_URL || '',
	login: pathJoiner([BASE_URL, 'auth', 'login']),
	getAccounts: pathJoiner([BASE_URL, 'lead', 'accounts?fields=id,tpNumber']),
	atlPay: pathJoiner([BASE_URL, 'lead', 'account', 'transaction', 'atl-pay']),
}
