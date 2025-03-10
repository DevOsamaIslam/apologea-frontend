import { Avatar, Stack, Typography, useTheme } from '@mui/material'
import Loading from '@shared/LinearIndeterminate'
import PageContainer from '@shared/PageContainer'
import Editor from '@shared/editor/Editor'
import { FC, useMemo } from 'react'
import { useParams } from 'react-router'
import { useGetArticleBySlugQuery } from '../control/api'
import { IBlock } from '../control/types'
import { safeJsonParse } from 'safe-json-utils'

const ViewArticle: FC = () => {
  const { slug = '' } = useParams<{ slug: string }>()
  const theme = useTheme()

  const { data: response, isFetching } = useGetArticleBySlugQuery(
    { slug, queryParams: { populate: [{ path: 'author' }] } },
    {
      skip: !slug,
    },
  )

  const contents = useMemo(() => {
    if (response?.payload.content) {
      const blocks = safeJsonParse<IBlock[]>(response.payload.content)
      return Array.isArray(blocks) ? blocks : []
    }
    return []
  }, [response?.payload])

  return (
    <Stack gap={8}>
      <PageContainer>
        <Loading loading={isFetching} />
        {response && (
          <>
            <Stack direction={'row'} gap={4} alignItems={'center'}>
              <Avatar
                sx={{
                  background: theme.palette.secondary.main,
                  color: 'white',
                  width: 100,
                  height: 100,
                }}
                children={
                  <Typography variant="h1">
                    {response.payload.author?.username.charAt(0).toUpperCase()}
                  </Typography>
                }
              />

              <Stack gap={1}>
                <Typography variant="h1">{response?.payload.title}</Typography>
                <Typography variant="subtitle2">
                  <Stack direction={'row'} gap={0.5}>
                    By
                    <span style={{ color: 'var(--secondary)' }}>
                      {response.payload.author?.username}
                    </span>
                  </Stack>
                </Typography>
              </Stack>
            </Stack>
          </>
        )}
      </PageContainer>
      {response && (
        <PageContainer>
          <Editor editable={false} data={contents} />
        </PageContainer>
      )}
    </Stack>
  )
}

export default ViewArticle
