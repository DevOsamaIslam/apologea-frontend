import { Box } from '@mui/material'
import SearchBar from 'components/atom/search/expandable'
import { FC } from 'react'

interface IProps {
	handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void
	handleCloseUserMenu: (event: React.MouseEvent<HTMLElement>) => void
	anchorElUser: null | HTMLElement
}
const RightMenu: FC<IProps> = ({ handleOpenUserMenu, handleCloseUserMenu, anchorElUser }) => {
	return (
		<Box sx={{ flexGrow: 0 }}>
			{/* <Tooltip title="Open settings">
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
				</IconButton>
			</Tooltip> */}
			<SearchBar />
			{/* <Menu
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
				{sitemap.map((setting) => (
					<MenuItem key={setting.label} onClick={handleCloseUserMenu}>
						<Typography textAlign="center">{setting.label}</Typography>
					</MenuItem>
				))}
			</Menu> */}
		</Box>
	)
}

export default RightMenu
