export const patchObj = (original, newer) => {
	Object.keys(newer).forEach((el) => {
		// check if the element is an object or array
		if (typeof newer[el] === 'object') {
			if (Array.isArray(newer[el])) {
				// if the element is an array

				return newer[el]
			} else patchObj(original[el], newer[el])
		} else newer[el] === original[el] && delete newer[el]
	})
	Object.keys(newer).forEach((key) => {
		if (typeof newer[key] === 'object' && !Object.keys(newer[key]).length) delete newer[key]
	})
	return newer
}

// checks if an object is empty
export const isEmpty = (obj) => Object.keys(obj || {}).length === 0

export const isObject = (obj: any) => typeof obj === 'object' && !Array.isArray(obj)

export const removeEmptyKeys = (obj = {}) => {
	const res = {}
	Object.keys(obj).forEach((key) => {
		if (isObject(obj[key]) && !isEmpty(obj[key])) {
			res[key] = obj[key]
		} else if (!isObject(obj[key])) res[key] = obj[key]
	})
	return res
}
