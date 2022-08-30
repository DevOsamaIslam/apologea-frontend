import { IFilter } from 'lib/@types/filters'

// This array contains all the filters which needs to be as array in search/filter
const INCLUDES_FIELDS = [
	'createdAt',
	'updatedAt',
	'lastPasswordChange',
	'language',
	'userStatus.id',
	'projectPropertyType.id',
	'type.id',
	'projectConstructionCategory.id',
	'projectConstructionType.id',
	'projectPropertyType.id',
	'projectExitPlan.id',
	'vendor.id',
	'role.id',
	'inclusionConfigs.defaultProjectConstructionConfig.id',
	'cap.flowPathTags',
	'categoryId',
	'country',
	'agent.id',
	'user.id',
]

export const convertFilterObjToSearchString = (filtersArray: IFilter[]): string => {
	let searchArray: any = []
	let search = ''

	for (const filterObj of filtersArray) {
		const { condition, field, value } = filterObj

		if (INCLUDES_FIELDS.includes(field)) {
			searchArray.push({ [field]: { [condition]: value } })
		} else {
			searchArray.push({ [field]: { [condition]: `${value}` } })
		}
	}
	// To Keep Plus Sign in the string
	if (searchArray.length > 0) search = `&s=${JSON.stringify({ $and: searchArray })}`.replace('+', '%2B')

	return search
}
