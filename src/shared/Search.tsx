import SearchIcon from '@mui/icons-material/Search'
import { alpha, InputBase, styled } from '@mui/material'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router'

const StyledSearch = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export const Search: FC = () => {
  const [term, setTerm] = useState('')
  const goto = useNavigate()

  const handleSearch = () => {
    const searchTerm = term.trim()
    if (searchTerm) {
      goto({
        pathname: 'articles',
        search: `search=${searchTerm}`,
      })
      setTerm('')
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <StyledSearch>
      <SearchIconWrapper>
        <SearchIcon onClick={handleSearch} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        value={term}
        onChange={event => setTerm(event.target.value)}
        onKeyDown={handleKeyDown}
      />
    </StyledSearch>
  )
}
