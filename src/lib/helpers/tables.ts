import { IFilter } from 'lib/@types/filters'

export const sortFilter = (sortField?: string, sortOrder?: string): string =>
	`sort=${sortField || 'createdAt'},${sortOrder?.toUpperCase() || 'DESC'}`

export const filter2string = (filtersArray: IFilter[]): string => {
	let searchArray: any = []
	let search = ''

	for (const filterObj of filtersArray) {
		const { condition, field, value } = filterObj

		searchArray.push({ [field]: { [condition]: `${value}` } })
	}
	// To Keep Plus Sign in the string
	if (searchArray.length > 0) search = `&s=${JSON.stringify({ $and: searchArray })}`.replace('+', '%2B')

	return search
}
