import { Box, Button, Input, Stack } from '@mui/material'
import Editor from '@shared/editor/Editor'
import PageContainer from '@shared/PageContainer'
import { FC, useState } from 'react'
import { useCreateArticleMutation } from '../control/api'
import { IBlock } from '../control/types'
const NewArticle: FC = () => {
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState<IBlock[]>([])
  const [createFn] = useCreateArticleMutation()

  const onSubmit = async (published: boolean) => {
    createFn({
      title,
      content: JSON.stringify(contents),
      published,
    })
  }

  return (
    <PageContainer>
      <Stack gap={4}>
        <Input
          placeholder="Article title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          sx={{
            width: '100%',
            fontSize: '3rem',
          }}
        />
        <Editor onChange={setContents} data={contents} />
        <Box display={'flex'} justifyContent={'flex-end'}>
          <Button onClick={() => onSubmit(false)}>Save as Draft</Button>
          <Button variant="contained" onClick={() => onSubmit(true)}>
            Publish
          </Button>
        </Box>
      </Stack>
    </PageContainer>
  )
}

export default NewArticle
