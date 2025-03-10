import React from 'react'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'

interface ActionButtonProps {
  type?: 'button' | 'submit'
  icon?: React.ReactNode
  label?: string
  onClick?: () => void
  confirmOnClick?: boolean
  tooltip?: string
}

const ActionButton: React.FC<ActionButtonProps> = ({
  type,
  icon,
  label,
  onClick,
  confirmOnClick,
  tooltip,
}) => {
  const handleClick = () => {
    if (confirmOnClick) {
      if (window.confirm('Are you sure?')) {
        onClick?.()
      }
    } else {
      onClick?.()
    }
  }

  return (
    <Tooltip title={tooltip || label}>
      {type === 'button' ? (
        <Button variant="contained" onClick={handleClick}>
          {icon} {label}
        </Button>
      ) : (
        <Button type={type} variant="contained" onClick={handleClick}>
          {icon} {label}
        </Button>
      )}
    </Tooltip>
  )
}

export default ActionButton
