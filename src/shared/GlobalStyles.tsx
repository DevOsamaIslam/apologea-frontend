import { css, useTheme } from '@mui/material'
import { FC, useEffect } from 'react'

const GlobalStyles: FC = () => {
  const theme = useTheme()

  useEffect(() => {
    css()

    document.documentElement.style.setProperty(
      '--primary',
      theme.palette.primary.main,
    )
    document.documentElement.style.setProperty(
      '--primary-dark',
      theme.palette.primary.dark,
    )
    document.documentElement.style.setProperty(
      '--primary-light',
      theme.palette.primary.light,
    )

    document.documentElement.style.setProperty(
      '--secondary',
      theme.palette.secondary.main,
    )
    document.documentElement.style.setProperty(
      '--secondary-dark',
      theme.palette.secondary.dark,
    )
    document.documentElement.style.setProperty(
      '--secondary-light',
      theme.palette.secondary.light,
    )
  }, [theme])

  return null
}

export default GlobalStyles
