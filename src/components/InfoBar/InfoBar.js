import React from 'react'
import { 
  Aside,
  Menu,
  Item,
  ToggleArea,
  ToggleButton,
} from './InfoBar.style'

const InfoBar = ({
  isOpen,
  handleToggleInformation,
}) => (
  <Aside>
    <ToggleArea>
      <ToggleButton isOpen={isOpen} onClick={() => handleToggleInformation()} />
    </ToggleArea>
    <Menu isOpen={isOpen}>
      <Item />
      <Item />
      <Item />
    </Menu>
  </Aside>
)

export default InfoBar