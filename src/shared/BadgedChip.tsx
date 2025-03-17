import { Badge, Box, Chip, ChipProps, Tooltip } from '@mui/material'
import { FC, memo } from 'react'

const BadgedChip: FC<{
  icon: ChipProps['icon']
  count?: number
  color?: ChipProps['color']
  tooltip?: string
  showZero?: boolean
}> = ({ icon, count, color, tooltip, showZero }) => {
  return (
    <Tooltip title={tooltip}>
      <Badge badgeContent={count} showZero={showZero} color={color}>
        <Chip
          icon={
            <Box
              sx={{
                position: 'relative',
                left: 5,
                top: 4,
              }}
            >
              {icon}
            </Box>
          }
          color={color}
        />
      </Badge>
    </Tooltip>
  )
}

export default memo(BadgedChip)
