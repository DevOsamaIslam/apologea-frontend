import { AppRouter } from '@app/router'
import { useAppSelector } from '@app/store'
import { appSlice } from '@app/store/app.slice'
import { usePingQuery } from '@modules/users/control/api'
import { FC, useEffect } from 'react'
import { shallowEqual, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

const App: FC = () => {
  usePingQuery()
  const redirect = useAppSelector(
    (state) => state.app.redirectPath,
    shallowEqual,
  )
  const dispatch = useDispatch()
  const goto = useNavigate()

  useEffect(() => {
    if (redirect) {
      goto(redirect)
      dispatch(appSlice.actions.redirect(''))
    }
  }, [redirect])

  return <AppRouter />
}

export default App
