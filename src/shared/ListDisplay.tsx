import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'

interface IListItem<T> {
  primary: string
  secondary?: string
  icon?: React.ReactNode
  data?: T
}

interface ListWrapperProps<T> {
  items: IListItem<T>[]
  renderItem?: (item: IListItem<T>) => React.ReactNode
}

const ListDisplay = <T,>({ items, renderItem }: ListWrapperProps<T>) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
