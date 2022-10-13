import { CssBaseline } from '@mui/material'
import Lazy from 'components/atom/loading/Lazy'
import Navbar from 'modules/navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
	return (
		<CssBaseline>
			<Navbar />
			<div className="main-content">
				<Lazy>
					<Outlet />
				</Lazy>
			</div>
			{/* <Footer /> */}
		</CssBaseline>
	)
}

export default MainLayout
