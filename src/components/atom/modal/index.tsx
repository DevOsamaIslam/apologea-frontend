import Divider from '@mui/material/Divider'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import MUIModal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { CSSProperties, FC, PropsWithChildren, ReactNode } from 'react'
import Fade from './Fade'

interface IProps extends PropsWithChildren {
	open: boolean | string
	setOpen: Function
	title: string | ReactNode
	actions?: ReactNode[]
	style?: CSSProperties
}
const Modal: FC<IProps> = ({
	open,
	setOpen,
	title,
	actions,
	children,
	style = {},
}) => {
	const handleClose = () => setOpen(false)

	return (
		<MUIModal
			aria-labelledby='spring-modal-title'
			aria-describedby='spring-modal-description'
			open={Boolean(open)}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 200,
			}}
		>
			<Fade in={Boolean(open)}>
				<Box
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: 600,
						bgcolor: 'background.paper',
						border: '2px solid #000',
						boxShadow: 24,
						p: 4,
						...style,
					}}
				>
					{typeof title === 'string' ? (
						<Typography id='spring-modal-title' variant='h6' component='h2'>
							{title}
						</Typography>
					) : (
						title
					)}
					<Divider />
					<Box id='spring-modal-description' sx={{ mt: 2 }}>
						{children}
					</Box>
				</Box>
			</Fade>
		</MUIModal>
	)
}

export default Modal
