import theme from '@app/theme'
import {
  BlockNoteSchema,
  defaultBlockSchema,
  defaultBlockSpecs,
  filterSuggestionItems,
  PartialBlock,
} from '@blocknote/core'
import '@blocknote/core/fonts/inter.css'
import { BlockNoteView, Theme as EditorTheme } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'
import {
  getDefaultReactSlashMenuItems,
  SuggestionMenuController,
  useCreateBlockNote,
} from '@blocknote/react'
import { useUploadMutation } from '@modules/gallery/api'
import { Theme, useTheme } from '@mui/material'
import { FC } from 'react'
import { QuoteBlock } from './custom-blocks/quote/Quote'
import { insertQuote } from './custom-blocks/quote/config'
import { EmbedYoutube } from './custom-blocks/youtube/EmbedYoutube'
import { insertYoutube } from './custom-blocks/youtube/config'

const placeholderBlock = [{ type: 'paragraph' }] as PartialBlock[]

// Our schema with block specs, which contain the configs and implementations for blocks
// that we want our editor to use.
const schema = BlockNoteSchema.create({
  blockSpecs: {
    ...defaultBlockSpecs,
    // custom blocks
    quote: QuoteBlock,
    youtube: EmbedYoutube,
  },
})

interface IProps {
  data: PartialBlock[] | undefined
  onChange?: (data: PartialBlock[]) => void
  editable?: boolean
}
const Editor: FC<IProps> = ({ onChange, data, editable = true }) => {
  const theme = useTheme()
  const [uploadFn] = useUploadMutation()

  const editor = useCreateBlockNote({
    schema,
    initialContent: [...(data?.length ? data : placeholderBlock)],
    uploadFile: async file => {
      return await uploadFn({ files: [file] }).then(response => {
        return response.data?.payload[0].url || ''
      })
    },
  })

  return (
    <BlockNoteView
      editor={editor}
      editable={editable}
      onChange={() => {
        // @ts-expect-error...
        onChange?.(editor.document)
      }}
      theme={getEditorTheme(theme)}
    >
      <SuggestionMenuController
        triggerCharacter="/"
        getItems={async query =>
          filterSuggestionItems(
            [
              ...getDefaultReactSlashMenuItems(editor),
              insertQuote(editor),
              insertYoutube(editor),
            ],
            query,
          )
        }
      />
    </BlockNoteView>
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
