import { pathJoiner } from '@helpers'

export const ENDPOINTS = {
	login: pathJoiner('auth', 'login'),
	register: pathJoiner('auth', 'register'),
	forgot: pathJoiner('auth', 'forgot'),
	reset: pathJoiner('auth', 'reset'),
	verifyToken: pathJoiner('auth', 'verify-token'),
}
