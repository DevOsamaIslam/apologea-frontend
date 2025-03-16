import { useAppSelector } from '@app/store'
import { PartialBlock } from '@blocknote/core'
import { formatDate } from '@lib/helpers/date'
import { Compress, Gavel, ThumbUp, Visibility } from '@mui/icons-material'
import { Avatar, Box, Chip, Stack, Typography, useTheme } from '@mui/material'
import ActionButton from '@shared/ActionButton'
import Loading from '@shared/LinearIndeterminate'
import PageContainer from '@shared/PageContainer'
import Editor from '@shared/editor/Editor'
import { FC, useMemo } from 'react'
import { shallowEqual } from 'react-redux'
import { Link, useParams } from 'react-router'
import { safeJsonParse } from 'safe-json-utils'
import {
  useGetArticleBySlugQuery,
  useUpdateArticleMutation,
} from '../control/api'
import PageTitle from '@shared/PageTitle'

const ViewArticle: FC = () => {
  const { slug = '' } = useParams<{ slug: string }>()
  const theme = useTheme()

  const { data: response, isFetching } = useGetArticleBySlugQuery(
    {
      slug,
      queryParams: {
        populate: [
          { path: 'author' },
          {
            path: 'responses',
            select: ['title', 'slug', 'authorId'],
            populate: { path: 'authorId' },
          },
        ],
      },
    },
    {
      skip: !slug,
    },
  )

  const user = useAppSelector(state => state.user.user, shallowEqual)

  const [updateFn] = useUpdateArticleMutation()

  const contents = useMemo(() => {
    if (response?.payload.content) {
      const blocks = safeJsonParse<PartialBlock[]>(response.payload.content)
      return Array.isArray(blocks) ? blocks : []
    }
    return []
  }, [response?.payload])

  const article = response?.payload
  const isAuthor = article?.authorId === user?._id

  return (
    <Stack gap={8}>
      <PageTitle>{article?.title}</PageTitle>
      <PageContainer>
        <Loading loading={isFetching} />
        {article && (
          <>
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
                    <Chip
                      icon={<Compress />}
                      label={article.responses.length}
                    />
                    <Chip icon={<Visibility />} label={article.views} />
                    <Chip icon={<ThumbUp />} label={article.likes.length} />
                    <Chip label={formatDate(article.createdAt)} />
                  </Stack>
                </Stack>
                <Typography variant="h1">{response?.payload.title}</Typography>
              </Stack>
            </Stack>
          </>
        )}
      </PageContainer>
      {article && (
        <PageContainer>
          <Editor editable={false} data={contents} />
          <Stack justifyContent={'flex-end'} direction={'row'} gap={4}>
            <ActionButton
              startIcon={<Gavel />}
              disabled={isAuthor}
              linkTo={`/articles/new?responseTo=${article.slug}`}
            >
              Respond
            </ActionButton>

            <ActionButton
              type={article.likes.includes(user!._id) ? 'default' : 'outlined'}
              endIcon={<ThumbUp />}
              disabled={isAuthor}
              onClick={() => {
                updateFn({
                  id: article.id,
                  likes: article.likes.includes(user!._id)
                    ? article.likes.filter(id => id !== user!._id)
                    : [...article.likes, user!._id],
                })
              }}
            >
              {article.likes.length}
            </ActionButton>
          </Stack>
        </PageContainer>
      )}

      {!!article?.responses.length && (
        <PageContainer>
          <Typography variant="h2">Responses</Typography>
          {article.responses.map(response => (
            <Box>
              <Link to={`/articles/${response.slug}`}>{response.title}</Link>
            </Box>
          ))}
        </PageContainer>
      )}
    </Stack>
  )
}

export default ViewArticle
