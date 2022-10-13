import { Box, Grid, TextField, Button, Link } from '@mui/material'
import { FC } from 'react'
import { ILoginForm } from '.'

interface IProps {
	errors: ILoginForm
	values: ILoginForm
	onChange: (name: string, value: string) => void
	onSubmit: () => void
}
const FormJSX: FC<IProps> = ({ errors, values, onChange, onSubmit }) => {
	return (
		<Box sx={{ mt: 3 }}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						required
						error={Boolean(errors.identifier)}
						helperText={errors.identifier}
						value={values.identifier}
						fullWidth
						id="identifier"
						label="Identifier"
						name="identifier"
						autoComplete="identifier"
						onChange={(e) => onChange(e.target.name, e.target.value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						error={Boolean(errors.password)}
						helperText={errors.password}
						value={values.password}
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="new-password"
						onChange={(e) => onChange(e.target.name, e.target.value)}
					/>
				</Grid>
			</Grid>
			<Button onClick={onSubmit} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
				Login
			</Button>
			<Grid container justifyContent="center">
				<Grid item>
					<Link href="#" variant="body2">
						Don't have an account? Register
					</Link>
				</Grid>
			</Grid>
		</Box>
	)
}

export default FormJSX
