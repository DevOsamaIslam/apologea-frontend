import { styled } from '@mui/material'

export const Div = styled('div')(({ theme }) => ({
	width: '100%',
	minHeight: '80vh',
	backgroundColor: theme.palette.secondary.main,
}))
