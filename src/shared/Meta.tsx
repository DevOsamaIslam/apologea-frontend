import { APP_NAME } from '@app/settings'
import { FC } from 'react'
import { Helmet, HelmetProps } from 'react-helmet-async'

const Meta: FC<HelmetProps> = ({ title, ...rest }) => {
  const pageTitle = [title, APP_NAME].join(' | ')
  return <Helmet title={pageTitle} {...rest} />
}

export default Meta
