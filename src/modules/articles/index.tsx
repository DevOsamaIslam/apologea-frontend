import { FC } from 'react'
import { useGetArticlesQuery } from './control/api'
import PageContainer from '@shared/PageContainer'
import { Divider, Stack, Typography } from '@mui/material'
import ArticlePreview from '@shared/ArticlePreview'
import { useSearchParams } from 'react-router'
import PageTitle from '@shared/PageTitle'

const ArticlesPage: FC = () => {
  const [query] = useSearchParams()
  const search = query.get('search')

  const { data: response } = useGetArticlesQuery({
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
        {response?.payload.docs.map(article => (
          <ArticlePreview article={article} />
        ))}
      </Stack>
    </PageContainer>
  )
}

export default ArticlesPage
