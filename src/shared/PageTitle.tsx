import { APP_NAME, APP_TAGLINE } from '@app/settings'
import { FC, PropsWithChildren } from 'react'
import { Helmet } from 'react-helmet-async'

const PageTitle: FC<PropsWithChildren> = ({ children }) => {
  const pageTitle = [children, APP_NAME, children ? undefined : APP_TAGLINE]
    .filter(Boolean)
    .join(' | ')
  return <Helmet title={pageTitle} />
}

export default PageTitle
