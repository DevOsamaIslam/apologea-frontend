import { Box, Button } from '@mui/material'
import { sitemap } from 'app/sitemap'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface IProps {
	setAnchorElNav: (v: null | HTMLElement) => void
}
const DesktopMenu: FC<IProps> = ({ setAnchorElNav }) => {
	const navigate = useNavigate()
	return (
		<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
			{sitemap.map((page) => (
				<Button
					key={page.label}
					onClick={() => {
						navigate(page.path)
						setAnchorElNav(null)
					}}
					sx={{ my: 2, color: 'white', display: 'block' }}
				>
					{page.label}
				</Button>
			))}
		</Box>
	)
}

export default DesktopMenu
