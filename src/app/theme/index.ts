import { createTheme } from '@mui/material'

const theme = createTheme({
	palette: {
		primary: { main: '#5B50A3' },
		secondary: { main: '#F0E6A6' },
	},
	typography: {
		fontFamily: [
			// 'Antic Slab',
			'Poppins',
			'Comfortaa',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
})

export default theme
