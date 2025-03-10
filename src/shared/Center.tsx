import { Box, BoxProps } from '@mui/material'
import { FC } from 'react'

interface CenterProps extends BoxProps {
  fullHeight?: boolean
}

const Center: FC<CenterProps> = ({
  fullHeight = false,
  sx,
  children,
  ...props
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={fullHeight ? '100vh' : '100%'}
      width="100%"
      {...props}
      sx={{ ...sx }}
    >
      {children}
    </Box>
  )
}

export default Center
