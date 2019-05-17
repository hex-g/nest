import React, { useState, useReducer } from 'react'
import Sidebar from '../components/Sidebar'
import InfoBar from '../components/InfoBar'
import { SIDEBAR_PAGES } from '../config/constants'
import {
  Layout,
  Navigation,
  Content,
  Informations,
} from './Template.style'

// Remover
const user = {
  username: 'Caio',
  image: 'red',
}

const informationReducer = (state, action) => {
  switch (action.type) {
    case 'configuration':
      return (<div style={{ width: '50px', height: '50px', background: 'blue' }}></div>);
    case 'notification':
      return (<div style={{ width: '50px', height: '50px', background: 'yellow' }}></div>);
    default:
      throw new Error()
  }
}

const Template = ({ children }) => {

  const [toggleNavigation, handleToggleNavigation] = useState(false)
  const [toggleInformation, handleToggleInformation] = useState(true)
  const [state, dispatch] = useReducer(informationReducer, null)

  return (
    <Layout>
      <Navigation isOpen={toggleNavigation}>
        <Sidebar
          isOpen={toggleNavigation}
          handleToggleNavigation={() => handleToggleNavigation(!toggleNavigation)}
          pages={SIDEBAR_PAGES}
          userInfo={user} />
      </Navigation>
      <Content isOpen={toggleNavigation}>
        {children}
      </Content>
      <Informations isOpen={toggleInformation}>
        <InfoBar
          isOpen={toggleInformation}
          handleToggleInformation={() => handleToggleInformation(!toggleInformation)}
          handleInformationChange={dispatch}
          information={state}
        />
      </Informations>
    </Layout>
  )
}

export default Template