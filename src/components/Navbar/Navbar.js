import React from 'react'
import {
  Wrapper,
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
  ToggleButton,
} from './Navbar.style'

const Navbar = ({ username = '[USERNAME]', pages = [{ text: '[PAGINA]', image: 'url("https://img.fireden.net/v/image/1462/63/1462638729784.png")' }] }) => {

  const [toggle, setToggle] = React.useState(false)

  return (
    <Wrapper toggle={toggle}>
      <Menu>
        <div>
          <ProfileContent toggle={toggle}>
            <UserPicture />
            <UserName>{username}</UserName>
          </ProfileContent>
          <Navigation>
            <ul>
              {pages.map(page => (
                <NavItem toggle={toggle}>
                  <NavItemImage image={page.image} />
                  <NavItemText href='/'>{page.text}</NavItemText>
                </NavItem>
              ))}
            </ul>
          </Navigation>
        </div>
        <Logo toggle={toggle} />
      </Menu>
      <ToggleContainer>
        <ToggleButton toggle={toggle} onClick={() => {
          setToggle(!toggle)
        }}
        />
      </ToggleContainer>
    </Wrapper >
  )
}

export default Navbar