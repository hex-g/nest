import React from 'react'
import { ReactComponent as SearchIcon } from './search.svg'
import {
  Wrapper,
  Input,
  Button,
} from './SearchBox.style'

const SearchBox = () => (
  <Wrapper>
    <Input />
    <Button>
      <SearchIcon />
    </Button>
  </Wrapper>
)

export default SearchBox