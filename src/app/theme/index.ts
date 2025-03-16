import { createTheme, darken, lighten } from '@mui/material'
import { amber, blue, green, red } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      light: lighten('#088', 0.3),
      main: '#088',
      dark: darken('#088', 0.3),
      contrastText: '#fff',
    },
    secondary: {
      light: lighten('#800', 0.8),
      main: '#800',
      dark: darken('#800', 0.5),
      contrastText: '#fff',
    },
    success: {
      light: green[100],
      main: green[500],
      dark: green[900],
      contrastText: '#fff',
    },
    error: {
      light: red[100],
      main: red[500],
      dark: red[900],
      contrastText: '#fff',
    },
    warning: {
      light: amber[100],
      main: amber[500],
      dark: amber[900],
      contrastText: '#fff',
    },
    info: {
      light: blue[100],
      main: blue[500],
      dark: blue[900],
      contrastText: '#fff',
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
  },
})

export default theme
