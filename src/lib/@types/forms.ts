export type $InputTypes =
	| 'text'
	| 'email'
	| 'password'
	| 'dropdown'
	| 'searchableRadioList'
	| 'searchableCheckList'
	| 'text-editor'
	| 'checkbox'
	| 'divider'
	| 'file'
	| 'toggle'
	| 'date'
	| 'textarea'
	| 'number'

export interface IField {
	label: string
	name: string
	type?: $InputTypes
	numberSymbol?: string
	list?: any[]
	value?: string | string[]
	placeholder?: string
	size?: 'small' | 'middle' | 'large'
	customProps?: any
	dateFromToday?: boolean
	disabled?: boolean
	visible?: boolean
	multiple?: boolean
	height?: number
	uploadOuterLabel?: string
}
