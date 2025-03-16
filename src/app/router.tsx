import ArticlesPage from '@modules/articles'
import NewArticle from '@modules/articles/new/NewArticle'
import ViewArticle from '@modules/articles/view'
import LoginPage from '@modules/auth/Login'
import RegisterPage from '@modules/auth/Register'
import Home from '@modules/home'
import UserProfile from '@modules/users'
import Center from '@shared/Center'
import Loading from '@shared/LinearIndeterminate'
import { FC, PropsWithChildren } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import MainLayout from 'src/layout/Main'
import { useAppSelector } from './store'
import EditArticle from '@modules/articles/edit/EditArticle'

export const AppRouter: FC = () => {
  const user = useAppSelector(state => state.user)
  const location = useLocation()
  const isAuthed = user.isAuthenticated

  if (user.status === 'loading') return <Loading />
  // Redirect authenticated users trying to access auth pages
  if (user.isAuthenticated && location.pathname.startsWith('/auth')) {
    return <Navigate to="/" replace />
  }

  const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
    return isAuthed ? children : <Navigate to="/auth/login" replace />
  }

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="articles">
          <Route index element={<ArticlesPage />} />
          <Route
            path="new"
            element={
              <AuthGuard>
                <NewArticle />
              </AuthGuard>
            }
          />
          <Route path=":slug">
            <Route
              index
              element={
                <AuthGuard>
                  <ViewArticle />
                </AuthGuard>
              }
            />
            <Route path="edit" element={<EditArticle />} />
          </Route>
        </Route>
        <Route path="users/:username" element={<UserProfile />} />
        <Route path="*" element={<Center>404 - Not Found</Center>} />
        <Route path="/auth">
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  )
}
