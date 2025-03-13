import { APP_NAME } from '@app/settings'
import UserMenu from '@modules/user-menu'
import { Create } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Fab,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material'
import GlobalStyles from '@shared/GlobalStyles'
import { Search } from '@shared/Search'
import { Link, NavLink, Outlet, useNavigate } from 'react-router'

const MainLayout = () => {
  const theme = useTheme()
  const goto = useNavigate()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <GlobalStyles />
      <Box
        sx={{
          height: '70vh',
          width: '100%',
          background: theme.palette.primary.main,
          position: 'absolute',
          zIndex: -1,
        }}
      />
      <AppBar
        position="static"
        sx={{
          boxShadow: 'none', // Remove the default shadow
          marginBottom: 8,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', color: 'white' }}
            component={Link}
            to={'/'}
          >
            {APP_NAME}
          </Typography>

          <Box sx={{ display: 'flex', gap: 3 }}>
            <NavLink
              to={'/articles'}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <Typography variant="body1">Articles</Typography>
            </NavLink>
          </Box>
          <Box>
            <Stack direction={'row'} gap={1}>
              <Search />
              <UserMenu />
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
      <Tooltip title="Create Article">
        <Fab
          size="medium"
          color="secondary"
          aria-label="add"
          style={{
            position: 'fixed',
            bottom: 16,
            right: 16,
          }}
          onClick={() => goto('articles/new')}
        >
          <Create />
        </Fab>
      </Tooltip>
    </Box>
  )
}

export default MainLayout
