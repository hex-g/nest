import React from 'react'
import MugshotImage from '../../components/MugshotImage'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/Hive Isologo.svg'
import {
  Aside,
  Menu,
  ProfileContent,
  UserImage,
  Username,
  NavigationItems,
  Item,
  ItemTitle,
  LogoWrapper,
  ToggleArea,
  ToggleButton,
} from './Sidebar.style'

const Sidebar = ({ isOpen, handleToggleNavigation, userInfo, pages }) =>{
  const MugshotSrc = MugshotImage()
  return (
    <Aside isOpen={isOpen}>
      <Menu>
        <ProfileContent isOpen={isOpen}>
          <Link to={`/profile`}>
            <UserImage src={MugshotSrc} />
          </Link>
            <Username>{userInfo.username}</Username>
        </ProfileContent>
        <NavigationItems>
          {pages &&
            pages.map(page => (
              <Item key={page.link}>
                <Link to={`/${page.link}`}>
                  {page.icon}
                  <ItemTitle isOpen={isOpen}>{page.title}</ItemTitle>
                </Link>
              </Item>
            ))}
        </NavigationItems>
        <LogoWrapper>
          <Link to={`/`}>
            <Logo />
          </Link>
        </LogoWrapper>
      </Menu>
      <ToggleArea>
        <ToggleButton onClick={() => handleToggleNavigation()} isOpen={isOpen} />
      </ToggleArea>
    </Aside>
  )
}
export default Sidebar
