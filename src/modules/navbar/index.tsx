import DesktopMenu from './DesktopMenu'
import { LogoDesktop, LogoMobile } from './Logo'
import MobileMenu from './MobileMenu'
import RightMenu from './RightMenu'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import { MouseEvent, useState } from 'react'

const Navbar = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
	const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}
	const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<LogoDesktop />

					<MobileMenu anchorElNav={anchorElNav} handleCloseNavMenu={handleCloseNavMenu} handleOpenNavMenu={handleOpenNavMenu} />

					<LogoMobile />

					<DesktopMenu />

					<RightMenu anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} handleOpenUserMenu={handleOpenUserMenu} />
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default Navbar
