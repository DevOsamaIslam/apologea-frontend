// Extend the Palette interface
declare module '@mui/material/styles' {
  interface Palette {
    border: Palette['primary']
    divider: Palette['primary']
  }
}
