import { useAppSelector } from '@app/store'
import { conditionalArrayItem } from '@lib/helpers/utils'
import { userActions } from '@modules/users/control/slice'
import { AccountCircle } from '@mui/icons-material'
import MenuDropdown from '@shared/MenuDropdown'
import { ComponentProps, FC } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

const UserMenu: FC = () => {
  const user = useAppSelector((state) => state.user.user)
  const dispatch = useDispatch()
  const goto = useNavigate()

  const getMenuItems = () => {
    const items: ComponentProps<typeof MenuDropdown>['options'] = [
      ...conditionalArrayItem(!!user, {
        label: user?.email,
        onClick: () => goto(`/users/${user?.username}`),
      }),
    ]

    if (user) {
      items.push({
        label: 'Logout',
        onClick: () => dispatch(userActions.logout()),
      })
    } else {
      items.push({
        label: 'Login',
        onClick: () => goto('auth/login'),
      })
    }
    return items
  }

  return (
    <MenuDropdown
      buttonProps={{
        sx: { color: 'white' },
        startIcon: <AccountCircle />,
        children: user?.username,
      }}
      options={getMenuItems()}
    />
  )
}

export default UserMenu
