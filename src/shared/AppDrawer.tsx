import React from 'react'
import Drawer from '@mui/material/Drawer'
import { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer'

interface DrawerProps extends MuiDrawerProps {
  children: React.ReactNode
}

const AppDrawer: React.FC<DrawerProps> = ({ children, ...props }) => {
  return <Drawer {...props}>{children}</Drawer>
}

export default AppDrawer
