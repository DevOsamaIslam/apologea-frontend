import { Button, Typography } from '@mui/material'
import { ComponentProps, useState } from 'react'
import ActionButton from './ActionButton'

type ExpandableTextProps = ComponentProps<typeof Typography> & {
  text: string
  maxLength?: number
}

const ExpandableText: React.FC<ExpandableTextProps> = ({
  text,
  maxLength = 100,
  ...typographyProps
}) => {
  const [expanded, setExpanded] = useState(false)
  const isTruncated = text.length > maxLength

  const handleToggle = () => setExpanded((prev) => !prev)

  return (
    <Typography {...typographyProps}>
      {isTruncated && !expanded ? `${text.slice(0, maxLength)}... ` : text}
      {isTruncated && (
        <ActionButton
          type="clear"
          onClick={handleToggle}
          sx={{ m: 0, p: 0, ml: '4px' }}
        >
          {expanded ? 'Show less' : 'Show more'}
        </ActionButton>
      )}
    </Typography>
  )
}

export default ExpandableText
