export {}
// import { registerUser } from '@services/apis/auth/register'
// import { useState } from 'react'
// import { onChange, onSubmit } from './control'
// import FormJSX from './FormJSX'

// export interface IRegistrationForm {
// 	firstName: string
// 	lastName: string
// 	email: string
// 	phone: string
// }

// const RegisterForm = () => {
// 	const [errors, setErrors] = useState<IRegistrationForm>({
// 		firstName: '',
// 		lastName: '',
// 		email: '',
// 		phone: '',
// 	})
// 	const [values, setValues] = useState<IRegistrationForm>({
// 		firstName: '',
// 		lastName: '',
// 		email: '',
// 		phone: '',
// 	})

// 	return (
// 		<FormJSX
// 			errors={errors}
// 			values={values}
// 			onChange={(name, value) => onChange(name, value, setValues, setErrors)}
// 			onSubmit={() => onSubmit(values, setValues, setErrors, registerUser)}
// 		/>
// 	)
// }

// export default RegisterForm
