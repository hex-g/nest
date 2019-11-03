/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import {
  string,
  any,
  shape,
  boolean,
  func
} from 'prop-types'
import { Link } from 'react-router-dom'
import { MugshotImage } from '../MugshotImage'
import PokeData from '../Pokedexdata'
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
  ToggleButton
} from './Sidebar.style'

const Sidebar = ({ isOpen, handleToggleNavigation, pages }) => {
  const MugshotSrc = MugshotImage()

  const playerName = PokeData().firstName

  return (
    <Aside isOpen={isOpen}>
      <Menu>
        <ProfileContent isOpen={isOpen}>
          <Link to='/profile'>
            <UserImage data-mugshot src={MugshotSrc} />
          </Link>
          <Username>{playerName}</Username>
        </ProfileContent>
        <NavigationItems>
          {pages
            && pages.map(page => (
              <Item key={page.link}>
                {page.link === 'https://alexandria-corporation.azurewebsites.net/'
                  ? <a target='_blank' rel='noopener noreferrer' href={page.link}>
                    {page.icon}
                    <ItemTitle isOpen={isOpen}>{page.title}</ItemTitle>
                  </a>
                  : <Link to={page.link}>
                    {page.icon}
                    <ItemTitle isOpen={isOpen}>{page.title}</ItemTitle>
                  </Link>}
              </Item>
            ))}
        </NavigationItems>
        <LogoWrapper>
          <Link to='/'>
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

Sidebar.defaultProps = {
  isOpen: false
}

Sidebar.propTypes = {
  isOpen: boolean,
  handleToggleNavigation: func.isRequired,
  pages: shape({
    icon: any,
    link: string,
    title: string
  }).isRequired
}

export default Sidebar
