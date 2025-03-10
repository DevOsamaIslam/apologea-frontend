import { IBlock, TArticle } from '@modules/articles/control/types'
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

const ArticlePreview: React.FC<{ article: TArticle }> = ({ article }) => {
  const articleBlocks: IBlock[] = JSON.parse(article.content)
  const goto = useNavigate()

  return (
    <Box sx={{ width: '70%', mx: 'auto', px: 8 }}>
      {/* Large Letter Background */}
      <Box sx={{ position: 'relative' }}>
        <Typography
          sx={{
            position: 'absolute',
            fontSize: '8rem',
            color: 'rgba(0, 0, 0, 0.1)',
            top: 0,
            left: -18,
          }}
          variant="h1"
        >
          {article.title.charAt(0).toUpperCase()}
        </Typography>
      </Box>

      <Box p={4}>
        {/* Title */}
        <Typography variant="h3" fontWeight="bold">
          {article.title}
        </Typography>

        {/* Meta Info */}
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          By <strong>{article.author?.username}</strong>
        </Typography>

        {/* Description */}
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          {articleBlocks[0].content[0].text.slice(0, 300) + '...'}
        </Typography>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
          <Button variant="contained" onClick={() => goto(`${article.slug}`)}>
            Read On
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default ArticlePreview
