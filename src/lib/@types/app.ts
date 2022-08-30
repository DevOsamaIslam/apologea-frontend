import { FC, LazyExoticComponent } from 'react'
import { $layouts, $MenuItem } from './layout'

export interface ISitemap extends $MenuItem {
	key: string
	path?: string
	inPrimaryNav?: boolean
	inFooter?: boolean
	children?: ISitemap[]
}
export interface IRoute {
	path: string
	label?: string
	absolute?: boolean
	Component: LazyExoticComponent<FC>
	layout?: $layouts
}

export type $option = {
	label: string
	value: string
}
