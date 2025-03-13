import { PartialBlock } from '@blocknote/core'
import { formatDate } from '@lib/helpers/date'
import { TArticle, TParagraphBlock } from '@modules/articles/control/types'
import { ThumbUp, Visibility } from '@mui/icons-material'
import { Box, Chip, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
import ActionButton from './ActionButton'

const ArticlePreview: React.FC<{ article: TArticle }> = ({ article }) => {
  const articleBlocks: PartialBlock[] = JSON.parse(article.content)
  const goto = useNavigate()

  const firstTextBlock = articleBlocks.find(
    (block) => block.type === 'paragraph',
  ) as TParagraphBlock | undefined

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
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <span>By </span>
            <strong style={{ color: 'var(--secondary)' }}>
              {article.author?.username}
            </strong>
          </Typography>
          <Stack direction={'row'} gap={1}>
            <Chip icon={<Visibility />} label={article.views} />
            <Chip icon={<ThumbUp />} label={article.likes.length} />
            <Chip label={formatDate(article.createdAt)} />
          </Stack>
        </Stack>

        {/* Description */}
        {firstTextBlock && (
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            {
              // @ts-expect-error...
              firstTextBlock?.content?.[0]?.text.slice(0, 300) + '...'
            }
          </Typography>
        )}

        {/* Action Buttons */}
        <Stack
          direction="row"
          spacing={2}
          sx={{ mt: 3 }}
          justifyContent={'flex-end'}
        >
          <ActionButton
            type="view"
            onClick={() => goto(`/articles/${article.slug}`)}
          >
            Read On
          </ActionButton>
        </Stack>
      </Box>
    </Box>
  )
}

export default ArticlePreview
