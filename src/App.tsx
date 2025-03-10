import { AppRouter } from '@app/router'
import { useAppSelector } from '@app/store'
import { usePingQuery } from '@modules/users/control/api'
import { FC, useEffect } from 'react'
import { shallowEqual } from 'react-redux'
import { useNavigate } from 'react-router'

const App: FC = () => {
  usePingQuery()
  const redirect = useAppSelector(
    (state) => state.app.redirectPath,
    shallowEqual,
  )
  const goto = useNavigate()

  useEffect(() => {
    if (redirect) goto(redirect)
  }, [redirect])

  return <AppRouter />
}

export default App
