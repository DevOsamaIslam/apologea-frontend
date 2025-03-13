import theme from '@app/theme'
import { PartialBlock } from '@blocknote/core'
import '@blocknote/core/fonts/inter.css'
import { BlockNoteView, Theme as EditorTheme } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'
import { useCreateBlockNote } from '@blocknote/react'
import { useUploadMutation } from '@modules/gallery/api'
import { Theme, useTheme } from '@mui/material'
import { FC } from 'react'

const placeholderBlock = [{ type: 'paragraph' }] as PartialBlock[]

interface IProps {
  data: PartialBlock[] | undefined
  onChange?: (data: PartialBlock[]) => void
  editable?: boolean
}
const Editor: FC<IProps> = ({ onChange, data, editable = true }) => {
  const theme = useTheme()
  const [uploadFn] = useUploadMutation()

  const editor = useCreateBlockNote({
    initialContent: [...(data?.length ? data : placeholderBlock)],
    uploadFile: async (file) => {
      return await uploadFn({ files: [file] }).then((response) => {
        return response.data?.payload[0].url || ''
      })
    },
  })

  return (
    <BlockNoteView
      editor={editor}
      editable={editable}
      onChange={() => {
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
      background: theme.palette.background.paper,
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
