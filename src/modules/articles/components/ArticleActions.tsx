import { useAppSelector } from '@app/store'
import { Gavel, ThumbUp } from '@mui/icons-material'
import { Stack } from '@mui/material'
import ActionButton from '@shared/ActionButton'
import { FC } from 'react'
import {
  useDeleteArticleMutation,
  useUpdateArticleMutation,
} from '../control/api'

const ArticleActions: FC<{
  deleteFn: ReturnType<typeof useDeleteArticleMutation>[0]
  updateFn: ReturnType<typeof useUpdateArticleMutation>[0]
}> = ({ deleteFn, updateFn }) => {
  const { data: article } = useAppSelector(state => state.article)
  const user = useAppSelector(state => state.user.user)
  const isAuthor = user?._id === article?.authorId

  if (!article) return null

  return (
    <Stack justifyContent={'flex-end'} direction={'row'} gap={4} pt={2}>
      <ActionButton
        type="delete"
        confirmMessage
        onClick={() => {
          deleteFn(article.id)
        }}
        hidden={article.authorId !== user?._id}
      >
        Delete
      </ActionButton>
      <ActionButton
        startIcon={<Gavel />}
        disabled={isAuthor}
        linkTo={`/articles/new?responseTo=${article.slug}`}
      >
        Respond
      </ActionButton>

      <ActionButton
        type={article.likes.includes(user!._id) ? 'default' : 'outlined'}
        endIcon={<ThumbUp />}
        disabled={isAuthor}
        onClick={() => {
          updateFn({
            id: article.id,
            likes: article.likes.includes(user!._id)
              ? article.likes.filter(id => id !== user!._id)
              : [...article.likes, user!._id],
          })
        }}
      >
        {article.likes.length}
      </ActionButton>
    </Stack>
  )
}

export default ArticleActions
