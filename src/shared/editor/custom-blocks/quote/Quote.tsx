import { defaultProps } from '@blocknote/core'
import { createReactBlockSpec } from '@blocknote/react'
import {
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Paper,
  TextField,
  Box,
} from '@mui/material'
import { FormatQuote } from '@mui/icons-material'
import { MouseEventHandler, useState } from 'react'
import Space from '@shared/Space'

// Quote styles
const quoteStyles = [
  { title: 'Default', value: 'default' },
  { title: 'Emphasized', value: 'emphasized' },
  { title: 'Main', value: 'main' },
]

export const QuoteBlock = createReactBlockSpec(
  {
    type: 'quote',
    propSchema: {
      textAlignment: defaultProps.textAlignment,
      textColor: defaultProps.textColor,
      style: {
        default: 'main',
        values: ['default', 'emphasized', 'main'],
      },
      citation: { default: '', type: 'string' },
    },
    content: 'inline',
  },
  {
    render: props => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [anchorEl, setAnchorEl] = useState<Element | null>(null)
      const open = Boolean(anchorEl)

      //
      const handleOpen: MouseEventHandler<HTMLButtonElement> = event =>
        setAnchorEl(event.currentTarget)
      const handleClose = () => setAnchorEl(null)

      const handleStyleChange = style => {
        props.editor.updateBlock(props.block, { props: { style } })
        handleClose()
      }

      const handleCitationChange = event => {
        props.editor.updateBlock(props.block, {
          props: { citation: event.target.value },
        })
      }

      const { background, border } = (() => {
        switch (props.block.props.style) {
          case 'main':
            return {
              background: 'background.light',
              border: 'primary.main',
            }
          case 'emphasized':
            return {
              background: 'secondary.light',
              border: 'secondary.main',
            }
          default:
            return {
              background: 'info.light',
              border: 'info.dark',
            }
        }
      })()

      return (
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            backgroundColor: background,
            borderLeft: 4,
            borderColor: border,
            width: '100%',
          }}
        >
          <Box>
            <IconButton onClick={handleOpen} size="small" sx={{ mr: 1 }}>
              <FormatQuote fontSize="small" />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              {quoteStyles.map(style => (
                <MenuItem
                  key={style.value}
                  onClick={() => handleStyleChange(style.value)}
                >
                  {style.title}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Rich text content */}
          <Box px={4}>
            <Typography component="div" ref={props.contentRef} />
            {/* Citation Input */}
            <Space alignItems={'center'}>
              ~
              <TextField
                variant="standard"
                placeholder="Citation (optional)"
                value={props.block.props.citation}
                onChange={handleCitationChange}
                fullWidth
                sx={{ mt: 1, fontStyle: 'italic', fontSize: '0.875rem' }}
                disabled={!props.editor.isEditable}
              />
            </Space>
          </Box>
        </Paper>
      )
    },
  },
)
