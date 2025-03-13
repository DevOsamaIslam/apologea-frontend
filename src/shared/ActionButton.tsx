import { Theme } from '@emotion/react'
import {
  Add as AddIcon,
  ArrowBack as ArrowBackIcon,
  Close as CloseIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Info as InfoIcon,
  Send as SendIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material'
import {
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogProps,
  DialogTitle,
  styled,
  SxProps,
  Tooltip,
  TooltipProps,
} from '@mui/material'
import { FC, forwardRef, ReactNode, useState } from 'react'
import { Link } from 'react-router'

interface ILinkProps {
  children: ReactNode
}

interface IProps {
  extraProps?: Partial<ButtonProps>
  onClick?: any
  tooltip?: string | TooltipProps
  className?: string
  sx?: SxProps<Theme>
  type?: TActionBtnType
  size?: 'small' | 'medium' | 'large'
  startIcon?: ReactNode | boolean
  endIcon?: ReactNode | boolean
  disabled?: boolean
  hidden?: boolean
  children?: ReactNode
  confirmMessage?: boolean | string | DialogProps
  loading?: boolean
  linkTo?: string
  elinkTo?: string
  ref?: any
}

export type TActionBtnType =
  | 'default'
  | 'secondary'
  | 'delete'
  | 'edit'
  | 'clear'
  | 'add'
  | 'close'
  | 'view'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'submit'
  | 'back'
  | 'outlined'

const StyledButton = styled(Button)(({ theme }) => ({
  '&.negative': {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  '&.positive': {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
  '&.warning': {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.warning.contrastText,
  },
}))

const ActionButton: FC<IProps> = forwardRef((props, ref: any) => {
  const {
    extraProps,
    type = 'default',
    size,
    startIcon,
    endIcon,
    onClick = () => null,
    className = '',
    disabled = false,
    hidden = false,
    children,
    confirmMessage,
    loading,
    sx,
    linkTo,
    elinkTo,
  } = props

  const [open, setOpen] = useState(false)

  let tooltip = props.tooltip

  if (hidden) return null

  const renderButton = () => {
    const buttonProps: ButtonProps = {
      sx,
      className: ['action-button', className].join(' '),
      size,
      disabled,
      loading,
      onClick: confirmMessage || linkTo || elinkTo ? undefined : onClick,
      variant: 'contained',
      color: 'primary',
      startIcon,
      endIcon,
      ...extraProps,
    }

    switch (type) {
      case 'default':
        buttonProps.variant = 'contained'
        break
      case 'secondary':
        buttonProps.color = 'secondary'
        break
      case 'back':
        buttonProps.variant = 'text'
        buttonProps.className = [buttonProps.className, 'back'].join(' ')
        buttonProps.startIcon = startIcon ?? <ArrowBackIcon />
        buttonProps.endIcon = endIcon === true ? <ArrowBackIcon /> : undefined
        tooltip = tooltip ?? 'Back'
        break
      case 'view':
        buttonProps.variant = 'contained'
        buttonProps.color = 'primary'
        buttonProps.startIcon = startIcon ?? <VisibilityIcon />
        buttonProps.endIcon = endIcon === true ? <VisibilityIcon /> : undefined
        break
      case 'delete':
        buttonProps.variant = 'contained'
        buttonProps.color = 'secondary'
        buttonProps.className = [buttonProps.className, 'negative'].join(' ')
        buttonProps.startIcon = startIcon ?? <DeleteIcon />
        buttonProps.endIcon = endIcon === true ? <DeleteIcon /> : undefined
        break
      case 'positive':
        buttonProps.variant = disabled ? 'outlined' : 'contained'
        buttonProps.color = 'primary'
        buttonProps.className = [buttonProps.className, 'positive'].join(' ')
        break
      case 'negative':
        buttonProps.variant = 'contained'
        buttonProps.color = 'secondary'
        buttonProps.className = [buttonProps.className, 'negative'].join(' ')
        break
      case 'warning':
        buttonProps.className = [buttonProps.className, 'warning'].join(' ')
        buttonProps.startIcon = startIcon ?? <InfoIcon />
        buttonProps.endIcon = endIcon === true ? <InfoIcon /> : undefined
        break
      case 'edit':
        buttonProps.startIcon = startIcon ?? <EditIcon />
        buttonProps.endIcon = endIcon === true ? <EditIcon /> : undefined
        break
      case 'clear':
        buttonProps.variant = 'text'
        break
      case 'add':
        buttonProps.startIcon = startIcon ?? <AddIcon />
        buttonProps.endIcon = endIcon === true ? <AddIcon /> : undefined
        break
      case 'close':
        buttonProps.variant = 'contained'
        buttonProps.color = 'secondary'
        buttonProps.className = [buttonProps.className, 'negative'].join(' ')
        buttonProps.startIcon = startIcon ?? <CloseIcon />
        buttonProps.endIcon = endIcon === true ? <CloseIcon /> : undefined
        break
      case 'submit':
        buttonProps.variant = 'contained'
        buttonProps.color = 'primary'
        buttonProps.startIcon = startIcon ?? <SendIcon />
        buttonProps.endIcon = endIcon === true ? <SendIcon /> : undefined
        buttonProps.type = 'submit'
        break
      case 'outlined':
        buttonProps.variant = 'outlined'
        break
    }

    const tooltipProps =
      typeof tooltip === 'object' ? tooltip : { title: !disabled && tooltip }
    const ButtonComponent = (
      <StyledButton ref={ref} {...buttonProps}>
        {children}
      </StyledButton>
    )

    const LinkComponent: FC<ILinkProps> = ({ children }) => {
      const _link = (linkTo || elinkTo) as string
      const isExternal = _link.startsWith('http')

      if (isExternal)
        return (
          <a
            rel="noopener"
            href={_link}
            target={elinkTo ? '_blank' : undefined}
          >
            {children}
          </a>
        )

      return (
        <Link to={_link} target={elinkTo ? '_blank' : undefined}>
          {children}
        </Link>
      )
    }

    return (
      <Tooltip {...tooltipProps}>
        {(linkTo || elinkTo) && !disabled ? (
          <LinkComponent children={ButtonComponent} />
        ) : (
          ButtonComponent
        )}
      </Tooltip>
    )
  }

  const dialogProps =
    typeof confirmMessage === 'object' ? confirmMessage : undefined

  if (confirmMessage) {
    return (
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        {...dialogProps}
      >
        {!dialogProps && (
          <>
            <DialogTitle id="alert-dialog-title">
              {typeof confirmMessage === 'boolean' ||
              typeof confirmMessage === 'object'
                ? 'Are you sure?'
                : confirmMessage}
            </DialogTitle>
            <DialogActions>
              <Button onClick={() => setOpen(false)} color="primary">
                No
              </Button>
              <Button onClick={onClick} color="primary" autoFocus>
                Yes
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    )
  } else return renderButton()
})

export default ActionButton
