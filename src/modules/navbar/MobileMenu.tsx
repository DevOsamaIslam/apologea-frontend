import { Box, IconButton, Link, Menu, MenuItem, Typography } from '@mui/material'
import { sitemap } from 'app/sitemap'
import { FC } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

interface IProps {
	anchorElNav: null | HTMLElement
	handleCloseNavMenu: () => void
	handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void
}
const MobileMenu: FC<IProps> = ({ anchorElNav, handleCloseNavMenu, handleOpenNavMenu }) => {
	return (
		<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
			<IconButton
				size="large"
				aria-label="account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				onClick={handleOpenNavMenu}
				color="inherit"
			>
				<MenuIcon />
			</IconButton>
			<Menu
				id="menu-appbar"
				anchorEl={anchorElNav}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				open={Boolean(anchorElNav)}
				onClose={handleCloseNavMenu}
				sx={{
					display: { xs: 'block', md: 'none' },
				}}
			>
				{sitemap.map((page) => (
					<MenuItem key={page.label} onClick={handleCloseNavMenu}>
						<Typography textAlign="center" variant="button">
							<Link href={page.path}>{page.label}</Link>
						</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	)
}

export default MobileMenu
