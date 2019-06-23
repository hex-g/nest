import React, { useState, useReducer } from 'react'
import Sidebar from '../components/Sidebar'
import InfoBar from '../components/InfoBar'
import Configuration from './Informations/Configuration'
import { THEME_COLORS } from '../config/constants'
import { SIDEBAR_PAGES } from '../config/constants'
import {
  TemplateSection,
  Navigation,
  Content,
  Informations,
} from './Template.style'

// Remover
const user = {
  username: 'Germano',
  image: 'https://media.licdn.com/dms/image/C4D03AQHv3UDt2OH7uw/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=qcsJy1xt4V8brdPvHXDU6WcBSnEr2mkH-FpmcFZRonU',
}

const Template = ({ children, handleThemeChange }) => {

  const handleDarkModeChange = (event) => {
    if (event.target.checked) {
      localStorage.setItem('favoriteTheme', THEME_COLORS.DARK)
      handleThemeChange(THEME_COLORS.DARK)
    } else {
      localStorage.setItem('favoriteTheme', THEME_COLORS.LIGHT)
      handleThemeChange(THEME_COLORS.LIGHT)
    }
  }

  const informationReducer = (state, action) => {
    switch (action.type) {
      case 'configuration':
        return (<Configuration handleDarkModeChange={handleDarkModeChange} />)
      default:
        throw new Error()
    }
  }

  const [toggleNavigation, handleToggleNavigation] = useState(false)
  const [toggleInformation, handleToggleInformation] = useState(false)
  const [information, dispatch] = useReducer(informationReducer, null)

  return (
    <TemplateSection>
      <Navigation isOpen={toggleNavigation}>
        <Sidebar
          isOpen={toggleNavigation}
          handleToggleNavigation={() => handleToggleNavigation(!toggleNavigation)}
          pages={SIDEBAR_PAGES}
          userInfo={user}
        />
      </Navigation>
      <Content isOpen={toggleNavigation}>
        {children}
      </Content>
      <Informations isOpen={toggleInformation}>
        <InfoBar
          isOpen={toggleInformation}
          handleToggleInformation={() => handleToggleInformation(!toggleInformation)}
          handleInformationChange={dispatch}
          information={information}
        />
      </Informations>
    </TemplateSection>
  )
}

export default Template