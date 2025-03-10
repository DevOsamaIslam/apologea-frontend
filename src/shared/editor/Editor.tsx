import theme from '@app/theme'
import { Block } from '@blocknote/core'
import '@blocknote/core/fonts/inter.css'
import { BlockNoteView, Theme as EditorTheme } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'
import { useCreateBlockNote } from '@blocknote/react'
import { IBlock } from '@modules/articles/control/types'
import { Theme, useTheme } from '@mui/material'
import { FC } from 'react'

interface IProps {
  data: IBlock[]
  onChange?: (data: IBlock[]) => void
  editable?: boolean
}
const Editor: FC<IProps> = ({ onChange, data, editable = true }) => {
  const theme = useTheme()
  const placeholder = data.length ? [] : [{ type: 'paragraph' }]

  const editor = useCreateBlockNote({
    // @ts-expect-error...
    initialContent: [...data, ...placeholder],
  })

  // Renders the editor instance using a React component.
  return (
    <BlockNoteView
      editor={editor}
      editable={editable}
      onChange={() => {
        // @ts-expect-error...
        onChange?.(editor.document)
      }}
      theme={getEditorTheme(theme)}
    />
  )
}

const getEditorTheme = (appTheme: Theme): EditorTheme => ({
  borderRadius: appTheme.shape.borderRadius,
  colors: {
    border: theme.palette.divider,
    editor: {
      background: theme.palette.background.default,
      text: appTheme.palette.text.primary,
    },
    menu: {
      background: appTheme.palette.background.default,
      text: appTheme.palette.text.primary,
    },
    hovered: {
      background: theme.palette.background.paper,
      text: appTheme.palette.primary.main,
    },
    selected: {
      background: theme.palette.primary.main,
      text: appTheme.palette.text.primary,
    },
    disabled: {
      background: theme.palette.divider,
    },
    tooltip: {
      background: theme.palette.primary.light,
      text: appTheme.palette.background.default,
    },
  },
  fontFamily: appTheme.typography.fontFamily,
})

export default Editor
