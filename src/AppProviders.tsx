import { store } from '@app/store'
import theme from '@app/theme'
import { ThemeProvider } from '@mui/material'
import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'

export const AppProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>{children}</BrowserRouter>
        </Provider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
