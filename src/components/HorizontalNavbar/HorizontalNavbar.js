import React from 'react'
import {
  Wrapper,
  Item,
} from './HorizontalNavbar.style'

const HorizontalNavbar = ({ items = ['[ITEM]'] }) => (
  <Wrapper>
    {items.map(item => (
      <Item>{item}</Item>
    ))}
    <Item activated>[ACTIVATED]</Item>
  </Wrapper>
)

export default HorizontalNavbar
