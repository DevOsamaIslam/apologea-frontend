import { Divider, Stack, Typography } from '@mui/material'
import ArticlePreview from '@shared/ArticlePreview'
import PageContainer from '@shared/PageContainer'
import PageTitle from '@shared/PageTitle'
import { FC } from 'react'
import { useSearchParams } from 'react-router'
import { useGetArticlesStreamInfiniteQuery } from './control/api'
import ActionButton from '@shared/ActionButton'

const ArticlesPage: FC = () => {
  const [query] = useSearchParams()
  const search = query.get('search')

  const {
    data: response,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetArticlesStreamInfiniteQuery({
    limit: 10,
    sort: 'createdAt,-1',
    populate: [
      {
        path: 'author',
      },
    ],
    filters: !search
      ? []
      : [
          {
            field: 'content',
            operator: 'contains',
            value: search,
          },
        ],
  })

  const allArticles = response?.pages.map(page => page.payload.docs).flat()

  const hasNextPage =
    response?.pages[response.pages.length - 1].payload.hasNextPage

  return (
    <PageContainer>
      <PageTitle>Articles</PageTitle>
      {search && (
        <>
          <Typography variant="h2">
            Search: <span style={{ color: 'var(--primary)' }}>{search}</span>
          </Typography>
          <Divider />
        </>
      )}
      <Stack gap={4}>
        {allArticles?.map(article => (
          <ArticlePreview article={article} />
        ))}
        <ActionButton
          type="outlined"
          onClick={fetchNextPage}
          loading={isFetchingNextPage}
          hidden={!hasNextPage}
        >
          Load more
        </ActionButton>
      </Stack>
    </PageContainer>
  )
}

export default ArticlesPage
