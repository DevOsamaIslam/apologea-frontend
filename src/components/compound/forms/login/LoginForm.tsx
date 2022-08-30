export {}
// import { onChange, onSubmit } from './control'
// import FormJSX from './FormJSX'
// import { FC, useState } from 'react'
// import { loginUser } from '@services/apis/auth/login'

// export interface ILoginForm {
// 	email: string
// 	password: string
// }

// const LoginForm: FC<{ pending: Function }> = ({ pending }) => {
// 	const [errors, setErrors] = useState<ILoginForm>({
// 		email: '',
// 		password: '',
// 	})
// 	const [values, setValues] = useState<ILoginForm>({
// 		email: '',
// 		password: '',
// 	})

// 	const finishLogin = async (values: ILoginForm) => {
// 		const result = await loginUser(values)
// 		if (result) pending(false)
// 	}

// 	return (
// 		<FormJSX
// 			errors={errors}
// 			values={values}
// 			onChange={(name, value) => onChange(name, value, setValues, setErrors)}
// 			onSubmit={() => onSubmit(values, setValues, setErrors, finishLogin)}
// 		/>
// 	)
// }

// export default LoginForm
