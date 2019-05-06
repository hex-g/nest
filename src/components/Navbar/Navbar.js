import React from 'react'
import {
  Wrapper,
  ProfileContent,
  UserPicture,
  UserName,
  Navigation,
  NavItem,
  NavItemImage,
  Logo,
} from './Navbar.style'

const Navbar = () => (
  <Wrapper>
    <div>
      <ProfileContent>
        <UserPicture />
        <UserName>[USERNAME]</UserName>
      </ProfileContent>
      <Navigation>
        <ul>
          <NavItem>
            <NavItemImage />
            <a href='/'>[PAGINA]</a>
          </NavItem>
        </ul>
      </Navigation>
    </div>
    <Logo />
  </Wrapper>
)

export default Navbar