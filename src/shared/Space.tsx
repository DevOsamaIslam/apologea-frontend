import { Stack } from '@mui/system'
import { ComponentProps, FC } from 'react'

const Space: FC<ComponentProps<typeof Stack>> = ({ ...props }) => {
  return (
    <Stack direction={'row'} gap={1} {...props}>
      {props.children}
    </Stack>
  )
}

export default Space
