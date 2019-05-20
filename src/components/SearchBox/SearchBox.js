import React from 'react'
import { ReactComponent as SearchIcon } from './search.svg'
import {
  Input,
  Button,
} from './SearchBox.style'

const SearchBox = () => (
  <>
    <Input placeholder={'O que você quer procurar na Hive?'} />
    <Button>
      <SearchIcon />
    </Button>
  </>
)

export default SearchBox