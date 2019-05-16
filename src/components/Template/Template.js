import React from 'react'
import Sidebar from '../Sidebar'
import {
  Layout,
  NavigationAndContent,
  Navigation,
  Content,
} from './Template.style'

const Template = ({ children }) => {

  const [toggleNavigation, handleToggleNavigation] = React.useState(false)

  return (
    <Layout>
      <NavigationAndContent>
        <Navigation isOpen={toggleNavigation}>
          <Sidebar isOpen={toggleNavigation} handleToggleNavigation={() => handleToggleNavigation(!toggleNavigation)} />
        </Navigation>
        <Content isOpen={toggleNavigation}>
          {children}
        </Content>
      </NavigationAndContent>
    </Layout>
  )
}

export default Template