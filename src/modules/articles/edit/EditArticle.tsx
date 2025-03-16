import { FC } from 'react'
import { useParams } from 'react-router'
import { useGetArticleBySlugQuery } from '../control/api'
import NewArticle from '../new/NewArticle'
import Loading from '@shared/LinearIndeterminate'

const EditArticle: FC = () => {
  const { slug } = useParams()

  const { data: response, isFetching } = useGetArticleBySlugQuery(
    { slug: slug! },
    { skip: !slug },
  )

  if (isFetching) return <Loading />

  return <NewArticle editedArticle={response?.payload} />
}

export default EditArticle
