export {}
// import { SetStateAction } from 'react'
// import { IRegistrationForm } from './RegisterForm'
// import check from 'validator'

// export const onChange = (
// 	name: string,
// 	value: string,
// 	setValues: (prev: SetStateAction<IRegistrationForm>) => void,
// 	setErrors: (prev: SetStateAction<IRegistrationForm>) => void
// ) => {
// 	setValues((prev) => ({
// 		...prev,
// 		[name]: value,
// 	}))
// 	if (!value) {
// 		setErrors((prev) => ({
// 			...prev,
// 			[name]: 'Field is required.',
// 		}))
// 	} else if (name === 'email' && !check.isEmail(value)) {
// 		setErrors((prev) => ({
// 			...prev,
// 			[name]: 'Email is invalid.',
// 		}))
// 	} else {
// 		setErrors((prev) => ({
// 			...prev,
// 			[name]: null,
// 		}))
// 	}
// }

// export const onSubmit = (
// 	values: IRegistrationForm,
// 	setValues: (prev: SetStateAction<IRegistrationForm>) => void,
// 	setErrors: (prev: SetStateAction<IRegistrationForm>) => void,
// 	submitFn: (data: IRegistrationForm) => void
// ) => {
// 	let go = true
// 	Object.entries(values).forEach(([key, value]) => {
// 		onChange(key, value, setValues, setErrors)
// 		if (value === '' || (key === 'email' && !check.isEmail(value))) {
// 			go = false
// 		}
// 	})
// 	if (go) submitFn(values)
// }
