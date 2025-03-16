import { BlockNoteEditor, insertOrUpdateBlock } from '@blocknote/core'
import { FormatQuote } from '@mui/icons-material'

export const insertQuote = (editor: BlockNoteEditor<any>) => ({
  title: 'Quote',
  onItemClick: () => {
    insertOrUpdateBlock(editor, {
      type: 'quote',
    })
  },
  aliases: ['quote', 'citation', 'blockquote', 'reference'],
  group: 'basic-blocks',
  icon: <FormatQuote />,
})
