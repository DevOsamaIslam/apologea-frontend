import React from 'react'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'

type TDropdownOption = {
  label: string
  value: string | number
}

type TDropdownProps = {
  label: string
  options: TDropdownOption[]
  value: string | number
  onChange: (value: string | number) => void
  fullWidth?: boolean
  disabled?: boolean
}

const Dropdown: React.FC<TDropdownProps> = ({
  label,
  options,
  value,
  onChange,
  fullWidth = true,
  disabled = false,
}) => {
  const handleChange = (event: SelectChangeEvent<string | number>) => {
    onChange(event.target.value)
  }

  return (
    <FormControl fullWidth={fullWidth} disabled={disabled}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={handleChange} label={label}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default Dropdown
