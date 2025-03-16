import { Chip, TextField, Box } from '@mui/material'
import { useState } from 'react'

interface TagsInputProps {
  value: string[] | undefined
  onChange: (tags: string[]) => void
  placeholder?: string
}

const TagsInput: React.FC<TagsInputProps> = ({
  value,
  onChange,
  placeholder = 'Add a tag',
}) => {
  const [inputValue, setInputValue] = useState('')

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === 'Tab') {
      event.preventDefault()
      const trimmedValue = inputValue.trim()
      if (trimmedValue && !value?.includes(trimmedValue)) {
        onChange([...(value || []), trimmedValue])
      }
      setInputValue('')
    }
  }

  const handleDelete = (tagToDelete: string) => {
    onChange(value!.filter(tag => tag !== tagToDelete))
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
        alignItems: 'center',
        width: '100%',
      }}
    >
      {value?.map(tag => (
        <Chip key={tag} label={tag} onDelete={() => handleDelete(tag)} />
      ))}
      <TextField
        variant="outlined"
        size="small"
        placeholder={placeholder}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        sx={{ minWidth: 120 }}
      />
    </Box>
  )
}

export default TagsInput
