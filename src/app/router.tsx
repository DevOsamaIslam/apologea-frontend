import LoginPage from '@modules/auth/Login'
import Home from '@modules/home'
import Loading from '@shared/LinearIndeterminate'
import { FC } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import AuthLayout from 'src/layout/Auth'
import MainLayout from 'src/layout/Main'
import { useAppSelector } from './store'
import UserProfile from '@modules/users'
import NewArticle from '@modules/articles/new/NewArticle'
import ArticlesPage from '@modules/articles'
import ViewArticle from '@modules/articles/view'
import RegisterPage from '@modules/auth/Register'

export const AppRouter: FC = () => {
  const user = useAppSelector((state) => state.user)
  const location = useLocation()

  // Redirect authenticated users trying to access auth pages
  if (user.isAuthenticated && location.pathname.startsWith('/auth')) {
    return <Navigate to="/" replace />
  }

  if (user.status === 'loading') return <Loading />

  if (user.isAuthenticated) {
    return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="articles">
            <Route index element={<ArticlesPage />} />
            <Route path="new" element={<NewArticle />} />
            <Route path=":slug" element={<ViewArticle />} />
          </Route>
          <Route path="users/:name" element={<UserProfile />} />
          <Route path="*" element={<></>} />
        </Route>
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to="login" replace />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  )
}
