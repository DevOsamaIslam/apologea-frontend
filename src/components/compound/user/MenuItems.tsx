import { logout } from '@helpers'
import { MenuItem, Typography, Divider } from '@mui/material'
import { IUser } from 'lib/@types/user'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface IProps {
	user: IUser | undefined
	wishlist: any
	handleCloseUserMenu: () => void
	setAuthModal: Function
}

const MenuItems: FC<IProps> = ({ user, handleCloseUserMenu, wishlist, setAuthModal }) => {
	const navigate = useNavigate()
	const handleWishlistClicked = () => {
		handleCloseUserMenu()
		navigate('/wishlist')
	}
	return (
		<>
			{user && [
				<MenuItem key="name" onClick={handleCloseUserMenu}>
					<Typography>{user?.firstName?.toUpperCase()}</Typography>
				</MenuItem>,
				<Divider key="divider" />,
			]}
			<MenuItem onClick={handleWishlistClicked}>
				<Typography>Wishlist ({wishlist?.length || 0})</Typography>
			</MenuItem>
			{user ? (
				<MenuItem
					onClick={() => {
						handleCloseUserMenu()
						logout()
					}}
				>
					<Typography>Logout</Typography>
				</MenuItem>
			) : (
				[
					<MenuItem
						key="register"
						onClick={() => {
							handleCloseUserMenu()
							setAuthModal('register')
						}}
					>
						<Typography>Register</Typography>
					</MenuItem>,
					<MenuItem
						key="login"
						onClick={() => {
							handleCloseUserMenu()
							setAuthModal('login')
						}}
					>
						<Typography>Login</Typography>
					</MenuItem>,
				]
			)}
		</>
	)
}

export default MenuItems
