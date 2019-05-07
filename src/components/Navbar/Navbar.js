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

const Navbar = ({ username = '[USERNAME]', pages = [{text: '[PAGINA]', image: 'url("https://img.fireden.net/v/image/1462/63/1462638729784.png")'}]}) => (
  <Wrapper>
    <div>
      <ProfileContent>
        <UserPicture />
        <UserName>{username}</UserName>
      </ProfileContent>
      <Navigation>
        <ul>
          {pages.map(page => (
            <NavItem>
              <NavItemImage image={page.image}/>
              <a href='/'>{page.text}</a>
            </NavItem>
          ))}
        </ul>
      </Navigation>
    </div>
    <Logo />
  </Wrapper>
)

export default Navbar