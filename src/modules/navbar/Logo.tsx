import { Typography } from '@mui/material'
import { APP_NAME } from 'app/settings'
import { Link } from 'react-router-dom'

export const LogoDesktop = () => {
	return (
		<>
			<Typography
				variant="h6"
				noWrap
				component={Link}
				to="/"
				sx={{
					mr: 2,
					display: { xs: 'none', md: 'flex' },
					fontFamily: ['Fredericka the Great'],
					letterSpacing: '-3',
					textDecoration: 'none',
					fontSize: '2rem',
					color: 'inherit',
				}}
			>
				{APP_NAME}
			</Typography>
		</>
	)
}

export const LogoMobile = () => (
	<Typography
		variant="h5"
		noWrap
		component="a"
		href=""
		sx={{
			mr: 2,
			display: { xs: 'flex', md: 'none' },
			flexGrow: 1,
			fontFamily: ['Fredericka the Great'],
			letterSpacing: '.3rem',
			color: 'inherit',
			textDecoration: 'none',
			'letter-spacing': -2,
			fontSize: '1.5rem',
		}}
	>
		{APP_NAME}
	</Typography>
)
