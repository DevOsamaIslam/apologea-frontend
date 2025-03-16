import { BlockNoteEditor, insertOrUpdateBlock } from '@blocknote/core'
import { YouTube } from '@mui/icons-material'

export const insertYoutube = (editor: BlockNoteEditor<any>) => ({
  title: 'Youtube',
  onItemClick: () => {
    insertOrUpdateBlock(editor, {
      type: 'youtube',
    })
  },
  icon: <YouTube />,
})
