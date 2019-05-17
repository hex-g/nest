import React from 'react'
import { Link } from 'react-router-dom'
import {
  Aside,
  Menu,
  ProfileContent,
  UserImage,
  Username,
  NavigationItems,
  Item,
  ItemIcon,
  ItemTitle,
  Logo,
  LogoWrapper,
  ToggleArea,
  ToggleButton,
} from './Sidebar.style'

const Sidebar = ({
  isOpen,
  handleToggleNavigation,
}) => (
  <Aside>
    <Menu>
      <ProfileContent isOpen={isOpen}>
        <UserImage />
        <Username>USERNAME</Username>
      </ProfileContent>
      <NavigationItems>
        <Item>
          <Link to={`/ITEM`}>
            <ItemIcon />
            <ItemTitle isOpen={isOpen}>ITEM</ItemTitle>
          </Link>
        </Item>
      </NavigationItems>
      <LogoWrapper isOpen={isOpen}>
        <Logo />
      </LogoWrapper>
    </Menu>
    <ToggleArea>
      <ToggleButton onClick={() => handleToggleNavigation()} isOpen={isOpen} />
    </ToggleArea>
  </Aside>
)

export default Sidebar