import { formatDate } from '@lib/helpers/date'
import { useGetArticlesQuery } from '@modules/articles/control/api'
import { Box, Stack, Typography } from '@mui/material'
import ArticlePreview from '@shared/ArticlePreview'
import Carousel from '@shared/Carousel'
import Center from '@shared/Center'
import PageContainer from '@shared/PageContainer'
import { FC } from 'react'
import { Link } from 'react-router'
import PageTitle from '../../shared/PageTitle'

const Home: FC = () => {
  const { data: response } = useGetArticlesQuery({
    sort: 'createdAt,-1',
    limit: 15,
    populate: [{ path: 'author' }],
  })

  return (
    <Stack>
      <PageTitle></PageTitle>
      <Box height={'55vh'}>
        <Carousel
          items={response?.payload.docs || []}
          autoplay={3000}
          renderItem={article => {
            return (
              <Center key={article.id}>
                <Stack>
                  <Box
                    sx={{
                      position: 'relative',
                      textAlign: 'center',
                      color: 'white',
                      py: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: { xs: '30vw', md: '25vw' }, // Adjust for responsiveness
                        fontWeight: 'bold',
                        opacity: 0.1, // Faded effect
                        zIndex: -1,
                        userSelect: 'none',
                        lineHeight: 1,
                        color: 'secondary.dark',
                      }}
                      variant="h1"
                      component={'span'}
                    >
                      {article.title.charAt(0).toUpperCase()}
                    </Typography>
                  </Box>
                  <Box position={'relative'}>
                    <Link to={`/articles/${article.slug}`}>
                      <Typography
                        variant="h1"
                        color="white"
                        sx={{
                          fontSize:
                            article.title.length > 20 ? '3rem' : '10rem',
                        }}
                      >
                        {article.title}
                      </Typography>
                    </Link>
                    <Typography variant="caption" color="white">
                      <Stack
                        direction={'row'}
                        gap={0.5}
                        justifyContent={'center'}
                        fontSize={'1rem'}
                        alignItems={'baseline'}
                      >
                        <span>
                          By{' '}
                          <Link
                            to={`/users/${article.author?.username}`}
                            style={{
                              color: 'var(--secondary)',
                              fontWeight: 'bold',
                            }}
                          >
                            {article.author?.username}
                          </Link>
                          {' | '}
                        </span>
                        <Typography variant="body2">
                          Published on:
                          {formatDate(article.createdAt)}
                        </Typography>
                      </Stack>
                    </Typography>
                  </Box>
                </Stack>
              </Center>
            )
          }}
        />
      </Box>
      <PageContainer sx={{ maxWidth: '90vw' }}>
        <Stack gap={4}>
          {response?.payload.docs.map(article => (
            <ArticlePreview article={article} />
          ))}
        </Stack>
      </PageContainer>
    </Stack>
  )
}

export default Home
