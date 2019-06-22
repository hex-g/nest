import React from 'react'
import { handleLogout } from '../../utils/token/token'
import { ReactComponent as ConfigIcon } from './settings.svg'
import { ReactComponent as Notification } from './notification.svg'
import { ReactComponent as LogOut } from './exit.svg'
import {
  Aside,
  Menu,
  ItemsMenu,
  Information,
  Item,
  ToggleArea,
  ToggleButton
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
          <Item isOpen={isOpen} onClick={() => handleInformationChange({type: 'notification'})}>
            <Notification />
          </Item>
          <Item isOpen={isOpen} onClick={() => handleInformationChange({type: 'configuration'})}>
            <ConfigIcon />
          </Item>
          <Item isOpen={isOpen} onClick={handleLogout}>
            <LogOut />
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