import { Typography } from '@mui/material'
import { APP_NAME } from 'app/settings'

export const LogoDesktop = () => {
	return (
		<>
			<Typography
				variant="h6"
				noWrap
				component="a"
				href="/"
				sx={{
					mr: 2,
					display: { xs: 'none', md: 'flex' },
					fontFamily: 'monospace',
					fontWeight: 700,
					letterSpacing: '.3rem',
					color: 'inherit',
					textDecoration: 'none',
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
			fontFamily: 'monospace',
			fontWeight: 700,
			letterSpacing: '.3rem',
			color: 'inherit',
			textDecoration: 'none',
		}}
	>
		{APP_NAME}
	</Typography>
)
