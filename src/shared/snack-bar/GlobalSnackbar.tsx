import { Close } from '@mui/icons-material'
import { Alert, Box, IconButton, Snackbar, Typography } from '@mui/material'
import { FC, useState } from 'react'
import { createRoot } from 'react-dom/client'

export type NotificationSeverity = 'success' | 'error' | 'warning' | 'info'

export interface SnackbarOptions {
  message: string
  duration?: number
  severity?: NotificationSeverity
  title?: string
  closable?: boolean
  onClose?: () => void
  extra?: React.ReactNode
}

export const snackbar = (props: SnackbarOptions) => {
  createRoot(document.querySelector('#snackbar')!).render(<Snack {...props} />)
}

const Snack: FC<SnackbarOptions> = ({
  message,
  closable,
  duration = 3000,
  extra,
  onClose,
  severity,
  title,
}) => {
  const [open, setOpen] = useState(true)

  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={() => {
        setOpen(false)
        onClose?.()
      }}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        severity={severity}
        onClose={closable ? onClose : undefined}
        action={
          closable && (
            <IconButton size="small" onClick={onClose} color="inherit">
              <Close fontSize="small" />
            </IconButton>
          )
        }
      >
        <Box>
          {title && <Typography variant="subtitle1">{title}</Typography>}
          <Typography variant="body2">{message}</Typography>
          {extra && <Box mt={1}>{extra}</Box>}
        </Box>
      </Alert>
    </Snackbar>
  )
}
