import { useGetArticlesQuery } from '@modules/articles/control/api'
import { useUploadMutation } from '@modules/gallery/api'
import { Avatar, Divider, Stack, Typography, useTheme } from '@mui/material'
import ArticlePreview from '@shared/ArticlePreview'
import ExpandableText from '@shared/ExpandableText'
import { HiddenInput } from '@shared/HiddenInput'
import Loading from '@shared/LinearIndeterminate'
import ListDisplay from '@shared/ListDisplay'
import PageContainer from '@shared/PageContainer'
import PageTitle from '@shared/PageTitle'
import { ChangeEvent, FC } from 'react'
import { useParams } from 'react-router'
import { useGetUserQuery, useUpdateUserMutation } from './control/api'

const UserProfile: FC = () => {
  const { username } = useParams()
  const theme = useTheme()

  const { data: userResponse } = useGetUserQuery(
    { name: username! },
    { skip: !username },
  )

  const [uploadFn] = useUploadMutation()
  const [updateFn] = useUpdateUserMutation()

  const profile = userResponse?.payload

  const { data: response, isFetching } = useGetArticlesQuery(
    {
      filters: [
        {
          field: 'authorId',
          operator: 'equals',
          value: profile?._id,
        },
      ],
      limit: 100,
      sort: 'createdAt,-1',
      populate: [
        {
          path: 'author',
        },
      ],
    },
    { skip: !username },
  )

  return (
    <Stack gap={8}>
      <PageTitle>{profile?.username}</PageTitle>
      <PageContainer>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          px={4}
          alignItems={'center'}
          gap={8}
        >
          <label htmlFor="upload">
            <HiddenInput
              type="file"
              id="upload"
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                if (!event.target.files) return

                uploadFn({ files: [event.target.files?.[0]] }).then(
                  response => {
                    if (response.data?.feedback.type === 'success')
                      updateFn({
                        username: profile!.username,
                        photo: response.data.payload[0].url,
                      })
                  },
                )
              }}
            />
            <Avatar
              children={
                <Typography variant="h1">
                  {profile?.username.charAt(0).toUpperCase()}
                </Typography>
              }
              src={profile?.photo}
              sx={{
                background: theme.palette.secondary.main,
                width: 100,
                height: 100,
                cursor: 'pointer',
              }}
            />
          </label>
          <Stack direction={'row'} flex={1} justifyContent={'space-between'}>
            <ListDisplay
              items={[
                {
                  primary: (
                    <Stack direction={'row'} gap={1}>
                      <span>First Name: </span>
                      <strong>{profile?.firstName || 'N/A'}</strong>
                    </Stack>
                  ),
                },
                {
                  primary: (
                    <Stack direction={'row'} gap={1}>
                      <span>Last Name: </span>
                      <strong>{profile?.lastName || 'N/A'}</strong>
                    </Stack>
                  ),
                },
              ]}
            />
            <ListDisplay
              items={[
                {
                  primary: (
                    <Stack direction={'row'} gap={1}>
                      <span>Username: </span>
                      <strong>{profile?.username}</strong>
                    </Stack>
                  ),
                },
                {
                  primary: (
                    <Stack direction={'row'} gap={1}>
                      <span>Email: </span>
                      <strong>{profile?.email}</strong>
                    </Stack>
                  ),
                },
              ]}
            />
          </Stack>
        </Stack>
        <Divider />
        <ExpandableText
          sx={{ p: 1 }}
          variant="body1"
          text={profile?.bio || 'N/A'}
        />
      </PageContainer>

      <PageContainer>
        <Loading loading={isFetching} />
        {response?.payload.docs.map(article => (
          <ArticlePreview article={article} />
        ))}
      </PageContainer>
    </Stack>
  )
}

export default UserProfile
