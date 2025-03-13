import { createTheme } from '@mui/material'
import { amber, blue, green, red } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: '#088',
      contrastText: '#fff',
    },
    secondary: {
      main: '#800',
      contrastText: '#fff',
    },
    success: {
      light: green[300],
      main: green[500],
      dark: green[800],
    },
    error: {
      light: red[300],
      main: red[500],
      dark: red[800],
    },
    warning: {
      light: amber[300],
      main: amber[500],
      dark: amber[800],
    },
    info: {
      light: blue[300],
      main: blue[500],
      dark: blue[800],
    },
    background: {
      default: '#fff',
      paper: '#efebe9',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    // border: {
    //   light: grey[300],
    //   main: grey[500],
    //   dark: grey[800],
    // },
  },
  typography: {
    fontFamily: "'Titillium Web', Roboto, Arial, sans-serif",
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    h3: { fontSize: '1.75rem', fontWeight: 600 },
    h4: { fontSize: '1.5rem', fontWeight: 500 },
    h5: { fontSize: '1.25rem', fontWeight: 500 },
    h6: { fontSize: '1rem', fontWeight: 500 },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
    body2: { fontSize: '0.875rem', lineHeight: 1.5 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: {
    borderRadius: 8,
  },
  // @ts-expect-error...
  shadows: [
    'none',
    '0px 1px 3px rgba(0,0,0,0.12), 0px 1px 2px rgba(0,0,0,0.24)', // Light shadow
    '0px 3px 6px rgba(0,0,0,0.16), 0px 3px 6px rgba(0,0,0,0.23)', // Medium shadow
    '0px 10px 20px rgba(0,0,0,0.19), 0px 6px 6px rgba(0,0,0,0.23)', // Deep shadow
    '0px 2px 4px rgba(0,0,0,0.1)', // Deep shadow level 4
    ...createTheme().shadows.slice(5, 24),
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          padding: '8px 16px',
        },
        containedPrimary: {
          boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
        },
      },
    },
  },
})

export default theme
