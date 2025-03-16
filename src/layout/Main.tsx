import logo from '@assets/logo-outline.svg'
import { useAppSelector } from '@app/store'
import UserMenu from '@modules/user-menu'
import { Create } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Fab,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material'
import ActionButton from '@shared/ActionButton'
import GlobalStyles from '@shared/GlobalStyles'
import { Search } from '@shared/Search'
import Space from '@shared/Space'
import { Link, NavLink, Outlet, useNavigate } from 'react-router'
import { APP_NAME } from '@app/settings'

const MainLayout = () => {
  const theme = useTheme()
  const goto = useNavigate()
  const user = useAppSelector(state => state.user)

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
          <Link to="/">
            <Space alignItems={'center'}>
              <img src={logo} width={100} />
              <Typography variant="h3" color="white">
                {APP_NAME}
              </Typography>
            </Space>
          </Link>

          <Box sx={{ display: 'flex', gap: 3 }}>
            <NavLink
              to={'/articles'}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <Typography variant="body1">Articles</Typography>
            </NavLink>
          </Box>
          <Box>
            <Space>
              <Search />
              {user.isAuthenticated && <UserMenu />}
              {!user.isAuthenticated && (
                <Space>
                  <ActionButton type="clear" linkTo="/auth/login">
                    Login
                  </ActionButton>
                  <ActionButton type="secondary" linkTo="/auth/register">
                    Register
                  </ActionButton>
                </Space>
              )}
            </Space>
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
