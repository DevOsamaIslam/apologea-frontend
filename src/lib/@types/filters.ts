export interface IFilter {
	field: string
	label?: string
	value: any
	condition: string
}

export type $SingleDateOptions = {
	label: string
	value: '$between' | '$gte' | '$lte'
}[]
