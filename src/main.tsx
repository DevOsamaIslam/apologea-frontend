import { CssBaseline } from '@mui/material'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { AppProviders } from './AppProviders.tsx'

createRoot(document.getElementById('root')!).render(
  <AppProviders>
    <CssBaseline />
    <App />
  </AppProviders>,
)
