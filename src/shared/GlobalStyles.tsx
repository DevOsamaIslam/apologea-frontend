import { GlobalStyles as MuiGlobalStyles } from '@mui/material'

const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={theme => ({
      ':root': {
        '--primary': theme.palette.primary.main,
        '--primary-dark': theme.palette.primary.dark,
        '--primary-light': theme.palette.primary.light,
        '--secondary': theme.palette.secondary.main,
        '--secondary-dark': theme.palette.secondary.dark,
        '--secondary-light': theme.palette.secondary.light,
      },
      a: {
        textDecoration: 'none',
        color: theme.palette.secondary.main,
      },
      'button.MuiButton-contained a': {
        color: theme.palette.background.paper,
      },
    })}
  />
)

export default GlobalStyles
