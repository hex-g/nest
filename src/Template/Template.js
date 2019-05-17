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

const Configuration = () => (
  <div style={{ width: '200px', height: '100%', border: '1px solid gray', borderRadius: '8px' }}>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <p>Modo Noturno: </p><input type="checkbox" />
    </div>
  </div>
)

const informationReducer = (state, action) => {
  switch (action.type) {
    case 'configuration':
      return (<Configuration />);
    default:
      throw new Error()
  }
}

const Template = ({ children }) => {

  const [toggleNavigation, handleToggleNavigation] = useState(false)
  const [toggleInformation, handleToggleInformation] = useState(false)
  const [information, dispatch] = useReducer(informationReducer, null)

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
          information={information}
        />
      </Informations>
    </Layout>
  )
}

export default Template