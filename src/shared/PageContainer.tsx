import { Container, Paper } from '@mui/material'
import { ComponentProps, FC } from 'react'

const PageContainer: FC<ComponentProps<typeof Container>> = ({
  sx,
  ...props
}) => {
  return (
    <Container
      component={Paper}
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        position: 'relative',
        top: -64,
        ...sx,
      }}
      {...props}
    >
      {props.children}
    </Container>
  )
}

export default PageContainer
