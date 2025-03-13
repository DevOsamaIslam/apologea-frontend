import settings from '@app/settings'
import { PartialBlock } from '@blocknote/core'
import {
  Box,
  Divider,
  Input,
  Stack,
  TextareaAutosize,
  TextField,
} from '@mui/material'
import ActionButton from '@shared/ActionButton'
import Editor from '@shared/editor/Editor'
import PageContainer from '@shared/PageContainer'
import { FC, useState } from 'react'
import {
  useCreateArticleMutation,
  useGetArticleBySlugQuery,
} from '../control/api'
import PageTitle from '@shared/PageTitle'
import { useSearchParams } from 'react-router'
const NewArticle: FC = () => {
  const [query] = useSearchParams()
  const responseTo = query.get('responseTo')
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [contents, setContents] = useState<PartialBlock[]>([])
  const [createFn] = useCreateArticleMutation()

  const { data: response } = useGetArticleBySlugQuery(
    { slug: responseTo! },
    { skip: !responseTo },
  )

  const counterArticle = response?.payload

  const onSubmit = async (published: boolean) => {
    createFn({
      title,
      content: JSON.stringify(contents),
      published,
    })
  }

  const isResponse = !!counterArticle

  return (
    <PageContainer sx={{ flexDirection: 'row' }}>
      <PageTitle>
        {isResponse ? `Response to ${responseTo}` : 'New Article'}
      </PageTitle>
      <Stack gap={4} sx={{ width: '100%' }}>
        <Input
          slotProps={{ input: { maxLength: settings.MAX_TITLE_LENGTH } }}
          placeholder={'Article title'}
          defaultValue={isResponse ? `Title - Response to ${responseTo}` : ''}
          value={title}
          onChange={event => setTitle(event.target.value)}
          multiline
          sx={{
            width: '100%',
            fontSize: '3rem',
          }}
          required
        />
        <TextField label="Excerpt" required>
          <TextareaAutosize
            maxRows={4}
            value={excerpt}
            onChange={event => setExcerpt(event.target.value)}
          />
        </TextField>
        <Box flex={1}>
          <Editor onChange={setContents} data={contents} />
        </Box>
        <Divider />
        <Box display={'flex'} justifyContent={'flex-end'} columnGap={2}>
          <ActionButton type="outlined" onClick={() => onSubmit(false)}>
            Save as Draft
          </ActionButton>
          <ActionButton type="submit" onClick={() => onSubmit(true)}>
            Publish
          </ActionButton>
        </Box>
      </Stack>
    </PageContainer>
  )
}

export default NewArticle
