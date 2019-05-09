import React from 'react'
import {
  Sidebar,
  Menu,
  ProfileContent,
  UserPicture,
  UserName,
  Navigation,
  NavItem,
  NavItemImage,
  NavItemText,
  Logo,
  ToggleContainer,
  OpenButton,
} from './Navbar.style'

const USERNAME = '[USERNAME]'
const PAGES = [{ text: '[PAGINA]', image: 'url("https://img.fireden.net/v/image/1462/63/1462638729784.png")' }]

const Navbar = ({
  username = USERNAME,
  pages = PAGES,
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
                  <NavItemImage image={page.image} />
                  <NavItemText href='/'>{page.text}</NavItemText>
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