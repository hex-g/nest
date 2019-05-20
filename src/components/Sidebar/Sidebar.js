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
  userInfo,
  pages,
}) => (
    <Aside>
      <Menu>
        <ProfileContent isOpen={isOpen}>
          <UserImage image={userInfo.image} />
          <Username>{userInfo.username}</Username>
        </ProfileContent>
        <NavigationItems>
          {pages && pages.map(page => (
            <Item key={page.link}>
              <Link to={`/${page.link}`}>
                <ItemIcon icon={page.icon}/>
                <ItemTitle isOpen={isOpen}>{page.title}</ItemTitle>
              </Link>
            </Item>
          ))}
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