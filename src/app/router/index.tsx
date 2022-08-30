import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from 'layouts/MainLayout'
import { lazy } from 'react'

const HomeModule = lazy(() => import('modules/home'))

const Router = () => {
	return (
		<Routes>
			<Route path="*" element={<MainLayout />}>
				<Route path="" element={<HomeModule />} />
				<Route key={404} path="404" element={<>Not Found</>} />
				<Route key={'any'} path="*" element={<Navigate replace to="/404" />} />
			</Route>
		</Routes>
	)
}

export default Router
