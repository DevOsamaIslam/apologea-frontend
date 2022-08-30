import { ReactNode } from 'react'

export type $layouts = 'main' | 'dashboard' | 'auth'

export interface IBreadcrumb {
	path: string
	label: string | ReactNode
	absolute?: boolean
}

export type $MenuItem = {
	label: string
	key?: string
	path?: string
	inPrimaryNav?: boolean
	inFooter?: boolean
	icon?: JSX.Element
	children?: $MenuItem[]
	disabled?: boolean
}

export type $TabPane = {
	title: string
	key: string
	link?: string
	disabled: boolean
	icon: JSX.Element
	component: JSX.Element
}
