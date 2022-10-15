import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from 'app/layouts/MainLayout'
import { lazy } from 'react'
import AuthLayout from 'app/layouts/AuthLayout'

const HomeModule = lazy(() => import('modules/home'))
const LoginForm = lazy(() => import('modules/auth/login'))

const Router = () => {
	return (
		<Routes>
			<Route path="/auth" element={<AuthLayout />}>
				<Route path="login" element={<LoginForm />} />
			</Route>
			<Route path="*" element={<MainLayout />}>
				<Route path="" element={<HomeModule />} />
				<Route key={404} path="404" element={<>Not Found</>} />
				<Route key={'any'} path="*" element={<Navigate replace to="/404" />} />
			</Route>
		</Routes>
	)
}

export default Router
