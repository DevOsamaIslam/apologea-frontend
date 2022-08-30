import { Alert as MUIAlert, AlertColor, Snackbar } from '@mui/material'
import { IAlert } from 'lib/@types/alert'
import { DURATION } from 'lib/constants/alert'
import { FC, ReactNode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#notify') as HTMLElement)

const Ping: FC<IAlert> = ({ message, duration, type }) => {
	const [visible, setVisble] = useState<boolean>(true)

	useEffect(() => {
		setTimeout(() => {
			setVisble(false)
		}, duration)
	}, [])

	if (!visible) return null

	return (
		<Snackbar
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			open={true}
			key={1}
		>
			<MUIAlert
				severity={type}
				sx={{
					width: '100%',
					padding: 4,
					fontSize: '1.1rem',
				}}
			>
				<>{message}</>
			</MUIAlert>
		</Snackbar>
	)
}

const notify = (
	message: string | ReactNode,
	type: AlertColor = 'info',
	duration = DURATION
) =>
	root.render(
		<Ping key={Date.now()} message={message} type={type} duration={duration} />
	)

export default notify
