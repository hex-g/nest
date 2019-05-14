import React from 'react'
import { Link } from 'react-router-dom'
import {
  Sidebar,
  Menu,
  ProfileContent,
  UserPicture,
  UserName,
  Navigation,
  NavItem,
  NavItemImage,
  Logo,
  ToggleContainer,
  OpenButton,
  NavTitle
} from './Navbar.style'

const Navbar = ({
  username,
  pages,
  isOpen,
  handleNavigationBar,
}) => {

  return (
    <Sidebar>
      <Menu>
        <div>
          <ProfileContent isOpen={isOpen}>
            <UserPicture />
            <UserName>{username}</UserName>
          </ProfileContent>
          <Navigation>
            <ul>
              {pages.map(page => (
                <NavItem isOpen={isOpen}>
                  <Link to={`/${page.link}`}>
                    <NavItemImage image={page.image} />
                    <NavTitle isOpen={isOpen}> {page.title} </NavTitle>
                  </Link>
                </NavItem>
              ))}
            </ul>
          </Navigation>
        </div>
        <Logo isOpen={isOpen} />
      </Menu>
      <ToggleContainer>
        <OpenButton isOpen={isOpen} onClick={() => handleNavigationBar()} />
      </ToggleContainer>
    </Sidebar>
  )
}

export default Navbar