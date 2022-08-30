import { $option } from 'lib/@types/app'
import tagTypes from 'lib/constants/tagTypes'

export const enum2list = (_enum: any, reverse?: boolean) =>
	Object.entries(_enum).map(([key, value]) =>
		reverse
			? { label: value as string, value: key }
			: { label: key as string, value: value as string }
	)

export const array2options = (
	objArray: Object[],
	label: string,
	value: string
): $option[] => {
	return objArray?.map((obj) => ({ label: obj[label], value: obj[value] }))
}

export const getTagType = (type) => tagTypes.find((tag) => tag === type) || ''
