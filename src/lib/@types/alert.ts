import { ReactNode } from 'react'

export interface IAlert {
	message: string | ReactNode
	type?: 'info' | 'success' | 'warning' | 'error'
	duration?: number
}
