import { MAX_EXCERPT_LENGTH, MAX_TITLE_LENGTH } from '@app/settings'
import { PartialBlock } from '@blocknote/core'
import {
  Alert,
  Box,
  Divider,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import ActionButton from '@shared/ActionButton'
import CharacterLimit from '@shared/CharacterLimit'
import Editor from '@shared/editor/Editor'
import PageContainer from '@shared/PageContainer'
import PageTitle from '@shared/PageTitle'
import { snackbar } from '@shared/snack-bar/GlobalSnackbar'
import { FC, memo, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import {
  useCreateArticleMutation,
  useGetArticleBySlugQuery,
  useUpdateArticleMutation,
} from '../control/api'
import { TArticle } from '../control/types'
import Space from '@shared/Space'
import TagsInput from '@shared/TagsInput'

const NewArticle: FC<{ editedArticle?: TArticle }> = ({ editedArticle }) => {
  const [query] = useSearchParams()
  const responseTo = query.get('responseTo')
  const [title, setTitle] = useState(editedArticle?.title || '')
  const [tags, setTags] = useState(editedArticle?.tags)
  const [excerpt, setExcerpt] = useState(editedArticle?.excerpt || '')
  const [contents, setContents] = useState<PartialBlock[]>(
    editedArticle?.content ? JSON.parse(editedArticle.content) : [],
  )
  const [createFn] = useCreateArticleMutation()

  const [updateFn] = useUpdateArticleMutation()

  const isEdit = !!editedArticle

  const { data: response } = useGetArticleBySlugQuery(
    { slug: responseTo! },
    { skip: !responseTo || isEdit },
  )

  const counterArticle = response?.payload

  const onSubmit = async (published: boolean) => {
    if (!title.trim())
      return snackbar({ severity: 'error', message: 'Title is required' })
    if (!excerpt.trim())
      return snackbar({ severity: 'error', message: 'Excerpt is required' })
    if (isEdit) {
      return updateFn({
        ...editedArticle,
        title,
        excerpt,
        content: JSON.stringify(contents),
        published,
      })
    }
    createFn({
      title,
      content: JSON.stringify(contents),
      excerpt,
      published,
      responseToId: counterArticle?.id,
    })
  }

  const isResponse = !!counterArticle

  useEffect(() => {
    if (counterArticle) setExcerpt(`Response to ${counterArticle.title}`)
  }, [counterArticle])

  const pageTitle = (() => {
    if (isEdit) return `Edit - ${editedArticle.title}`

    if (isResponse) return `Response to - ${counterArticle.title}`

    return 'New Article'
  })()

  return (
    <PageContainer sx={{ flexDirection: 'row' }}>
      <PageTitle>{pageTitle}</PageTitle>
      <Stack gap={4} sx={{ width: '100%' }}>
        {isEdit && <Alert severity="info" children="Editing" />}
        <TextField
          slotProps={{
            htmlInput: {
              maxLength: MAX_TITLE_LENGTH,
              sx: {
                fontSize: '2rem',
                fontWeight: 'bold',
              },
            },
          }}
          placeholder={'Article title'}
          variant="standard"
          value={title}
          onChange={event => setTitle(event.target.value)}
          multiline
          required
        />
        <TextField
          label="Excerpt - The text to show in the preview."
          value={excerpt}
          onChange={event => setExcerpt(event.target.value)}
          required
          multiline
          maxRows={3}
          slotProps={{ htmlInput: { maxLength: MAX_EXCERPT_LENGTH } }}
          helperText={
            <CharacterLimit current={excerpt.length} max={MAX_EXCERPT_LENGTH} />
          }
        />
        <Box flex={1}>
          <Editor onChange={setContents} data={contents} />
        </Box>
        <Divider />

        <Space justifyContent={'space-between'} alignItems={'flex-end'}>
          <Space alignItems={'center'} maxWidth={'35vw'}>
            <Typography>Tags: </Typography>
            <TagsInput value={tags} onChange={setTags} />
          </Space>

          <Box
            display={'flex'}
            justifyContent={'flex-end'}
            columnGap={2}
            flex={1}
          >
            <ActionButton type="outlined" onClick={() => onSubmit(false)}>
              Save as Draft
            </ActionButton>
            <ActionButton type="submit" onClick={() => onSubmit(true)}>
              Publish
            </ActionButton>
          </Box>
        </Space>
      </Stack>
    </PageContainer>
  )
}

export default memo(NewArticle)
