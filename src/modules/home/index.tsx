import { formatDate } from '@lib/helpers/date'
import { useGetArticlesQuery } from '@modules/articles/control/api'
import { Box, Stack, Typography } from '@mui/material'
import ArticlePreview from '@shared/ArticlePreview'
import Carousel from '@shared/Carousel'
import Center from '@shared/Center'
import Meta from '@shared/Meta'
import PageContainer from '@shared/PageContainer'
import { FC } from 'react'

const Home: FC = () => {
  const { data: response } = useGetArticlesQuery({
    sort: 'createdAt,-1',
    limit: 5,
    populate: [{ path: 'author' }],
  })

  return (
    <Stack>
      <Meta title="Home" />
      <Box height={'60vh'}>
        <Carousel
          items={response?.payload.docs || []}
          renderItem={(item) => {
            return (
              <Center key={item.id}>
                <Stack>
                  <Typography
                    variant="h1"
                    color="white"
                    sx={{ fontSize: '5rem' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="caption" color="white">
                    <Stack direction={'row'} gap={0.5}>
                      Published on:
                      <em>{formatDate(item.createdAt)}</em>
                    </Stack>
                  </Typography>
                </Stack>
              </Center>
            )
          }}
        />
      </Box>
      <PageContainer sx={{ maxWidth: '90vw' }}>
        <Stack gap={4}>
          {response?.payload.docs.map((article) => (
            <ArticlePreview article={article} />
          ))}
        </Stack>
      </PageContainer>
    </Stack>
  )
}

export default Home
