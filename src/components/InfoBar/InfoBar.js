import React from 'react'
import { ReactComponent as ConfigIcon } from './settings.svg'
import {
  Aside,
  Menu,
  ItemsMenu,
  Information,
  Item,
  ToggleArea,
  ToggleButton,
} from './InfoBar.style'

const InfoBar = ({
  isOpen,
  handleToggleInformation,
  handleInformationChange,
  information,
}) => (
    <Aside>
      <ToggleArea>
        <ToggleButton isOpen={isOpen} onClick={() => handleToggleInformation()} />
      </ToggleArea>
      <Menu>
        <ItemsMenu isOpen={isOpen}>
          <Item onClick={() => handleInformationChange({type: 'configuration'})}>
            <ConfigIcon />
          </Item>
        </ItemsMenu>
        {isOpen && (
          <Information>
            {information}
          </Information>
        )}
      </Menu>
    </Aside>
  )

export default InfoBar