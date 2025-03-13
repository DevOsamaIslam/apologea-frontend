import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import { ComponentProps } from 'react'

interface IListItem<T> {
  primary: React.ReactNode
  secondary?: React.ReactNode
  icon?: React.ReactNode
  data?: T
}

interface ListWrapperProps<T> extends ComponentProps<typeof List> {
  items: IListItem<T>[]
  renderItem?: (item: IListItem<T>) => React.ReactNode
}

const ListDisplay = <T,>({
  items,
  renderItem,
  ...listProps
}: ListWrapperProps<T>) => {
  return (
    <List {...listProps}>
      {items.map((item, index) =>
        renderItem ? (
          renderItem(item)
        ) : (
          <ListItem key={index}>
            {item.icon && (
              <ListItemAvatar>
                <Avatar>{item.icon}</Avatar>
              </ListItemAvatar>
            )}
            <ListItemText primary={item.primary} secondary={item.secondary} />
          </ListItem>
        ),
      )}
    </List>
  )
}

export default ListDisplay
