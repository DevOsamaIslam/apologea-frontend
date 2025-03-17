import { PartialBlock } from '@blocknote/core'
import { Box, Divider, Stack, Typography } from '@mui/material'
import Center from '@shared/Center'
import Loading from '@shared/LinearIndeterminate'
import PageContainer from '@shared/PageContainer'
import PageTitle from '@shared/PageTitle'
import Editor from '@shared/editor/Editor'
import { FC, useMemo } from 'react'
import { Link, useParams } from 'react-router'
import { safeJsonParse } from 'safe-json-utils'
import ArticleActions from '../components/ArticleActions'
import ArticleHeader from '../components/ArticleHeader'
import {
  useDeleteArticleMutation,
  useGetArticleBySlugQuery,
  useUpdateArticleMutation,
} from '../control/api'

const ViewArticle: FC = () => {
  const { slug = '' } = useParams<{ slug: string }>()

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

  const article = response?.payload

  const [updateFn] = useUpdateArticleMutation()

  const [deleteFn] = useDeleteArticleMutation()

  const contents = useMemo(() => {
    if (response?.payload?.content) {
      const blocks = safeJsonParse<PartialBlock[]>(response.payload.content)
      return Array.isArray(blocks) ? blocks : []
    }
    return []
  }, [response?.payload])

  return (
    <Stack gap={8}>
      <PageTitle>{article?.title}</PageTitle>
      <PageContainer>
        <Loading loading={isFetching} />
        {!article && (
          <Center py={20}>
            <Typography variant="h1">Article not found :(</Typography>
          </Center>
        )}
        <ArticleHeader />
      </PageContainer>
      {article && (
        <PageContainer>
          <Editor editable={false} data={contents} />
          <Divider />
          <ArticleActions deleteFn={deleteFn} updateFn={updateFn} />
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
