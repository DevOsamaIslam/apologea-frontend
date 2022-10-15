import { Person } from '@mui/icons-material'
import { IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import SearchBar from 'components/atom/search/expandable'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface IProps {
	handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void
	handleCloseUserMenu: (event: React.MouseEvent<HTMLElement>) => void
	anchorElUser: null | HTMLElement
}
const RightMenu: FC<IProps> = ({ handleOpenUserMenu, handleCloseUserMenu, anchorElUser }) => {
	return (
		<Toolbar sx={{ flexGrow: 0 }}>
			<Tooltip title="User">
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<Person />
				</IconButton>
			</Tooltip>
			<SearchBar />
			<Menu
				sx={{ mt: '45px' }}
				id="menu-appbar"
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				<MenuItem>
					<Typography component={Link} to="/auth/login" textAlign={'center'}>
						Login
					</Typography>
				</MenuItem>
				<MenuItem>
					<Typography textAlign={'center'}>Register</Typography>
				</MenuItem>
				{/* {sitemap.map((setting) => (
					<MenuItem key={setting.label} onClick={handleCloseUserMenu}>
						<Typography textAlign="center">{setting.label}</Typography>
					</MenuItem>
				))} */}
			</Menu>
		</Toolbar>
	)
}

export default RightMenu
