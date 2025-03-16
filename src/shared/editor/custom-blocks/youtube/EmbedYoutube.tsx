import { createReactBlockSpec } from '@blocknote/react'
import { YouTube } from '@mui/icons-material'
import { Box, IconButton, Paper, TextField } from '@mui/material'
import { useState } from 'react'

export const EmbedYoutube = createReactBlockSpec(
  {
    type: 'youtube',
    propSchema: {
      videoUrl: { default: '', type: 'string' },
    },
    content: 'none',
  },
  {
    render: props => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [url, setUrl] = useState(props.block.props.videoUrl)

      const handleUrlChange = event => {
        const newUrl = event.target.value
        setUrl(newUrl)
        props.editor.updateBlock(props.block, { props: { videoUrl: newUrl } })
      }

      const extractYouTubeId = url => {
        const match = url.match(
          /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/,
        )
        return match ? match[1] : ''
      }

      const videoId = extractYouTubeId(url)
      const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : ''

      return (
        <Paper variant="outlined" sx={{ p: 2, width: '100%' }}>
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton size="small" disabled>
              <YouTube color="error" />
            </IconButton>
            <TextField
              variant="standard"
              placeholder="Paste YouTube URL"
              value={url}
              onChange={handleUrlChange}
              fullWidth
              disabled={!props.editor.isEditable}
            />
          </Box>
          {videoId && (
            <Box mt={2}>
              <iframe
                width="100%"
                height="315"
                src={embedUrl}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </Box>
          )}
        </Paper>
      )
    },
  },
)
