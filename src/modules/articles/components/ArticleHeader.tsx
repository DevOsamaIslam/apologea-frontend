import { useAppSelector } from '@app/store'
import theme from '@app/theme'
import { formatDate } from '@lib/helpers/date'
import {
  Compress,
  Grading,
  Reviews,
  ThumbUp,
  Visibility,
} from '@mui/icons-material'
import { Avatar, Chip, Stack, Tooltip, Typography } from '@mui/material'
import ActionButton from '@shared/ActionButton'
import BadgedChip from '@shared/BadgedChip'
import { FC } from 'react'
import { Link } from 'react-router'

const ArticleHeader: FC = () => {
  const { data: article } = useAppSelector(state => state.article)

  if (!article)
    return <Typography variant="h1">Article not found :(</Typography>

  return (
    <Stack direction={'row'} gap={4} alignItems={'center'} px={4}>
      <Avatar
        sx={{
          background: theme.palette.secondary.main,
          color: 'white',
          width: 100,
          height: 100,
        }}
        src={article.author?.photo}
        children={
          <Typography variant="h1">
            {article.author?.username.charAt(0).toUpperCase()}
          </Typography>
        }
      />

      <Stack gap={1} width={'100%'}>
        <Stack
          direction={'row'}
          gap={0.5}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography variant="subtitle2">
            <Stack direction={'row'} gap={0.5}>
              By
              <Link
                to={`/users/${article.author?.username}`}
                style={{ color: 'var(--secondary)' }}
              >
                {article.author?.username}
              </Link>
            </Stack>
          </Typography>
          <Stack direction={'row'} gap={1}>
            <ActionButton type="edit" size="small" linkTo="edit">
              Edit
            </ActionButton>

            {article.responseToId && (
              <BadgedChip icon={<Grading />} color="primary" />
            )}

            <BadgedChip
              tooltip="Responses"
              icon={<Reviews />}
              color={article.responsesIds.length ? 'warning' : 'default'}
              count={article.responsesIds.length}
            />

            <Chip icon={<Visibility />} label={article.views} />

            <Chip icon={<ThumbUp />} label={article.likes.length} />

            <Chip label={formatDate(article.createdAt)} />
          </Stack>
        </Stack>
        <Typography variant="h1">{article.title}</Typography>
      </Stack>
    </Stack>
  )
}

export default ArticleHeader
