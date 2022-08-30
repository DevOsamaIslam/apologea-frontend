// import AuthModal from '../auth-modal'
import MenuItems from './MenuItems'
import Person from '@mui/icons-material/Person'
import { Box, IconButton, Menu, PopoverOrigin, Tooltip } from '@mui/material'
import { MouseEvent, useState } from 'react'
import { getUser } from '@helpers'
import { useAppSelector } from 'app/store/redux/hooks'

const User = () => {
	const user = getUser()
	const wishlist = useAppSelector((state) => state['wishlist'])
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
	const [_authModal, setAuthModal] = useState<'login' | 'register'>()
	const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}
	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}
	const origin: PopoverOrigin = { vertical: 'top', horizontal: 'right' }
	return (
		<>
			<Box sx={{ flexGrow: 0 }}>
				<Tooltip title='User'>
					<IconButton size='large' onClick={handleOpenUserMenu} sx={{ p: 0 }}>
						<Person />
					</IconButton>
				</Tooltip>
				<Menu
					sx={{ mt: '45px' }}
					id='menu-appbar'
					anchorEl={anchorElUser}
					anchorOrigin={origin}
					transformOrigin={origin}
					open={Boolean(anchorElUser)}
					onClose={handleCloseUserMenu}
				>
					<MenuItems
						handleCloseUserMenu={handleCloseUserMenu}
						user={user}
						wishlist={wishlist}
						setAuthModal={setAuthModal}
					/>
				</Menu>
			</Box>
			{/* <AuthModal key={authModal} open={authModal} setOpen={setAuthModal} /> */}
		</>
	)
}

export default User
