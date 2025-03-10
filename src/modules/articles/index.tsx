import { FC } from 'react'
import { useGetArticlesQuery } from './control/api'
import PageContainer from '@shared/PageContainer'
import { Stack } from '@mui/material'
import ArticlePreview from '@shared/ArticlePreview'

const ArticlesPage: FC = () => {
  const { data: response } = useGetArticlesQuery({
    limit: 10,
    sort: 'createdAt,-1',
    populate: [
      {
        path: 'author',
      },
    ],
  })

  return (
    <PageContainer>
      <Stack gap={4}>
        {response?.payload.docs.map((article) => (
          <ArticlePreview article={article} />
        ))}
      </Stack>
    </PageContainer>
  )
}

export default ArticlesPage
