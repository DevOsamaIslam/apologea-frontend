import { createTheme } from '@mui/material'

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#BFB3A4',
		},
		secondary: {
			main: '#4C6673',
		},
	},
	typography: {
		fontFamily: 'Comfortaa',
	},
	components: {
		MuiLink: {
			defaultProps: {
				sx: {
					textDecoration: 'none',
				},
			},
		},
	},
})

export default theme
