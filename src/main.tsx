import ReactDOM from 'react-dom/client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store/redux'
import { BrowserRouter } from 'react-router-dom'
import Router from './app/router'
import { ThemeProvider } from '@mui/material'
import theme from 'app/theme'

const element = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(element)

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<BrowserRouter children={<Router />} />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
)
