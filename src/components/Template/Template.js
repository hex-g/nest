import React from 'react'
import Sidebar from '../Sidebar'
import InfoBar from '../InfoBar'
import {
  Layout,
  Navigation,
  Content,
  Informations,
} from './Template.style'

const Template = ({ children }) => {

  const [toggleNavigation, handleToggleNavigation] = React.useState(false)
  const [toggleInformation, handleToggleInformation] = React.useState(false)

  return (
    <Layout>
        <Navigation isOpen={toggleNavigation}>
          <Sidebar isOpen={toggleNavigation} handleToggleNavigation={() => handleToggleNavigation(!toggleNavigation)} />
        </Navigation>
        <Content isOpen={toggleNavigation}>
          {children}
        </Content>
        <Informations isOpen={toggleInformation}>
          <InfoBar isOpen={toggleInformation} handleToggleInformation={() => handleToggleInformation(!toggleInformation)} />
        </Informations>
    </Layout>
  )
}

export default Template