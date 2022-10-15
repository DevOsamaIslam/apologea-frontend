import { onChange, onSubmit } from './control'
import FormJSX from './FormJSX'
import { FC, useState } from 'react'
import { useLoginUserMutation } from '../api/login'

export interface ILoginForm {
	identifier: string
	password: string
}

const LoginForm: FC = () => {
	const [errors, setErrors] = useState<ILoginForm>({
		identifier: '',
		password: '',
	})
	const [values, setValues] = useState<ILoginForm>({
		identifier: '',
		password: '',
	})
	const [loginUser] = useLoginUserMutation()

	const finishLogin = async (values: ILoginForm) => {
		const result = await loginUser(values)
	}

	return (
		<FormJSX
			errors={errors}
			values={values}
			onChange={(name, value) => onChange(name, value, setValues, setErrors)}
			onSubmit={() => onSubmit(values, setValues, setErrors, finishLogin)}
		/>
	)
}

export default LoginForm
