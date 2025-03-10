import { Container } from '@mui/material'
import { ComponentProps, FC } from 'react'

const PageContainer: FC<ComponentProps<typeof Container>> = ({ ...props }) => {
  return (
    <Container
      sx={{
        flex: 1,
        p: 2,
        position: 'relative',
        top: -50,
        boxShadow: 3,
        background: 'white',
      }}
    >
      {props.children}
    </Container>
  )
}

export default PageContainer
