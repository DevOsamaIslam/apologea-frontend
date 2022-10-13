export {}
// import { IRegistrationForm } from './RegisterForm'
// import { Box, Button, Grid, TextField } from '@mui/material'
// import Link from '@mui/material/Link'
// import { FC } from 'react'

// interface IProps {
// 	onChange: (name: string, value: string) => void
// 	onSubmit: () => void
// 	errors: IRegistrationForm
// 	values: IRegistrationForm
// }

// const FormJSX: FC<IProps> = ({ onChange, onSubmit, errors, values }) => {
// 	return (
// 		<Box sx={{ mt: 3 }}>
// 			<Grid container spacing={2}>
// 				<Grid item xs={12} md={6}>
// 					<TextField
// 						required
// 						error={Boolean(errors.firstName)}
// 						helperText={errors.firstName}
// 						value={values.firstName}
// 						fullWidth
// 						id='firstName'
// 						label='First Name'
// 						name='firstName'
// 						autoComplete='firstName'
// 						onChange={(e) => onChange(e.target.name, e.target.value)}
// 					/>
// 				</Grid>
// 				<Grid item xs={12} md={6}>
// 					<TextField
// 						required
// 						error={Boolean(errors.lastName)}
// 						helperText={errors.lastName}
// 						value={values.lastName}
// 						fullWidth
// 						id='lastName'
// 						label='Last Name'
// 						name='lastName'
// 						autoComplete='lastName'
// 						onChange={(e) => onChange(e.target.name, e.target.value)}
// 					/>
// 				</Grid>
// 				<Grid item xs={12} md={6}>
// 					<TextField
// 						required
// 						error={Boolean(errors.email)}
// 						helperText={errors.email}
// 						value={values.email}
// 						fullWidth
// 						id='email'
// 						label='Email Address'
// 						name='email'
// 						autoComplete='email'
// 						onChange={(e) => onChange(e.target.name, e.target.value)}
// 					/>
// 				</Grid>
// 				<Grid item xs={12} md={6}>
// 					<TextField
// 						required
// 						error={Boolean(errors.phone)}
// 						helperText={errors.phone}
// 						value={values.phone}
// 						fullWidth
// 						id='phone'
// 						label='Telephone'
// 						name='phone'
// 						autoComplete='phone'
// 						onChange={(e) => onChange(e.target.name, e.target.value)}
// 					/>
// 				</Grid>
// 			</Grid>
// 			<Button
// 				onClick={onSubmit}
// 				fullWidth
// 				variant='contained'
// 				sx={{ mt: 3, mb: 2 }}
// 			>
// 				Register
// 			</Button>
// 			<Grid container justifyContent='center'>
// 				<Grid item>
// 					<Link href='#' variant='body2'>
// 						Already have account? Login
// 					</Link>
// 				</Grid>
// 			</Grid>
// 		</Box>
// 	)
// }

// export default FormJSX
