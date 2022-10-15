import { Container, CssBaseline, Grid } from '@mui/material'
import Lazy from 'components/atom/loading/Lazy'
import Navbar from 'modules/navbar'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
	return (
		<CssBaseline>
			<Navbar />
			<Container>
				<Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: `calc(100vh - 68.5px )` }}>
					<Grid item xs={3}>
						<Lazy>
							<Outlet />
						</Lazy>
					</Grid>
				</Grid>
			</Container>
			{/* <Footer /> */}
		</CssBaseline>
	)
}

export default AuthLayout
