import { Stack, styled } from '@mui/material'

export const Container = styled('div')(({ theme }) => ({
	width: '100%',
	minHeight: '80vh',
	backgroundColor: theme.palette.primary.dark,
}))

export const Slider = styled(Stack)(({ theme }) => ({
	direction: theme.direction,
	gap: theme.spacing(4),
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: '75vh',
	maxWidth: '950px',
	margin: '0 auto',
	position: 'relative',
	minHeight: '445px',
}))
