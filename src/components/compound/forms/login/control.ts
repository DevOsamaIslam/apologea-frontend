export {}
// import { SetStateAction } from 'react'
// import { ILoginForm } from './LoginForm'

// export const onChange = (
// 	name: string,
// 	value: string,
// 	setValues: (prev: SetStateAction<ILoginForm>) => void,
// 	setErrors: (prev: SetStateAction<ILoginForm>) => void
// ) => {
// 	setValues((prev) => ({
// 		...prev,
// 		[name]: value,
// 	}))
// 	if (value === '') {
// 		setErrors((prev) => ({
// 			...prev,
// 			[name]: 'Field is required.',
// 		}))
// 	} else {
// 		setErrors((prev) => ({
// 			...prev,
// 			[name]: null,
// 		}))
// 	}
// }

// export const onSubmit = (
// 	values: ILoginForm,
// 	setValues: (prev: SetStateAction<ILoginForm>) => void,
// 	setErrors: (prev: SetStateAction<ILoginForm>) => void,
// 	submitFn: (data: ILoginForm) => void
// ) => {
// 	let go = true
// 	Object.entries(values).forEach(([key, value]) => {
// 		if (value === '') {
// 			onChange(key, value, setValues, setErrors)
// 			go = false
// 		}
// 	})
// 	if (go) submitFn(values)
// }
