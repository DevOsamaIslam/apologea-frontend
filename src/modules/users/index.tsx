import { useAppSelector } from '@app/store'
import { useGetArticlesQuery } from '@modules/articles/control/api'
import { Email, Person } from '@mui/icons-material'
import { Avatar, Divider, Stack, Typography, useTheme } from '@mui/material'
import ArticlePreview from '@shared/ArticlePreview'
import Loading from '@shared/LinearIndeterminate'
import ListDisplay from '@shared/ListDisplay'
import PageContainer from '@shared/PageContainer'
import { FC } from 'react'

const UserProfile: FC = () => {
  const user = useAppSelector((state) => state.user.user)
  const theme = useTheme()

  const { data: response, isFetching } = useGetArticlesQuery({
    filters: [
      {
        field: 'authorId',
        operator: 'equals',
        value: user?._id,
      },
    ],
    limit: 100,
    sort: 'createdAt,-1',
  })

  return (
    <Stack gap={8}>
      <PageContainer>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          px={8}
          alignItems={'center'}
        >
          <Avatar
            children={
              <Typography variant="h1">
                {user?.username.charAt(0).toUpperCase()}
              </Typography>
            }
            sx={{
              background: theme.palette.secondary.main,
              width: 100,
              height: 100,
            }}
          />
          <Stack direction={'row'}>
            <ListDisplay
              items={[
                {
                  primary: 'First Name',
                  secondary: user?.firstName,
                  icon: <Person />,
                },
                {
                  primary: 'Last Name',
                  secondary: user?.lastName,
                  icon: <Person />,
                },
              ]}
            />
            <ListDisplay
              items={[
                {
                  primary: 'Username',
                  secondary: user?.username,
                  icon: <Person />,
                },
                {
                  primary: 'Email',
                  secondary: user?.email,
                  icon: <Email />,
                },
              ]}
            />
          </Stack>
        </Stack>
        <Divider />
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          eligendi cumque sunt eos adipisci eaque numquam repudiandae veritatis
          repellat ex, libero impedit expedita quibusdam nam. Qui perferendis
          esse blanditiis accusantium?
        </Typography>
      </PageContainer>

      <PageContainer>
        <Loading loading={isFetching} />
        {response?.payload.docs.map((article) => (
          <ArticlePreview article={article} />
        ))}
      </PageContainer>
    </Stack>
  )
}

export default UserProfile
