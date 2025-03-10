import { Button, ButtonProps, Menu, MenuItem } from '@mui/material'
import React, { ReactNode, useState } from 'react'

type TMenuOption = {
  label: ReactNode
  onClick: () => void
}

type TMenuDropdownProps = {
  buttonProps: ButtonProps
  options: TMenuOption[]
}

const MenuDropdown: React.FC<TMenuDropdownProps> = ({
  buttonProps,
  options,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button onClick={handleClick} {...buttonProps} />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              option.onClick()
              handleClose()
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default MenuDropdown
