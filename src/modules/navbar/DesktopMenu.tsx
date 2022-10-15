import { Box, Button } from '@mui/material'
import { sitemap } from 'app/sitemap'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const DesktopMenu: FC = () => {
	const navigate = useNavigate()
	return (
		<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
			{sitemap.map((page) => (
				<Button
					key={page.label}
					onClick={() => {
						navigate(page.path)
					}}
					sx={{ my: 2, display: 'block', color: 'white', fontWeight: 600, letterSpacing: 1.2 }}
				>
					{page.label}
				</Button>
			))}
		</Box>
	)
}

export default DesktopMenu
