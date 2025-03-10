import { Outlet } from 'react-router'
import { Container, Box } from '@mui/material'

const AuthLayout = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Outlet />
      </Box>
    </Container>
  )
}

export default AuthLayout
