import React, { useState } from 'react'
import { element } from 'prop-types'
import Sidebar from '../components/Sidebar'
import { SIDEBAR_PAGES } from '../config/constants'
import {
  TemplateSection,
  Navigation,
  Content
} from './Template.style'

// Remover
const user = {
  username: 'Germano',
  image:
    'https://media.licdn.com/dms/image/C4D03AQHv3UDt2OH7uw/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=qcsJy1xt4V8brdPvHXDU6WcBSnEr2mkH-FpmcFZRonU'
}

const Template = ({ children }) => {
  const [toggleNavigation, handleToggleNavigation] = useState(false)

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
      <Content isOpen={toggleNavigation}>{children}</Content>
    </TemplateSection>
  )
}

Template.propTypes = {
  children: element.isRequired
}

export default Template
