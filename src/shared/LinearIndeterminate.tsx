import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import { FC } from 'react'

interface IProps {
  loading?: boolean
}
const Loading: FC<IProps> = ({ loading = true }) => {
  if (!loading) return null

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  )
}

export default Loading
