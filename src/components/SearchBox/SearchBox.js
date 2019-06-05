import React from 'react'
import { ReactComponent as SearchIcon } from './search.svg'
import {
  Input,
  Button,
  Search
} from './SearchBox.style'

const SearchBox = () => (
  <Search>
    <Input placeholder={'O que você quer procurar na Hive?'} />
    <Button>
      <SearchIcon />
    </Button>
  </Search>
)

export default SearchBox