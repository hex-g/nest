import React from 'react'
import { ReactComponent as SearchIcon } from './search.svg'
import {
  Input,
  Button,
} from './SearchBox.style'

const SearchBox = () => (
  <>
    <Input />
    <Button>
      <SearchIcon />
    </Button>
  </>
)

export default SearchBox